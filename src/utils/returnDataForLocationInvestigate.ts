import { mysteryDataType } from "../types";

type returnDataForLocationInvestigateProps = {
  mysteryData: mysteryDataType;
  location: string;
  isCrimeScene: boolean;
};

export const returnDataForLocationInvestigate = ({
  mysteryData,
  location,
  isCrimeScene,
}: returnDataForLocationInvestigateProps) => {
  const currentLocationData = mysteryData.locations.locationList.find(
    (locationData) =>
      locationData.location.toLowerCase() === location.toLowerCase()
  );
  const cluesPresent = mysteryData.clues.clueList.filter(
    (clueData) => clueData.location === location
  );

  const murderData = {
    murderMeans: mysteryData.furtherDetails.murderMeans,
    aftermath: mysteryData.furtherDetails.aftermath,
    discovery: mysteryData.furtherDetails.discovery,
  };

  if (currentLocationData === undefined)
    throw new Error("Invalid location data");

  return {
    DetectiveDetails: mysteryData.DetectiveDetails,
    location: {
      location: currentLocationData.location,
      description: currentLocationData.description,
    },
    cluesPresent: cluesPresent,
    ...(isCrimeScene && { murderData }),
  };
};
