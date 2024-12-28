import { IHistory, ONLINE_STATE, PLAYER_STATE, Score } from '../types';

export const ONBOARDIG_MESSAGES = [
  {
    title: 'Bem-vindo',
    imagePath: '/onboarding-1.png',
    description:
      'Um dos jogos mais antigos do mundo agora disponível no seu smartphone!',
  },
  {
    title: 'Competir',
    imagePath: '/onboarding-2.png',
    description: 'Jogue com seus amigos e prove que você é um oponente digno!',
  },
  {
    title: 'Placar',
    imagePath: '/onboarding-3.png',
    description: 'Ganhe pontos e chegue ao topo do placar!',
  },
];

export const HISTORIC: IHistory[] = [
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.DRAW,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.DRAW,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },

  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.DRAW,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.WON,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.LOST,
  },
  {
    date: '05.25.2022.',
    playerFaced: 'Elias Tchissingui',
    result: PLAYER_STATE.DRAW,
  },
];

export const SCORE: Score[] = [
  {
    playerName: 'Aristides da Costa',
    position: 1,
    point: 130,
  },
  {
    playerName: 'Aristides da Costa',
    position: 2,
    point: 120,
  },
  {
    playerName: 'Aristides da Costa',
    position: 3,
    point: 110,
  },
  {
    playerName: 'Aristides da Costa',
    position: 4,
    point: 100,
  },
  {
    playerName: 'Aristides da Costa',
    position: 5,
    point: 90,
  },
  {
    playerName: 'Aristides da Costa',
    position: 6,
    point: 80,
  },
  {
    playerName: 'Aristides da Costa',
    position: 7,
    point: 70,
  },
  {
    playerName: 'Aristides da Costa',
    position: 8,
    point: 65,
  },
  {
    playerName: 'Aristides da Costa',
    position: 9,
    point: 60,
  },
  {
    playerName: 'Aristides da Costa',
    position: 10,
    point: 55,
  },
  {
    playerName: 'Aristides da Costa',
    position: 11,
    point: 50,
  },
  {
    playerName: 'Aristides da Costa',
    position: 12,
    point: 45,
  },
  {
    playerName: 'Aristides da Costa',
    position: 13,
    point: 30,
  },
  {
    playerName: 'Aristides da Costa',
    position: 14,
    point: 25,
  },
];

export const ICONS = [
  { name: 'MdHomeFilled', label: 'Home', route: '/home' },
  { name: 'MdOutlineGames', label: 'Games', route: '/players' },
  { name: 'MdOutlinePeopleAlt', label: 'Friends', route: '/friends' },
];

export const ONLINE_PLAYERS = [
  {
    name: 'Aristides da costa',
    status: ONLINE_STATE.ONLINE,
  },
  {
    name: 'Aristides da costa',
    status: ONLINE_STATE.PLAYING,
  },
  {
    name: 'Aristides da costa',
    status: ONLINE_STATE.ONLINE,
  },
  {
    name: 'Aristides da costa',
    status: ONLINE_STATE.OFFLINE,
  },
];
