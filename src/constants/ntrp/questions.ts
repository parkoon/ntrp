import { nanoid } from 'nanoid'

import { INtrp } from '@Interfaces/Ntrp'

export default {
  1: {
    id: 1,
    type: 'stroke',
    skillName: '스트로크',
    title: '포핸드 스트로트의 안정성에 대해서 물어볼게요.',
    tags: ['스트로크', '포핸드', '안정성'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '불가',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '랠리10번가능',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '안정적',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격 -> 방어',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '완벽',
      },
    ],
    weight: 30,
  },

  2: {
    id: 2,
    type: 'stroke',
    skillName: '스트로크',
    title: '공격성 스트로트의 안정성에 대해서 물어볼게요.',
    tags: ['스트로크', '포핸드', '공격성'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '불가',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '랠리10번가능',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '안정적',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격 -> 방어',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '완벽',
      },
    ],
    weight: 20,
  },
  3: {
    id: 3,
    type: 'stroke',
    skillName: '스트로크',
    title: '포핸드 스트로트의 코스조절에 대해서 물어볼게요.',
    tags: ['스트로크', '포핸드', '코스조절'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '불가',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '랠리10번가능',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '안정적',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격 -> 방어',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '완벽',
      },
    ],
    weight: 30,
  },
  4: {
    id: 4,
    type: 'stroke',
    skillName: '스트로크',
    title: '포핸드 스트로트의 구종조절 대해서 물어볼게요.',
    tags: ['스트로크', '포핸드', '구종조절'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '불가',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '랠리10번가능',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '안정적',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격 -> 방어',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '완벽',
      },
    ],
    weight: 30,
  },
} as { [key: number]: INtrp }
