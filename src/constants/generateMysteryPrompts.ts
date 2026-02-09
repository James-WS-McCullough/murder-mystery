export const generateMysteryPrompts = {
  promptIntro: `Hey chat, I need you to generate the seeds for a murder mystery. Here are the current details of the murder mystery:`,
  characterDetailsPrompt: `I'd like you to generate and return these details. Do not contradict what information is already present.:
    Victim - The character death is being investigated. The victim has the same traits as the suspects.
    Suspects - At least 5 suspects, A suspect should have a name, some character traits, a visual character description, and a presence reason (why they are at the setting).
    
    Example Victim / Suspect Object:
    {
    "name": "David O'Leary",
    "pronouns": "he/him",
    "characteristics:":"Heavy drinker, argumentative",
    "visualDescription":"David is 53 wears an undersized black suit over his beer belly, and a bristly gray mustache beneath his nose, along with his fading gray hair."
    "presenceReason":"Was invited to the dinner party by his friend Joshua."
    }
    
    Now, please generate the objects in a JSON object. For example:
    {
    victim:{...victim object...},
    suspects:[...suspect objects,],
    }
    
    Please don't include any extra text other before or after the object. Thank you!`,
  furtherDetailsPrompt: `Based on the victim and these suspects, I'd like you to generate a json object with further details, including:
    murderer: The name of the suspect who committed the murder.
    motive: The reason why the murderer committed the murder.
    location: The room or building where the murder took place.
    murder means: The way the murder was executed. This can include the murder weapon, details of timings, or even an accident.
    aftermath: The imidiet aftermath after the murder occurs. Does the murderer hide the weapon, or make a run for it? Do they pass by anyone else and need to make excuses?
    discovery: Who first discovers the body? How does it get reported to the police / detectives?
    
    Please return as a JSON object formatted like this:
    {
    "murderer": "David O'Leary"
    "motive": "Kevin had lent him some money in the past, and was threatening him for it back. David killed him in a drunken rage."
    "location": "The Library"
    "murderMeans": "This murder was unplanned. He simply smashed the bottle in his hands over Kevin's head, and Kevin died due to the blunt trauma."
    "aftermath": "After realising he had just killed Kevin, David moved the body to the floor and placed the glass in the body's hands to make it seem like an accident. left through the library window and out through the garden to avoid being seen."
    "discovery": "Isabella, the maid, discovered the body and rang the police."
    }
    
    Please don't include any extra text other before or after the object. Thank you!`,
  eventsPrompt: `The murder can't have been the only event to happen. Please generate some other events that have happened between the suspects and possibly the victim, to cast suspicion in other directions. Focus on suspects other than the murderer. There should be between 3 and 5 events.
    Here is an example event object:
    {
    "name": "A secret meeting",
    "involvedCharacters": ["David O'Leary", "Kevin Sullivan"],
    "location": "David's Bedroom"
    "detail": "On the night of the murder, Kevin was seen entering David's Bedroom, and only emerging again 2 hours later."
    "resolution": "Both men were secretly a couple and were cheating on their wives, but didn't want to show it in public."
    }
    
    Please return in a JSON object like this example:
    {
      "eventList": [
        {...event 1 details...},
        {...event 2 details...},
        ... rest of events
      ]
    }
    
    Please don't include any extra text other before or after the object. Thank you!`,
  cluesPrmopt: `The mystery must be solved using Clues. Clues lead the detective to solve the mystery, and must confirm who the murder was as well as the murder means, or lead the detective in the right direction. They can also hint at the motive, though this will be divulged in full when the killer is apprehended.
    For each clue, give either the clue Location or the clue Suspect, depending if the clue is something discovered at a location, something given to the detective by a suspect or just a given piece of information. A location should be a room or a building, not a person's belongings 'e.g. Amelia's Purse'.
    Also, you can include unlockingClue, if a clue needs to be shown to a suspect or used at a location (a key to unlock a safe) to gain the clue. Make sure all clues are accessible, and that unlockingClues make sense, set to null if just available.
    The unlockMeans should detail how the clue is gained by the detectives. From just finding it on the floor, to being told by the witness they're talking to.
    Here is an example object:
    {
    "name": "Load Document",
    "detail": "Details of a loan of 300 pounds given to David from Kevin 3 years ago.",
    "location": "Kevin's Study",
    "unlockingClue": null,
    "unlockMeans": "The detectives find the shattered glass on the floor of the study."
    }
    
    The example object will be returned in a JSON object like this:
    {
    "clueList":[...clues in here...],
    }
    
    Please don't include any extra text other before or after the object. Thank you!`,
  redHerringsPrompt: `We need some red herring clues to lead to the events listed above. These share the same format as a clue, except include the name of an event, and at least 1 revealSuspect to reveal the details of the event when presented with the clue (must be different from the supply suspect).
    Here is an example herring clue:
    {
      "name": "A shattered glass",
      "detail": "A shattered glass found in Kevin's study."
      "location": "Kevin's Study",
      "unlockingClue": null,
      "unlockMeans": "The detectives find the shattered glass on the floor of the study."
      "event": "A late night argument"
      "revealSuspects": ["Kevin Sullivan"]
    }

    Please return in a JSON object, like this example:
    {
      "clueList": [
        {...clue 1 details...},
        {...clue 2 details...},
        ... rest of clues
      ]
    }
    
    Please don't include any extra text other before or after the object. Thank you!`,
  locationPrompt: `Now it is time to firm up the set of locations for this mystery. There should be at least 8 locations, one of which must be the crime scene. These are the different locations the mystery takes place between. 
    Each location should have a name, and a description, and a list of the names of the neighboring places. Make sure all places can be accessed, and that neighboring places make sense. Each location should neighbor at least one other location.
    Locations can also have charactersPresent, which is a list of the names of the characters present at the location. All suspects must be present at one location.
    {
    "location": "The Kitchen",
    "description": "The kitchen was spotlessly clean, lit by flicking iridescent light bulbs that looked as though they should've been replaced decades ago."
    "neighboringLocations": ["The Hallway"]
    "charactersPresent": ["David O'Leary"]
    }
    
    Please return in the format of a JSON object like this:
    {
      "locationList": [
        {...location 1 details...},
        {...location 2 details...},
        ... rest of locations
      ]
    }

    Please don't include any extra text other before or after the object. Thank you!`,
  suspectLocationsPrompt: `For suspect's locations, please generate an object with the key being a suspect's name, and the value being the location name. Every listed suspect must be in one of the listed locations.
    Here is an example object:
    {
      "David O'Leary":"The Kitchen",
      "Kevin Sullivan":"The Garden",
    }
    
    Please return in the format of a JSON object like this:
    {
      "David O'Leary":"The Kitchen",
      "Kevin Sullivan":"The Garden",
    }

    Please don't include any extra text other before or after the object. Thank you!`,
  introductionPrompt: `It's time to generate the introduction. Write an introduction to the story introducing the setting, the detectives arrival on the scene, why they are there (are they just aboard the train, have the police called them in, or is there a personal reason they are investigating the case?)
    Write in the style of a murder mystery novel, and take the time to set the scene as the detectives arrive. The introduction should end with the detective about to step into the location where the crime occured.xw
    
    Please return this in a json object, containing introductionText, which is an array of paragraph length strings.
    
    Example object:
    {
    introductionText: [
      "It was a dark and stormy... rest of paragraph.",
      "Then, the detective walked through... rest of paragrah",
    ]
  }
    
    As usual, please only return the introduction object.`,
};
