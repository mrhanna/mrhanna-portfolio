import Image from 'next/image';
import SkillIcon, { Skill } from './skills/SkillIcon';
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siWordpress,
  siStrapi,
  siNodedotjs,
  siPhp,
  siSymfony,
  siPostgresql,
  siPrisma,
  siGit,
  siGithub,
  siDocker,
  siExpo,
  siGimp,
  siInkscape,
} from 'simple-icons';
import { useEffect, useMemo, useState } from 'react';
import { a } from 'framer-motion/client';
import {
  ActivityIdentifier,
  useDisplayMapComputer,
} from './skills/useDisplayMapComputer';
import { motion } from 'framer-motion';

const skills: Record<string, Skill[]> = {
  'Core Web': [
    { name: 'HTML', icon: siHtml5, cloudOrder: 0 },
    { name: 'CSS', icon: siCss, cloudOrder: 2 },
    { name: 'JavaScript', icon: siJavascript, cloudOrder: 3 },
    { name: 'TypeScript', icon: siTypescript, weight: 2, cloudOrder: 1 },
    { name: 'React', icon: siReact, weight: 2, cloudOrder: 10 },
    { name: 'Next.js', icon: siNextdotjs, weight: 2, cloudOrder: 7 },
    { name: 'Tailwind CSS', icon: siTailwindcss, cloudOrder: 4 },
  ],
  'CMS & Data': [
    { name: 'WordPress', icon: siWordpress, weight: 2, cloudOrder: 11 },
    { name: 'Strapi', icon: siStrapi, weight: 2, cloudOrder: 15 },
    { name: 'PostgreSQL', icon: siPostgresql, cloudOrder: 13 },
    { name: 'Prisma', icon: siPrisma, cloudOrder: 14 },
  ],
  Backend: [
    { name: 'Node.js', icon: siNodedotjs, cloudOrder: 8 },
    { name: 'PHP', icon: siPhp, cloudOrder: 9 },
    { name: 'Symfony', icon: siSymfony, cloudOrder: 12 },
  ],
  'Tooling & Infrastructure': [
    { name: 'Git', icon: siGit, cloudOrder: 5 },
    { name: 'GitHub', icon: siGithub, cloudOrder: 16 },
    { name: 'Docker', icon: siDocker, cloudOrder: 17 },
    {
      name: 'Azure (AZ-900)',
      icon: {
        path: [
          'm118.54 186.71a663.02 663.02 0 0 0-62.678 5.8164v1.4023c0 55.782 94.137 87.924 94.137 87.924s94.137-32.969 94.137-87.924v-0.94141a663.02 663.02 0 0 0-125.6-6.2773zm31.459 18.236 5.1406 15.801h16.619l-13.449 9.7695 5.1387 15.801-13.449-9.7695-13.449 9.7695 5.1387-15.801-13.449-9.7695h16.619l5.1406-15.801z',

          'm150 9.6406c-3.5393-0.00281-7.0554 0.57112-10.41 1.6992l-74.75 22.59h-0.16992l-0.16016 0.05078c-8.7251 2.979-14.587 11.181-14.58 20.4v5.5488h0.070312v52.328c3.3064-0.46436 6.613-0.90765 9.9199-1.3281l0.080078-0.00977v-56.119c-0.0119-4.9157 3.0967-9.2973 7.7402-10.91l74.91-22.631c1.894-0.64537 3.8647-1.0387 5.8613-1.1699 3.0007-0.19771 6.0109 0.19989 8.8574 1.1699l74.852 22.631c4.659 1.5995 7.7854 5.9843 7.7793 10.91v56.129c3.3687 0.42649 6.7352 0.876 10.1 1.3476v-0.0137c-0.01-1e-3 -0.0195-3e-3 -0.0293-4e-3v-57.83c0.01932-9.2304-5.8447-17.447-14.58-20.43l-0.16015-0.05078h-0.16992l-74.74-22.609c-3.358-1.1283-6.8774-1.7022-10.42-1.6992zm32.949 179.57c3.1181 0.2816 6.2341 0.58629 9.3477 0.91406-3.1136-0.32775-6.2296-0.63245-9.3477-0.91406zm-122.95 5.3725c-3.3362 0.47703-6.6699 0.9809-10 1.5117 0.16086 14.304 5.6318 28.386 16.301 41.503 8.15 10 19.37 19.62 33.34 28.52 14.853 9.3606 30.671 17.095 47.18 23.07l3.2793 1.1211 3.2695-1.1504c16.484-6.1065 32.278-13.933 47.121-23.35 14-9 25.169-18.561 33.299-28.531 10.679-13.089 16.16-27.615 16.311-41.714-2.177-0.34655-9.7737-1.4098-10.1-1.4416v0.93845c0 52.54-90 84.687-90 84.687s-90-30.919-90-84.249z',

          'm104 88.53a7.69 7.69 0 0 1-3.64 0.77 5.89 5.89 0 0 1-4.5-1.8 6.7 6.7 0 0 1-1.68-4.74 7 7 0 0 1 1.9-5.1 6.42 6.42 0 0 1 4.81-2 7.78 7.78 0 0 1 3.11 0.54v1.64a6.39 6.39 0 0 0-3.12-0.78 4.78 4.78 0 0 0-3.68 1.51 5.7 5.7 0 0 0-1.41 4 5.4 5.4 0 0 0 1.32 3.83 4.49 4.49 0 0 0 3.45 1.43 6.5 6.5 0 0 0 3.44-0.83zm13.43 0.55h-7v-13.15h6.68v1.4h-5.11v4.37h4.75v1.39h-4.75v4.6h5.43zm15.72 0h-1.83l-2.2-3.68a7 7 0 0 0-0.59-0.88 3.25 3.25 0 0 0-0.58-0.59 2.38 2.38 0 0 0-0.65-0.34 2.57 2.57 0 0 0-0.77-0.1h-1.27v5.59h-1.54v-13.15h3.93a5.41 5.41 0 0 1 1.59 0.22 3.55 3.55 0 0 1 1.27 0.65 3.17 3.17 0 0 1 0.84 1.1 4 4 0 0 1 0.09 2.8 3.22 3.22 0 0 1-0.58 1 3.59 3.59 0 0 1-0.92 0.76 4.53 4.53 0 0 1-1.21 0.5 2.61 2.61 0 0 1 0.57 0.34 2.76 2.76 0 0 1 0.47 0.44 5.46 5.46 0 0 1 0.43 0.58c0.15 0.22 0.31 0.47 0.49 0.76zm-7.89-11.75v4.76h2.09a3 3 0 0 0 1.07-0.17 2.48 2.48 0 0 0 0.85-0.5 2.18 2.18 0 0 0 0.56-0.8 2.54 2.54 0 0 0 0.2-1.06 2 2 0 0 0-0.68-1.64 2.91 2.91 0 0 0-2-0.59zm20.4 0h-3.8v11.75h-1.54v-11.75h-3.79v-1.4h9.13zm7.34 11.75h-1.55v-13.15h1.55zm13.93-11.75h-5.14v4.55h4.75v1.38h-4.75v5.82h-1.54v-13.15h6.68zm7.79 11.75h-1.54v-13.15h1.54zm14.2 0h-7v-13.15h6.68v1.4h-5.13v4.37h4.75v1.39h-4.75v4.6h5.43zm6.29 0v-13.15h3.63q7 0 7 6.41a6.48 6.48 0 0 1-1.93 4.9 7.17 7.17 0 0 1-5.17 1.84zm1.54-11.75v10.36h2a5.53 5.53 0 0 0 4-1.39 5.15 5.15 0 0 0 1.45-3.92c0-3.37-1.8-5-5.38-5zm-82.67-12.67h-3.94v-10.58c0-1.14 0-2.41 0.15-3.79h-0.1a18.74 18.74 0 0 1-0.55 2.35l-4.14 12h-3.26l-4.24-11.88a22.43 22.43 0 0 1-0.56-2.47h-0.11c0.11 1.75 0.16 3.28 0.16 4.59v9.78h-3.56v-17.66h5.83l3.62 10.48a16.29 16.29 0 0 1 0.62 2.52h0.07c0.22-1 0.46-1.82 0.7-2.55l3.62-10.45h5.69zm5.61-14.66a2.29 2.29 0 0 1-1.62-0.59 1.89 1.89 0 0 1-0.63-1.44 1.82 1.82 0 0 1 0.63-1.43 2.66 2.66 0 0 1 3.24 0 1.85 1.85 0 0 1 0.62 1.43 1.9 1.9 0 0 1-0.62 1.46 2.32 2.32 0 0 1-1.62 0.57zm1.92 14.62h-3.9v-12.62h3.9zm12.85-0.42a7.71 7.71 0 0 1-3.81 0.76 6.42 6.42 0 0 1-4.71-1.76 6.08 6.08 0 0 1-1.8-4.55 6.7 6.7 0 0 1 1.93-5.07 7.09 7.09 0 0 1 5.15-1.86 6.59 6.59 0 0 1 3.24 0.6v3.3a4.46 4.46 0 0 0-2.73-0.91 3.58 3.58 0 0 0-2.66 1 4.19 4.19 0 0 0-0.07 5.29 3.47 3.47 0 0 0 2.58 0.95 5.13 5.13 0 0 0 2.85-0.91zm10.78-8.65a3.32 3.32 0 0 0-1.64-0.39 2.35 2.35 0 0 0-2 0.93 4.06 4.06 0 0 0-0.72 2.54v6h-3.88v-12.63h3.89v2.35a3.38 3.38 0 0 1 3.33-2.57 2.47 2.47 0 0 1 1 0.15zm7.76 9.45a6.77 6.77 0 0 1-5-1.76 6.4 6.4 0 0 1-1.81-4.81 6.43 6.43 0 0 1 1.88-4.9 7.06 7.06 0 0 1 5.06-1.77 6.69 6.69 0 0 1 4.93 1.77 6.26 6.26 0 0 1 1.79 4.68 6.67 6.67 0 0 1-1.84 5 6.85 6.85 0 0 1-5.01 1.79zm0.1-10.25a2.59 2.59 0 0 0-2.15 0.95 4.23 4.23 0 0 0-0.76 2.68q0 3.64 2.93 3.64t2.8-3.73q-0.03-3.58-2.85-3.58zm8.46 9.57v-3.15a8.74 8.74 0 0 0 1.92 0.86 6.34 6.34 0 0 0 1.81 0.28 3.85 3.85 0 0 0 1.63-0.28 0.92 0.92 0 0 0 0.6-0.86 0.81 0.81 0 0 0-0.27-0.62 2.61 2.61 0 0 0-0.7-0.43 8.34 8.34 0 0 0-0.93-0.33 9.22 9.22 0 0 1-1-0.34 8.75 8.75 0 0 1-1.33-0.61 3.85 3.85 0 0 1-1-0.75 3 3 0 0 1-0.59-1 3.91 3.91 0 0 1-0.21-1.35 3.45 3.45 0 0 1 0.47-1.82 3.68 3.68 0 0 1 1.23-1.25 5.43 5.43 0 0 1 1.81-0.67 9.31 9.31 0 0 1 2.07-0.23 12.4 12.4 0 0 1 1.7 0.13 14.36 14.36 0 0 1 1.7 0.38v3a5.85 5.85 0 0 0-1.59-0.65 6.79 6.79 0 0 0-1.65-0.21 4 4 0 0 0-0.72 0.06 2.35 2.35 0 0 0-0.6 0.2 1.15 1.15 0 0 0-0.41 0.33 0.78 0.78 0 0 0-0.15 0.47 0.9 0.9 0 0 0 0.22 0.59 2.17 2.17 0 0 0 0.58 0.42 5.33 5.33 0 0 0 0.8 0.32l0.87 0.29a11.57 11.57 0 0 1 1.4 0.59 4.62 4.62 0 0 1 1.08 0.76 2.84 2.84 0 0 1 0.69 1 3.55 3.55 0 0 1 0.24 1.38 3.61 3.61 0 0 1-0.48 1.91 3.85 3.85 0 0 1-1.3 1.3 6.18 6.18 0 0 1-1.86 0.73 10.43 10.43 0 0 1-2.19 0.22 11.25 11.25 0 0 1-3.84-0.67zm17.95 0.68a6.77 6.77 0 0 1-5-1.76 6.43 6.43 0 0 1-1.8-4.81 6.42 6.42 0 0 1 1.87-4.9 7.09 7.09 0 0 1 5.07-1.77 6.72 6.72 0 0 1 4.93 1.77 6.29 6.29 0 0 1 1.78 4.68 6.67 6.67 0 0 1-1.84 5 6.85 6.85 0 0 1-5.01 1.79zm0.1-10.25a2.57 2.57 0 0 0-2.14 0.95 4.17 4.17 0 0 0-0.77 2.68q0 3.64 2.94 3.64t2.79-3.73q0-3.58-2.82-3.58zm17.17-5.75a3.85 3.85 0 0 0-1.44-0.29c-1.25 0-1.87 0.67-1.87 2v1.29h2.88v2.88h-2.88v9.75h-3.89v-9.72h-2.12v-2.91h2.12v-1.53a4.54 4.54 0 0 1 1.42-3.47 5.36 5.36 0 0 1 3.82-1.32 6.47 6.47 0 0 1 2 0.25zm9.56 15.51a5.83 5.83 0 0 1-2.6 0.45q-4.12 0-4.12-4.27v-5.78h-2.05v-2.91h2.05v-2.69l3.88-1.11v3.8h2.84v2.88h-2.84v5.12c0 1.31 0.52 2 1.57 2a2.64 2.64 0 0 0 1.27-0.36z',

          'm149.96 101.28a720.59 720.59 0 0 0-90.041 5.6465c-10.853 1.38-21.704 2.9963-32.551 4.8496a16.44 16.44 0 0 0-10.75 6.6914 13.48 13.48 0 0 0-2.25 10.25l11 57.389a14.64 14.64 0 0 0 16.82 11.471c6.9267-1.1933 13.867-2.2705 20.82-3.2305a634.26 634.26 0 0 1 180.08 0.86133c4.9533 0.72666 9.8936 1.5158 14.82 2.3691a14.92 14.92 0 0 0 2.4805 0.20898 14.62 14.62 0 0 0 14.34-11.689l10.949-57.369a13.49 13.49 0 0 0-2.2988-10.26 16.44 16.44 0 0 0-10.75-6.6914c-10.853-1.8533-21.731-3.4696-32.631-4.8496a720.59 720.59 0 0 0-90.039-5.6465zm-40.684 6.8867a716.06 716.06 0 0 1 162.38 9.25 10.69 10.69 0 0 1 7.0098 4.3106 7.77 7.77 0 0 1 1.3301 5.9199l-10.939 57.35a8.89 8.89 0 0 1-10.18 6.9102 640.15 640.15 0 0 0-217.66 0 8.86 8.86 0 0 1-10.221-6.9102l-11-57.359a7.8 7.8 0 0 1 1.3496-5.9102 10.69 10.69 0 0 1 7-4.3106 716.06 716.06 0 0 1 80.928-9.25z',

          'm53.46 145.35-6.3 0.9 0.62 4.39 5.8-0.83 0.46 3.27-5.8 0.82 1 6.95-4 0.57-2.54-17.88 10.3-1.47zm19.2 4.89q0.84 8.08-6.7 8.87-7.32 0.76-8.14-7.14l-1.08-10.37 4.06-0.42 1.09 10.42c0.3 2.9 1.58 4.24 3.86 4s3.19-1.75 2.9-4.55l-1.1-10.57 4-0.42zm21.34 6.24-4.09 0.3-8.27-10.78c-0.48-0.63-0.81-1.11-1-1.43a27.21 27.21 0 0 1 0.31 2.91l0.71 9.9-3.83 0.27-1.29-18 4.37-0.31 7.93 10.45c0.36 0.47 0.7 0.94 1 1.41a20.71 20.71 0 0 1-0.28-2.46l-0.71-10 3.83-0.28zm4.49-0.24-0.83-18 6.39-0.29q9.61-0.45 10 8.35a8.9 8.9 0 0 1-2.31 6.85 9.68 9.68 0 0 1-6.87 2.83zm3.38-14.92 0.53 11.43 2-0.09a5.44 5.44 0 0 0 4.07-1.77 6 6 0 0 0 1.31-4.39 5.46 5.46 0 0 0-1.68-4 5.69 5.69 0 0 0-4.25-1.29zm31.51 13.68-4.43 0.11-1.39-4-6.42 0.16-1.17 4-4.4 0.11 6.11-18.21 4.82-0.13zm-6.83-7-2.09-6a7.75 7.75 0 0 1-0.35-1.61h-0.11a7.16 7.16 0 0 1-0.27 1.58l-1.81 6.17zm30.08 6.88h-4v-10.81c0-1.16 0-2.45 0.14-3.86h-0.1a18.5 18.5 0 0 1-0.56 2.39l-4.19 12.3h-3.32l-4.35-12.14a24.14 24.14 0 0 1-0.58-2.51h-0.11q0.18 2.67 0.18 4.68v10h-3.67l-0.07-18.03h5.95l3.73 10.69a13.93 13.93 0 0 1 0.65 2.58h0.08a25 25 0 0 1 0.71-2.61l3.65-10.69h5.8zm15.37 0.25-10.83-0.13 0.28-18.05 10.41 0.16-0.05 3.32-6.34-0.1-0.07 4 5.91 0.09-0.05 3.3-5.91-0.09-0.06 4.13 6.76 0.11zm19.58 0.62-4.11-0.14-7.05-11.61a15.9 15.9 0 0 1-0.85-1.53v2.92l-0.34 9.92-3.84-0.13 0.62-18 4.37 0.15 6.79 11.23c0.31 0.51 0.6 1 0.86 1.5h-0.03a18.07 18.07 0 0 1 0-2.48l0.34-10 3.84 0.13zm18-13.81-5.15-0.28-0.8 14.72-4.08-0.22 0.81-14.72-5.12-0.28 0.18-3.31 14.34 0.79zm16.09 15.99-4.42-0.34-1-4.1-6.4-0.48-1.57 3.91-4.39-0.33 7.91-17.51 4.8 0.36zm-6.09-7.62-1.48-6.2a7.68 7.68 0 0 1-0.18-1.64h-0.1a7.15 7.15 0 0 1-0.43 1.55l-2.39 5.98zm19.42 8.99-10.7-1.09 1.83-18 4.05 0.41-1.5 14.68 6.65 0.68zm2.06-0.46 0.53-4a7.78 7.78 0 0 0 4.69 2.48 5.7 5.7 0 0 0 1.35 0 3 3 0 0 0 1-0.25 1.68 1.68 0 0 0 0.65-0.5 1.45 1.45 0 0 0 0.28-0.69 1.57 1.57 0 0 0-0.17-1 3.54 3.54 0 0 0-0.72-0.87 8 8 0 0 0-1.14-0.84c-0.44-0.28-0.93-0.57-1.45-0.86a8 8 0 0 1-2.84-2.55 4.75 4.75 0 0 1-0.62-3.19 4.65 4.65 0 0 1 2.63-3.78 7 7 0 0 1 2.37-0.65 11.41 11.41 0 0 1 2.73 0.05 17.15 17.15 0 0 1 2.46 0.5 10.41 10.41 0 0 1 1.92 0.78l-0.5 3.74a5.59 5.59 0 0 0-0.9-0.68 7.34 7.34 0 0 0-1-0.54 7.85 7.85 0 0 0-1.09-0.38 8.82 8.82 0 0 0-1-0.22 5.48 5.48 0 0 0-1.27 0 3.12 3.12 0 0 0-1 0.24 1.8 1.8 0 0 0-0.67 0.49 1.31 1.31 0 0 0-0.31 0.71 1.42 1.42 0 0 0 0.13 0.84 2.61 2.61 0 0 0 0.58 0.76 7.13 7.13 0 0 0 1 0.77c0.39 0.26 0.83 0.53 1.33 0.81a16.57 16.57 0 0 1 1.8 1.22 7.14 7.14 0 0 1 1.31 1.33 4.49 4.49 0 0 1 0.74 1.58 5 5 0 0 1 0.07 2 5.11 5.11 0 0 1-0.9 2.44 4.63 4.63 0 0 1-1.76 1.44 6.67 6.67 0 0 1-2.39 0.6 13.57 13.57 0 0 1-2.76-0.08 15.79 15.79 0 0 1-2.77-0.63 8.33 8.33 0 0 1-2.31-1.07z',
        ],
        hex: ['0064b5', '002050', '17154c', '505050', '282828'],

        viewBox: '0 0 300 300',
      },
      cloudOrder: 20,
    },
  ],
  Mobile: [{ name: 'Expo', icon: siExpo, cloudOrder: 6 }],
  'Visual Tools': [
    { name: 'GIMP', icon: siGimp, cloudOrder: 18 },
    { name: 'Inkscape', icon: siInkscape, cloudOrder: 19 },
  ],
};

