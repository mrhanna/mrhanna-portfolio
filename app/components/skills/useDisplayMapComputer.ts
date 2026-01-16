import { useCallback, useMemo, useRef } from 'react';

export interface ActivityIdentifier {
  type: 'icon' | 'card' | 'label' | '';
  category: string;
  skill: string;
}

export interface DisplayMap {
  icons: Record<string, 1 | 2 | 3 | 4>;
  cards: Record<string, 1 | 2 | 3 | 4>;
  labels: Record<string, 1 | 2 | 3 | 4>;
}

export function useDisplayMapComputer(skills: Record<string, string[]>) {
  const skillsRef = useRef(skills);

  const computeDisplayMap = useCallback(function computeDisplayMap(
    hover: ActivityIdentifier,
    focus: ActivityIdentifier,
  ): DisplayMap {
    const displayMap: DisplayMap = {
      icons: {},
      cards: {},
      labels: {},
    };

    const setAllCards = (level: 1 | 2 | 3 | 4) => {
      for (const cat in skillsRef.current) displayMap.cards[cat] = level;
    };
    const setAllIcons = (level: 1 | 2 | 3 | 4) => {
      Object.values(skillsRef.current)
        .flat()
        .forEach((skill) => {
          displayMap.icons[skill] = level;
        });
    };
    const setIconsOfCategory = (category: string, level: 1 | 2 | 3 | 4) => {
      skillsRef.current[category].forEach((skill) => {
        displayMap.icons[skill] = level;
      });
    };

    if (focus.type || hover.type) {
      // Fade everything
      setAllCards(1);
      setAllIcons(1);
    }

    // HOVER

    if (hover.type === 'card') {
      displayMap.cards[hover.category] = focus.type ? 2 : 3;
      setIconsOfCategory(hover.category, 3);
    }

    //
    else if (hover.type === 'icon') {
      displayMap.icons[hover.skill] = 3;
      displayMap.cards[hover.category] = 3;
      displayMap.labels[hover.skill] = 3;
    }

    //
    else if (hover.type === 'label') {
      setIconsOfCategory(hover.category, 3);
      // displayMap.icons[hover.skill] = 3;
      displayMap.cards[hover.category] = focus.type ? 2 : 3;
      displayMap.labels[hover.skill] = 3;
    }

    //
    //FOCUS

    if (focus.type === 'icon') {
      displayMap.icons[focus.skill] = 4;
      displayMap.cards[focus.category] = 4;
      displayMap.labels[focus.skill] = 4;
    }

    //
    else if (focus.type === 'label') {
      setIconsOfCategory(focus.category, 2);
      if (hover.type === 'icon' && hover.category === focus.category) {
        displayMap.icons[hover.skill] = 3;
      }
      displayMap.icons[focus.skill] = 4;
      displayMap.cards[focus.category] = 4;
      displayMap.labels[focus.skill] = 4;
    }

    //
    else if (focus.type === 'card') {
      displayMap.cards[focus.category] = 4;
      setIconsOfCategory(focus.category, 3);
    }

    return displayMap;
  }, []);

  return computeDisplayMap;
}
