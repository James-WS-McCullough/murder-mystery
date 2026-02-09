import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type StoryReaderProps = {
  introductionText: string[] | undefined;
  setInStoryReader: (inStoryReader: boolean) => void;
  onStoryComplete?: () => void;
};

export const StoryReader = ({
  introductionText,
  setInStoryReader,
  onStoryComplete,
}: StoryReaderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typedString, setTypedString] = useState<string>("");
  const typeWriterRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setInStoryReader(true);
    return () => setInStoryReader(false);
  }, [setInStoryReader]);

  useEffect(() => {
    if (!introductionText) {
      return;
    }
    const currentSetting = introductionText[currentIndex];
    let i = 0;

    const typeWriter = () => {
      if (i < currentSetting.length) {
        setTypedString(currentSetting.substring(0, i + 1));
        i++;
        typeWriterRef.current = setTimeout(typeWriter, 20); // 50ms per character, adjust as needed
      }
    };

    // When the setting changes, disable and clear the typewriter effect.
    // Then, start the typewriter effect again.
    clearTimeout(typeWriterRef.current);
    setTypedString("");
    // Start typewriter effect
    typeWriter();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(typeWriterRef.current);
    };
  }, [currentIndex, introductionText]);

  if (!introductionText) {
    return null;
  }

  // A text box containing the current string from the introductionText array
  // and a button to continue.
  return (
    <Box color="white" position="absolute" height="100%" width="100%">
      <VStack
        width="70%"
        height="400px"
        position="absolute"
        justifyContent="space-between"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        backgroundColor="blackAlpha.700"
        padding="30"
        spacing="5"
      >
        <Text fontSize="2xl" alignSelf="start">
          {typedString}
        </Text>
        <Button
          alignSelf="end"
          colorScheme="blue"
          onClick={() => {
            if (currentIndex < introductionText.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setInStoryReader(false);
              if (onStoryComplete) {
                onStoryComplete();
              }
            }
          }}
        >
          Continue
        </Button>
      </VStack>
    </Box>
  );
};
