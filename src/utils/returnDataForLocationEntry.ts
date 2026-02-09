import { mysteryDataType } from "../types";

type returnDataForLocationEntryProps = {
  mysteryData: mysteryDataType;
  location: string;
};

export const returnDataForLocationEntry = ({
  mysteryData,
  location,
}: returnDataForLocationEntryProps) => {
  const currentLocationData = mysteryData.locations.locationList.find(
    (locationData) =>
      locationData.location.toLowerCase() === location.toLowerCase()
  );
  const charactersPresent = mysteryData.characterDetails.suspects.filter(
    (characterData) =>
      currentLocationData?.charactersPresent.includes(characterData.name)
  );

  if (!currentLocationData)
    throw new Error("Invalid location data");

  return {
    DetectiveDetails: mysteryData.DetectiveDetails,
    location: {
      location: currentLocationData.location,
      description: currentLocationData.description,
    },
    charactersPresent: charactersPresent,
  };
};
