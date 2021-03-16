import { nanoid } from 'nanoid'

import { INtrp } from '@Interfaces/Ntrp'

export default {
  1: {
    id: 1,
    type: 'stroke',
    skillName: '스트로크',
    title: '랠리를 안정적으로 할 수 있습니까?',
    tags: ['스트로크', '포핸드', '안정성'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '공을 넘기기가 힘들어요',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '실수가 많으나 공을 넘길 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '어느정도 안정적으로 랠리를 할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격적인 볼을 안정적으로 넘길 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '언제든 안정적으로 공을 넘길 수 있어요',
      },
    ],
    weight: 30,
  },

  2: {
    id: 2,
    type: 'stroke',
    skillName: '스트로크',
    title: '공격적으로 스트로크를 할 수 있습니까?',
    tags: ['스트로크', '포핸드', '공격성'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '공격적인 볼을 칠 줄 모르겠어요',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '실수가 많으나 공격적으로 칠 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '어느정도 공격적으로 볼을 칠 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공격적인 볼을 공격적으로 대응할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '언제든 공격적으로 공을 넘길 수 있어요',
      },
    ],
    weight: 20,
  },
  3: {
    id: 3,
    type: 'stroke',
    skillName: '스트로크',
    title: '원하는 코스로 공을 보낼 수 있습니까?',
    tags: ['스트로크', '포핸드', '코스조절'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '공을 원하는 방향으로 넘기는게 힘들어요',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '공의 방향(좌우)을 조절할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '공의 깊이(길고 짧음)를 조절할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '공의 방향과 깊이를 조절 할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '원하는 지점에 정확하게 공을 보낼 수 있어요',
      },
    ],
    weight: 25,
  },
  4: {
    id: 4,
    type: 'stroke',
    skillName: '스트로크',
    title: '스핀량, 그립, 스탠스 조절을 할 수 있습니까?',
    tags: ['스트로크', '포핸드', '구종조절'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '그립,스탠스,스핀에 대한 이해가 부족해요',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '스핀량의 조절에 대한 이해가 생겼어요',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '스핀량을 어느정도 조절할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '상황에 따라 구종을 구분하여 사용할 수 있어요.',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '여러가지 구종을 이용해 상대방을 흔들 수 있음.',
      },
    ],
    weight: 15,
  },
  5: {
    id: 5,
    type: 'stroke',
    skillName: '스트로크',
    title: '힘 조절을 어느정도 할 수 있습니까?',
    tags: ['스트로크', '포핸드', '힘조절'],
    answers: [
      {
        id: nanoid(4),
        weight: 0,
        title: '힘조절이 전혀 안돼요',
      },
      {
        id: nanoid(4),
        weight: 0.25,
        title: '힘조절은 가능하나 정상적인 스윙이 안돼요',
      },
      {
        id: nanoid(4),
        weight: 0.5,
        title: '정상적인 스윙으로 힘조절을 할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 0.75,
        title: '상황에 따라 힘 조절을 잘 할 수 있어요',
      },
      {
        id: nanoid(4),
        weight: 1,
        title: '힘 조절을 통해 상대방을 흔들 수 있어요',
      },
    ],
    weight: 10,
  },
} as { [key: number]: INtrp }