const simpleSkills: Record<string, string[]> = {};

Object.keys(skills).forEach((category) => {
  simpleSkills[category] = [];
  skills[category].forEach((skill) => {
    skill.category = category;
    simpleSkills[category].push(skill.name);
  });
});

function toId(str: string) {
  return str.replaceAll(' ', '-').toLowerCase();
}

export default function SkillsSection() {
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

  useEffect(() => {
    if (focusStatus.category) {
      document
        .getElementById(toId(`skill-card-${focusStatus.category}`))
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
    }
  }, [focusStatus.category]);

  useEffect(() => {
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (
        e.target &&
        e.target instanceof HTMLElement &&
        !e.target.closest('.skill-card, .skill-icon')
      ) {
        setFocusStatus({ type: '', skill: '', category: '' });
        setHoverStatus({ type: '', skill: '', category: '' });
      }
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFocusStatus({ type: '', skill: '', category: '' });
        setHoverStatus({ type: '', skill: '', category: '' });
      }
    };

    document.addEventListener('click', onPointer);
    document.addEventListener('touchstart', onPointer);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('click', onPointer);
      document.removeEventListener('touchstart', onPointer);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  const computeDisplayMap = useDisplayMapComputer(simpleSkills);

  const displayMap = useMemo(
    () => computeDisplayMap(hoverStatus, focusStatus),
    [hoverStatus, focusStatus],
  );

  const handleMouseEnter = (identifier: ActivityIdentifier) => {
    setHoverStatus(identifier);
  };

  const clearHover = () => {
    setHoverStatus({ type: '', skill: '', category: '' });
  };

  const handleClick = (identifier: ActivityIdentifier) => {
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

  const handleLabelMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
    category: string,
  ) => {
    const related = e.relatedTarget as Node | null;
    const cardEl = (e.currentTarget as HTMLElement).closest('.skill-card');

    if (
      related &&
      cardEl &&
      related instanceof Node &&
      cardEl.contains(related)
    ) {
      // pointer moved somewhere else inside the same card -> fallback to card hover
      setHoverStatus({ type: 'card', skill: '', category });
    } else {
      // pointer left the card entirely -> clear hover
      setHoverStatus({ type: '', skill: '', category: '' });
    }
  };

  return (
    <section className="bg-ui-blue-200">
      <div className="container sideline px-4">
        <h2 className="Text text-ui-blue-800 font-black pt-12 pb-4">
          Skills & Technologies
        </h2>

        <div className="sr-only">
          {Object.keys(simpleSkills).map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {simpleSkills[category].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-2 gap-8 cursor-crosshair pb-8"
          aria-hidden="true"
        >
          <div onMouseLeave={clearHover}>
            {Object.keys(skills).map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`skill-card scroll-m-8 level-${displayMap.cards[category] ?? 2}`}
                  onMouseEnter={() =>
                    handleMouseEnter({ type: 'card', category, skill: '' })
                  }
                  onClick={() =>
                    handleClick({ type: 'card', category, skill: '' })
                  }
                  id={toId(`skill-card-${category}`)}
                >
                  <h3 className="my-2 text-xl font-black">{category}</h3>
                  <ul>
                    {skills[category].map((skill) => (
                      <li
                        className={`skill-label level-${displayMap.labels[skill.name] ?? 2}`}
                        onMouseEnter={() =>
                          handleMouseEnter({
                            type: 'label',
                            category,
                            skill: skill.name,
                          })
                        }
                        onMouseLeave={(e) => handleLabelMouseLeave(e, category)}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          handleClick({
                            type: 'label',
                            category,
                            skill: skill.name,
                          });
                        }}
                        key={skill.name}
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative cursor-crosshair mb-4">
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.3 }}
              className="list-style-none grid grid-cols-6 gap-2 sticky"
              style={{
                top: 'calc(50% - var(--container-max) / 6)',
              }}
              onMouseLeave={clearHover}
            >
              {Object.values(skills)
                .flat()
                .map((skill) => {
                  const identifier = {
                    type: 'icon',
                    category: skill.category,
                    skill: skill.name,
                  } as ActivityIdentifier;

                  return (
                    <SkillIcon
                      key={skill.name}
                      skill={skill}
                      displayLevel={displayMap.icons[skill.name] ?? 2}
                      onClick={() => handleClick(identifier)}
                      onMouseEnter={() => handleMouseEnter(identifier)}
                    />
                  );
                })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
