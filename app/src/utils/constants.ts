import { Player, PLAYER_STATE, PlayerHistoric } from "../types";

export const ONBOARDIG_MESSAGES = [
  {
    title: "Bem-vindo",
    imagePath: "/onboarding-1.png",
    description:
      "Um dos jogos mais antigos do mundo agora disponível no seu smartphone!",
  },
  {
    title: "Competir",
    imagePath: "/onboarding-2.png",
    description: "Jogue com seus amigos e prove que você é um oponente digno!",
  },
  {
    title: "Placar",
    imagePath: "/onboarding-3.png",
    description: "Ganhe pontos e chegue ao topo do placar!",
  },
];

export const PLAYER_HISTORIC: PlayerHistoric[] = [
  {
    data: "05.25.2022.",
    name: "Aristides da Costa",
    state: PLAYER_STATE.WON,
  },
  {
    data: "05.25.2022.",
    name: "Aristides da Costa",
    state: PLAYER_STATE.LOST,
  },
  {
    data: "05.25.2022.",
    name: "Aristides da Costa",
    state: PLAYER_STATE.WON,
  },
  {
    data: "05.25.2022.",
    name: "Aristides da Costa",
    state: PLAYER_STATE.LOST,
  },
  {
    data: "05.25.2022.",
    name: "Aristides da Costa",
    state: PLAYER_STATE.DRAW,
  },
];

export const PLAYER_SCORE: Player[] = [
  {
    name: "Aristides da Costa",
    place: 1,
    score: 130,
  },
  {
    name: "Aristides da Costa",
    place: 2,
    score: 120,
  },
  {
    name: "Aristides da Costa",
    place: 3,
    score: 110,
  },
  {
    name: "Aristides da Costa",
    place: 4,
    score: 100,
  },
  {
    name: "Aristides da Costa",
    place: 5,
    score: 90,
  },
];

export const ICONS = [
  { name: "MdHomeFilled", label: "Home", route: "/home" },
  { name: "MdOutlineGames", label: "Games", route: "/players" },
  { name: "MdOutlinePeopleAlt", label: "Friends", route: "/friends" },
];
