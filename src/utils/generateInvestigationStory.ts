import { investigationStory, mysteryDataType } from "../types";
import { generateLocationStory } from "./generateLocationStory";
import { generateSuspectStory } from "./generateSuspectStory";

type generateInvestigationStoryProps = {
  mysteryData: mysteryDataType;
  setInvestigationStory: React.Dispatch<
    React.SetStateAction<investigationStory>
  >;
};

enum generateType {
  location = "location",
  suspect = "suspect",
}

type toGenerateType = {
  type: generateType;
  name: string;
};

export const generateInvestigationStory = async ({
  mysteryData,
  setInvestigationStory,
}: generateInvestigationStoryProps) => {
  // Create toGenerate array that contains all the locations, suspect interviews and suspectClues to generate
  // The order is important, as the story is generated in the order of the array
  // Start with the location of the crime scene.
  // For that location, add any suspects that are present there, and any suspectClues for clues unlocked already by the investigation.
  // Then, pick a neighboring location and repeat the process.

  // Create toGenerate array
  const toGenerate: toGenerateType[] = [];
  // Set initial location to crime scene
  let currentLocation = mysteryData.furtherDetails.location;
  let completedLocations: string[] = [];
  let completedSuspects: string[] = [];

  // Begin the loop
  while (
    completedLocations.length < mysteryData.locations.locationList.length
  ) {
    // Add current location to completedLocations
    completedLocations.push(currentLocation);
    // Add current location to toGenerate
    toGenerate.push({
      type: generateType.location,
      name: currentLocation,
    });
    // Add any suspects present at current location to toGenerate
    mysteryData.locations.locationList
      .find((locationData) => locationData.location === currentLocation)
      ?.charactersPresent.forEach((characterPresent) => {
        if (!completedSuspects.includes(characterPresent)) {
          toGenerate.push({
            type: generateType.suspect,
            name: characterPresent,
          });
          completedSuspects.push(characterPresent);
        }
      });
    // Pick a neighboring location not already completed. If none, pick a random location not already completed.
    const neighboringLocation =
      mysteryData.locations.locationList
        .find((locationData) => locationData.location === currentLocation)
        ?.neighboringLocations.find(
          (neighboringLocation) =>
            !completedLocations.includes(neighboringLocation)
        ) ||
      // If no neighboring location, pick a random location not already completed
      mysteryData.locations.locationList
        .filter(
          (locationData) => !completedLocations.includes(locationData.location)
        )
        .map((locationData) => locationData.location)[
        Math.floor(
          Math.random() *
            mysteryData.locations.locationList.filter(
              (locationData) =>
                !completedLocations.includes(locationData.location)
            ).length
        )
      ];
    // Set current location to neighboring location
    currentLocation = neighboringLocation;
  }

  console.log("toGenerate: ", toGenerate);

  // Loop through toGenerate array, generating the story and adding it to the investigationStory object as we go
  let investigationStory: investigationStory = {
    locations: {},
    suspects: {},
  };

  for (let i = 0; i < toGenerate.length; i++) {
    const toGenerateItem = toGenerate[i];
    switch (toGenerateItem.type) {
      case generateType.location:
        // Generate location story
        const updatedInvestigationStory = await generateLocationStory({
          mysteryData,
          investigationStory,
          name: toGenerateItem.name,
        });
        // Update investigationStory
        setInvestigationStory(updatedInvestigationStory);
        investigationStory = updatedInvestigationStory;

        break;
      case generateType.suspect:
        // Skip for now
        // Generate suspect story
        // const updatedInvestigationStory2 = await generateSuspectStory({
        //   mysteryData,
        //   investigationStory,
        //   name: toGenerateItem.name,
        // });

        // // Update investigationStory
        // setInvestigationStory(updatedInvestigationStory2);
        // investigationStory = updatedInvestigationStory2;
        break;
    }
  }
};
