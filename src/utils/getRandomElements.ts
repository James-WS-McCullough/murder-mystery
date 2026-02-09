import {
  motives,
  weapons,
  twists,
  suspectOccupations,
  atmospheres,
} from "../constants/mysteryElements";

export const pickRandom = <T>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export type RandomMysteryElements = {
  motive: string;
  weapon: string;
  twist: string;
  occupations: string[];
  atmosphere: string;
};

export const getRandomMysteryElements = (): RandomMysteryElements => ({
  motive: pickRandom(motives, 1)[0],
  weapon: pickRandom(weapons, 1)[0],
  twist: pickRandom(twists, 1)[0],
  occupations: pickRandom(suspectOccupations, 2 + Math.round(Math.random())),
  atmosphere: pickRandom(atmospheres, 1)[0],
});

export const buildRandomHints = (elements: RandomMysteryElements): string => {
  return `Additional creative constraints for this mystery:
- The murder weapon should involve: ${elements.weapon}.
- The motive relates to: ${elements.motive}.
- Include a twist where: ${elements.twist}.
- Some suspects should have these occupations: ${elements.occupations.join(", ")}.
- The atmosphere: ${elements.atmosphere}.`;
};
