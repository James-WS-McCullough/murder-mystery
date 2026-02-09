import { DetectiveDetails } from "./types";

export const popularPairs: DetectiveDetails[] = [
  {
    detective: {
      name: "Sherlock Holmes",
      pronouns: "he/him",
      characteristics: "Brilliant, Observant, Eccentric",
      visualDescription:
        "Tall, Wearing a deerstalker hat, Carries a magnifying glass",
    },
    sidekick: {
      name: "Dr. John Watson",
      pronouns: "he/him",
      characteristics: "Loyal, Brave, Methodical",
      visualDescription: "Average height, Military bearing, Kind face",
    },
  },
  {
    detective: {
      name: "Hercule Poirot",
      pronouns: "he/him",
      characteristics: "Meticulous, Intelligent, Proud of his Belgian heritage",
      visualDescription:
        "Short stature, Impeccable moustache, Always carries a cane",
    },
    // No sidekick specified for Poirot
  },
  {
    detective: {
      name: "Scooby Doo",
      pronouns: "he/him",
      characteristics:
        "Courageous (when incentivized with a treat), Loyal, Often hungry",
      visualDescription:
        "Great Dane, Brown fur with spots, Blue collar with a pendant",
    },
    sidekick: {
      name: "Shaggy",
      pronouns: "he/him",
      characteristics: "Easily frightened, Loyal to Scooby, Often hungry too",
      visualDescription: "Green shirt, Brown pants, Goatee beard",
    },
  },
  {
    detective: {
      name: "Sam Spade",
      pronouns: "he/him",
      characteristics: "Hard-boiled, Cynical, Resourceful",
      visualDescription: "Sharp suit, Fedora hat, Cigarette in hand",
    },
    // Sam Spade is from "The Maltese Falcon" and doesn't have a consistent sidekick.
  },
  {
    detective: {
      name: "Miss Marple",
      pronouns: "she/her",
      characteristics: "Observant, Sharp-minded, Elderly",
      visualDescription:
        "Elderly lady, Wears tweed skirts and hats, Often carries a knitting needle or a book",
    },
    // Miss Marple works alone but sometimes has friends or relatives assist her.
  },
  {
    detective: {
      name: "Nick Charles",
      pronouns: "he/him",
      characteristics: "Witty, Urbane, Heavy drinker",
      visualDescription: "Tuxedo or sharp suit, Always with a martini, Suave",
    },
    sidekick: {
      name: "Nora Charles",
      pronouns: "she/her",
      characteristics: "Sassy, Intelligent, Socialite",
      visualDescription:
        "Elegant evening gowns, Accompanied by their dog Asta, Carries a cocktail",
    },
    // Nick and Nora Charles are from "The Thin Man" series.
  },
  {
    detective: {
      name: "Dirk Gently",
      pronouns: "he/him",
      characteristics: "Eccentric, Lazy, Intuitive",
      visualDescription: "Shabby attire, Unkempt hair, Often lost in thought",
    },
    sidekick: {
      name: "Todd Brotzman",
      pronouns: "he/him",
      characteristics: "Skeptical, Down on his luck, Loyal",
      visualDescription:
        "Casual attire, Slightly stressed expression, Often reacting to Dirk's antics",
    },
    // Dirk Gently and Todd Brotzman are from "Dirk Gently's Holistic Detective Agency".
  },
  {
    detective: {
      name: "Jessica Fletcher",
      pronouns: "she/her",
      characteristics: "Intelligent, Persistent, Novelist",
      visualDescription:
        "Middle-aged to elderly, Professional attire, Often with a typewriter or pen and paper",
    },
    // Jessica Fletcher is from "Murder, She Wrote" and doesn't have a regular sidekick.
  },
  {
    detective: {
      name: "Chief Inspector Tom Barnaby",
      pronouns: "he/him",
      characteristics: "Methodical, Patient, Insightful",
      visualDescription:
        "Middle-aged, Grey hair, Often seen in a suit with tie",
    },
    sidekick: {
      name: "Sergeant Gavin Troy",
      pronouns: "he/him",
      characteristics: "Loyal, Younger, Sometimes impulsive",
      visualDescription:
        "Younger than Barnaby, Dark hair, Often in uniform or suit",
    },
  },
  {
    detective: {
      name: "Detective Grimoire",
      pronouns: "he/him",
      characteristics: "Eccentric, Sharp-witted, Theatrical",
      visualDescription:
        "Pointy brown hat, Long brown coat, Expressive and animated",
    },
    sidekick: {
      name: "Sally",
      pronouns: "she/her",
      characteristics: "Enthusiastic, Scientifically-minded, Resourceful",
      visualDescription:
        "Tall, Bright and cheerful demeanor, Often carrying research notes",
    },
    // Detective Grimoire and Sally are from "Tangle Tower".
  },
];

export const pronownDropdownOptions = [
  "he/him",
  "she/her",
  "they/them",
  "he/they",
  "she/they",
];
