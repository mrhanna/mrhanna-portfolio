import { useState } from 'react';
import { ActivityIdentifier } from './useDisplayMapComputer';

export function useSkillsState(): [
  ActivityIdentifier,
  ActivityIdentifier,
  (identifier: ActivityIdentifier) => void,
  (identifier: ActivityIdentifier) => void,
  () => void,
] {
  const [focusStatus, setFocusStatus] = useState<ActivityIdentifier>({
    type: '',
    skill: '',
    category: '',
  });

  const [hoverStatus, setHoverStatus] = useState<ActivityIdentifier>({
    type: '',
    skill: '',
    category: '',
  });

  const setHover = (identifier: ActivityIdentifier) => {
    setHoverStatus(identifier);
  };

  const clearHover = () => {
    setHoverStatus({ type: '', skill: '', category: '' });
  };

  const setFocus = (identifier: ActivityIdentifier) => {
    if (
      focusStatus.category === identifier.category &&
      hoverStatus.category === identifier.category &&
      hoverStatus.skill === identifier.skill
    ) {
      // clicked the focused item -> unfocus
      setFocusStatus({ type: '', skill: '', category: '' });
      setHoverStatus({ type: '', skill: '', category: '' });
      return;
    }

    // new idea: only cards receive "focus"
    setFocusStatus({
      skill: '',
      category: identifier.category,
      type: 'card',
    });

    // for mobile: do hovers with click too
    setHoverStatus(identifier);
  };

  return [focusStatus, hoverStatus, setFocus, setHover, clearHover];
}
