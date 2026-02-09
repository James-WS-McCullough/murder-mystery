import { mysteryDataType } from "../types";

export const preGeneratedStory = {
  DetectiveDetails: {
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
  title: "Whispers in Windermere",
  setting:
    "The tranquil village of Windermere, known for its serene lakes and picturesque landscapes, becomes the center of intrigue when a local is found dead under suspicious circumstances. As the village comes to terms with the event, secrets that have long been buried begin to surface.",
  characterDetails: {
    victim: {
      name: "Emily Lancaster",
      pronouns: "she/her",
      characteristics: "Reserved, Mysterious",
      visualDescription:
        "Emily is a petite woman in her early thirties with long, dark hair and piercing blue eyes. She is often seen wearing flowy dresses and a silver locket around her neck.",
      presenceReason:
        "Recently moved to Windermere and was attending a social event at the village hall.",
    },
    suspects: [
      {
        name: "Joshua Sinclair",
        pronouns: "he/him",
        characteristics: "Charismatic, Wealthy",
        visualDescription:
          "Joshua is a tall man in his forties with slicked-back dark hair and an expensive suit. He exudes confidence and always has a charming smile on his face.",
        presenceReason:
          "Organized a charity gala in Windermere and invited everyone to his mansion for a post-event gathering.",
      },
      {
        name: "Amelia Turner",
        pronouns: "she/her",
        characteristics: "Manipulative, Cunning",
        visualDescription:
          "Amelia is a middle-aged woman with short red hair, thick-rimmed glasses, and a calculating gaze. She dresses impeccably and carries an air of sophistication.",
        presenceReason:
          "Owns a luxury hotel in Windermere and was hosting an exclusive party for influential guests.",
      },
      {
        name: "Thomas Fletcher",
        pronouns: "he/him",
        characteristics: "Introverted, Bookish",
        visualDescription:
          "Thomas is a young man in his twenties with disheveled brown hair, wearing oversized glasses. He is usually seen carrying a backpack full of books.",
        presenceReason:
          "Moved to Windermere to work in the local library and attended a book club meeting at the village hall.",
      },
      {
        name: "Eleanor Blackwood",
        pronouns: "she/her",
        characteristics: "Charming, Socialite",
        visualDescription:
          "Eleanor is an elegant woman in her fifties with perfectly styled silver hair and sparkling jewelry. She wears designer dresses and always carries herself with grace.",
        presenceReason:
          "Owns a grand estate in Windermere and organized a garden party for the village residents.",
      },
      {
        name: "Samuel Reynolds",
        pronouns: "he/him",
        characteristics: "Reclusive, Mysterious",
        visualDescription:
          "Samuel is an older man with a long white beard and a worn-out hat. He dresses in faded, tattered clothing and often keeps to himself in the outskirts of Windermere.",
        presenceReason:
          "Samuel has lived in Windermere for years and was seen wandering near the crime scene due to his habit of collecting herbs and plants from the area.",
      },
    ],
  },
  furtherDetails: {
    murderer: "Joshua Sinclair",
    motive:
      "Emily Lancaster had discovered some embezzlement activities done by Joshua Sinclair, which threatened his reputation and financial status. To protect himself, Joshua decided to eliminate her.",
    location: "Joshua Sinclair's Mansion",
    murderMeans:
      "During their conversation in his private study, Joshua poisoned Emily's drink with a lethal dose of a rare, undetectable poison. Emily unknowingly consumed it, resulting in her death.",
    aftermath:
      "After the murder, Joshua meticulously cleaned the study, removing any traces of the poison. He disposed of the remaining poison vial in a hidden compartment in his desk. He then joined the post-event gathering to establish an alibi.",
    discovery:
      "Dr. John Watson, while examining Emily's body, noticed unusual symptoms that hinted at poisoning. He immediately informed Detective Sherlock Holmes, who took charge of the investigation.",
  },
  events: {
    eventList: [
      {
        name: "A secret meeting",
        involvedCharacters: ["Amelia Turner", "Eleanor Blackwood"],
        location: "Amelia's Office",
        detail:
          "One evening, Amelia and Eleanor were spotted having a secret meeting in Amelia's office. They were engaged in a heated argument, with raised voices and gestures.",
        resolution:
          "It was revealed that Amelia had discovered Eleanor's affair with a prominent businessman, which threatened her reputation in high society. The argument was over Eleanor's insistence on breaking off their relationship.",
      },
      {
        name: "An unexpected confrontation",
        involvedCharacters: ["Joshua Sinclair", "Thomas Fletcher"],
        location: "Library",
        detail:
          "While Thomas was working in the library, Joshua entered in a visibly agitated state. He accused Thomas of spreading rumors about him and Emily's relationship, leading to a heated exchange of words.",
        resolution:
          "Later, it was discovered that Joshua found out about Thomas overhearing a private conversation between him and Emily, discussing their illicit affair. Joshua confronted Thomas in a fit of anger, fearing his secret would be exposed.",
      },
      {
        name: "A secretive transaction",
        involvedCharacters: ["Eleanor Blackwood", "Samuel Reynolds"],
        location: "Outskirts of Windermere",
        detail:
          "Late at night, Eleanor and Samuel were seen exchanging an envelope by the outskirts of Windermere. They were cautious and seemed to be engaged in a secretive transaction.",
        resolution:
          "It was eventually revealed that Samuel had evidence of Eleanor's involvement in illegal antique trading. Eleanor had sought out Samuel to bribe him into keeping silent about her activities, resulting in their secretive exchange.",
      },
    ],
  },
  clues: {
    clueList: [
      {
        name: "Emily's Silver Locket",
        detail: "Emily's silver locket is found at Joshua Sinclair's mansion.",
        location: "Joshua Sinclair's Study",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes notices the locket lying on the floor during the investigation at Joshua Sinclair's mansion.",
      },
      {
        name: "Emily's Diary",
        detail:
          "Emily's diary contains cryptic entries that hint at her discovery of some illegal activities.",
        location: "Emily Lancaster's Home",
        unlockingClue: null,
        unlockMeans:
          "Dr. John Watson discovers Emily's diary among her personal belongings while examining her home.",
      },
      {
        name: "A Strange Ingredient Bottle",
        detail:
          "A bottle containing a rare and deadly poison is found hidden inside a vase at Amelia Turner's luxury hotel.",
        location: "Amelia Turner's Hotel – Reception Area",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes notices an odd-looking vase in the reception area, and upon closer inspection, finds the hidden bottle inside.",
      },
      {
        name: "Footprints",
        detail:
          "Unusual footprints are discovered near the crime scene, leading towards Thomas Fletcher's house.",
        location: "Crime Scene",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes discovers the footprints during the initial examination of the crime scene.",
      },
      {
        name: "Garden Invitation",
        detail:
          "A torn invitation to Eleanor Blackwood's garden party is found in Samuel Reynolds' pocket.",
        location: "Samuel Reynolds' Cottage",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes finds the torn invitation when searching Samuel Reynolds' cottage.",
      },
      {
        name: "Poison Vial",
        detail:
          "A hidden compartment in Joshua Sinclair's desk contains a poison vial matching the one used to kill Emily.",
        location: "Joshua Sinclair's Study",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes discovers the hidden compartment in Joshua Sinclair's desk during a thorough search.",
      },
    ],
  },
  redHerrings: {
    clueList: [
      {
        name: "A broken necklace",
        detail:
          "A broken necklace is found in the garden of Eleanor Blackwood's estate.",
        location: "Eleanor Blackwood's Garden",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes comes across the broken necklace while examining the garden.",
        event: "A secretive transaction",
        revealSuspects: ["Eleanor Blackwood"],
      },
      {
        name: "An anonymous letter",
        detail:
          "An anonymous letter is discovered in Joshua Sinclair's mailbox.",
        location: "Joshua Sinclair's Mansion",
        unlockingClue: null,
        unlockMeans:
          "Dr. John Watson finds the anonymous letter while checking Joshua Sinclair's mail.",
        event: "A secret meeting",
        revealSuspects: ["Joshua Sinclair"],
      },
      {
        name: "A torn book page",
        detail:
          "A torn page from a book is found near Thomas Fletcher's house.",
        location: "Near Thomas Fletcher's House",
        unlockingClue: null,
        unlockMeans:
          "Detective Sherlock Holmes spots the torn book page while examining the surroundings near Thomas Fletcher's house.",
        event: "An unexpected confrontation",
        revealSuspects: ["Thomas Fletcher"],
      },
    ],
  },
  locations: {
    locationList: [
      {
        location: "Joshua Sinclair's Mansion",
        description:
          "A grand mansion with opulent interiors and lavish decorations. The rooms are filled with antique furniture and ornate paintings, exuding an air of wealth and sophistication.",
        neighboringLocations: ["The Study", "The Ballroom", "The Gardens"],
        charactersPresent: ["Joshua Sinclair"],
      },
      {
        location: "The Study",
        description:
          "A room filled with bookshelves lining the walls, filled with rare and ancient volumes. A large oak desk sits in the center of the room, covered in papers and books.",
        neighboringLocations: ["Joshua Sinclair's Mansion"],
        charactersPresent: [],
      },
      {
        location: "The Ballroom",
        description:
          "A spacious ballroom adorned with intricate chandeliers and expansive mirrors. The sound of elegance and laughter fills the air as people dance and mingle.",
        neighboringLocations: ["Joshua Sinclair's Mansion"],
        charactersPresent: [],
      },
      {
        location: "The Gardens",
        description:
          "Vibrant and meticulously maintained gardens, featuring a variety of colorful flowers and perfectly sculpted hedges. The sweet scent of blooms drifts through the air.",
        neighboringLocations: ["Joshua Sinclair's Mansion"],
        charactersPresent: [],
      },
      {
        location: "Amelia Turner's Luxury Hotel - Reception Area",
        description:
          "A luxurious hotel reception area, adorned with marble floors and sparkling chandeliers. The sound of soft piano music creates an elegant ambiance.",
        neighboringLocations: ["Amelia Turner's Office", "The Hotel Lounge"],
        charactersPresent: ["Amelia Turner"],
      },
      {
        location: "Amelia Turner's Office",
        description:
          "A sophisticated office space with floor to ceiling windows offering a panoramic view of Windermere. A large mahogany desk sits at the center, covered in meticulously organized paperwork.",
        neighboringLocations: ["Amelia Turner's Luxury Hotel - Reception Area"],
        charactersPresent: [],
      },
      {
        location: "The Hotel Lounge",
        description:
          "A cozy lounge area with plush sofas and a crackling fireplace. Soft jazz music plays in the background, creating a relaxed and intimate atmosphere.",
        neighboringLocations: ["Amelia Turner's Luxury Hotel - Reception Area"],
        charactersPresent: [],
      },
      {
        location: "Windermere Library",
        description:
          "A peaceful library with towering bookshelves, filled with a vast collection of books on various subjects. The scent of old pages lingers in the air.",
        neighboringLocations: ["The Village Hall"],
        charactersPresent: ["Thomas Fletcher"],
      },
      {
        location: "The Village Hall",
        description:
          "A quaint gathering place adorned with vibrant paintings and historical artifacts. The walls are lined with notice boards showcasing upcoming events and community announcements.",
        neighboringLocations: ["Windermere Library"],
        charactersPresent: [],
      },
      {
        location: "Eleanor Blackwood's Estate",
        description:
          "A picturesque estate nestled amidst lush green lawns and vibrant flower beds. The grand mansion stands as a testament to opulence and refined taste.",
        neighboringLocations: ["The Gardens", "The Ballroom"],
        charactersPresent: ["Eleanor Blackwood"],
      },
      {
        location: "Samuel Reynolds' Cottage",
        description:
          "A humble cottage surrounded by wildflowers and towering trees. The rustic charm of the cottage blends harmoniously with the serene beauty of nature.",
        neighboringLocations: ["Outskirts of Windermere"],
        charactersPresent: ["Samuel Reynolds"],
      },
      {
        location: "Outskirts of Windermere",
        description:
          "Tranquil outskirts of Windermere, offering breathtaking views of the picturesque landscapes. The serenity is broken only by the sound of rustling leaves and chirping birds.",
        neighboringLocations: ["Samuel Reynolds' Cottage"],
        charactersPresent: [],
      },
      {
        location: "Crime Scene",
        description:
          "An isolated area near the picturesque Windermere lake, marked with police tape. The tranquility of the surroundings is shattered by the presence of investigators.",
        neighboringLocations: ["The Village Hall"],
        charactersPresent: [],
      },
    ],
  },
  introduction: {
    introductionText: [
      "The tranquil village of Windermere, known for its serene lakes and picturesque landscapes, was abuzz with whispers and speculation. The news of a local's untimely demise under suspicious circumstances had sent shockwaves through the once peaceful community. As the villagers struggled to come to terms with the tragic event, secrets that had long been buried began to surface, threatening to unravel the fabric of their idyllic lives.",
      "On this misty morning, a distinctive figure emerged from the fog, announcing the arrival of famed detective Sherlock Holmes. Tall and imposing, with his deerstalker hat perched atop his head and a magnifying glass in hand, Holmes exuded an aura of brilliance and eccentricity. Accompanying him was his trusted sidekick, Dr. John Watson, a loyal and methodical companion.",
      "They had been summoned to Windermere to investigate the mysterious death of Emily Lancaster, a reserved and mysterious woman who had recently moved to the village. Emily's life had been abruptly cut short at a social event held in the village hall, her presence now a void that echoed in the hearts of the villagers.",
      "But why had Holmes and Watson been called upon to solve this chilling puzzle? There were whispers of foul play, of a murder most treacherous, and the local authorities, recognizing the need for exceptional detective skills, had sought the renowned consulting detective's expertise.",
      "Yet, beneath the surface, there was a personal reason for Holmes's involvement. Something about this enigmatic case tugged at his brilliant mind, as if the whispers carried in the wind held a resonance with his own past. With a sense of determination, Sherlock Holmes took a deep breath and prepared to step into Joshua Sinclair's mansion, where the crime had unfolded. The answers lay within, waiting to be unraveled.",
    ],
  },
} as Partial<mysteryDataType>;
