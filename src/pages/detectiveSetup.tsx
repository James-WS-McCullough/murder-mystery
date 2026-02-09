import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  VStack,
  FormLabel,
  FormControl,
  HStack,
  Select,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
} from "@chakra-ui/react";
import { Character, DetectiveDetails, mysteryDataType } from "../types";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { popularPairs, pronownDropdownOptions } from "../constants";
import { BlueWindowBox } from "../components/blueWindowBox";

type DetectiveSetupProps = {
  mysteryData: Partial<mysteryDataType>;
  setMysteryData: React.Dispatch<
    React.SetStateAction<Partial<mysteryDataType>>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const DetectiveSetup = ({
  mysteryData,
  setMysteryData,
  setCurrentStep,
}: DetectiveSetupProps) => {
  const [detective, setDetective] = useState<Character>({
    name: "",
    pronouns: "",
    characteristics: "",
    visualDescription: "",
  });

  const [sidekick, setSidekick] = useState<Character>({
    name: "",
    pronouns: "",
    characteristics: "",
    visualDescription: "",
  });
  const {
    isOpen: isListOpen,
    onOpen: onListOpen,
    onClose: onListClose,
  } = useDisclosure();

  const [isSidekickEnabled, setIsSidekickEnabled] = useState(false);

  const handleShowList = () => {
    onListOpen();
  };

  const handlePrepopulate = (selected: DetectiveDetails) => {
    setDetective(selected.detective);

    if (selected.sidekick) {
      setIsSidekickEnabled(true);
      setSidekick(selected.sidekick);
    } else {
      setIsSidekickEnabled(false);
      setSidekick({
        name: "",
        pronouns: "",
        characteristics: "",
        visualDescription: "",
      });
    }
  };

  const handleConfirm = () => {
    setMysteryData((prev) => ({
      ...prev,
      DetectiveDetails: {
        detective: detective,
        sidekick: isSidekickEnabled ? sidekick : undefined,
      },
    }));
    setCurrentStep(1);
  };

  return (
    <Flex>
      <BlueWindowBox stackDir="column">
        <HStack flex="1" width="100%">
          <VStack flex="1">
            <FormControl>
              <FormLabel>Name of Detective</FormLabel>
              <Input
                value={detective.name}
                onChange={(e) =>
                  setDetective((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pronouns of Detective</FormLabel>
              <Select
                placeholder="Select pronouns"
                value={detective.pronouns}
                onChange={(e) =>
                  setDetective((prev) => ({
                    ...prev,
                    pronouns: e.target.value,
                  }))
                }
              >
                {pronownDropdownOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Characteristics of Detective</FormLabel>
              <Textarea
                value={detective.characteristics}
                onChange={(e) =>
                  setDetective((prev) => ({
                    ...prev,
                    characteristics: e.target.value,
                  }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Visual Description of Detective</FormLabel>
              <Textarea
                value={detective.visualDescription}
                onChange={(e) =>
                  setDetective((prev) => ({
                    ...prev,
                    visualDescription: e.target.value,
                  }))
                }
              />
            </FormControl>
          </VStack>

          {isSidekickEnabled && (
            <VStack flex="1">
              <FormControl>
                <FormLabel>Name of Sidekick</FormLabel>
                <Input
                  value={sidekick.name}
                  onChange={(e) =>
                    setSidekick((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Pronouns of Sidekick</FormLabel>
                <Select
                  placeholder="Select pronouns"
                  value={sidekick.pronouns}
                  onChange={(e) =>
                    setSidekick((prev) => ({
                      ...prev,
                      pronouns: e.target.value,
                    }))
                  }
                >
                  <option value="he/him">he/him</option>
                  <option value="she/her">she/her</option>
                  <option value="they/them">they/them</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Characteristics of Sidekick</FormLabel>
                <Textarea
                  value={sidekick.characteristics}
                  onChange={(e) =>
                    setSidekick((prev) => ({
                      ...prev,
                      characteristics: e.target.value,
                    }))
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Visual Description of Sidekick</FormLabel>
                <Textarea
                  value={sidekick.visualDescription}
                  onChange={(e) =>
                    setSidekick((prev) => ({
                      ...prev,
                      visualDescription: e.target.value,
                    }))
                  }
                />
              </FormControl>
            </VStack>
          )}
        </HStack>
        <HStack flex="1" width="100%" justifyContent="flex-end">
          // Toggle button for Sidekick with checkbox icon
          <Button onClick={() => setIsSidekickEnabled(!isSidekickEnabled)}>
            {isSidekickEnabled ? (
              <HStack spacing="0">
                <FormLabel mb="0">Sidekick</FormLabel>
                <CheckBoxIcon fontSize="medium" />
              </HStack>
            ) : (
              <HStack spacing="0">
                <FormLabel mb="0">Sidekick</FormLabel>
                <CheckBoxOutlineBlankIcon fontSize="medium" />
              </HStack>
            )}
          </Button>
          <Button onClick={handleShowList}>Select from List</Button>
          <Button colorScheme="blue" onClick={handleConfirm}>
            Confirm
          </Button>
        </HStack>
      </BlueWindowBox>
      // Modal List of popular detective and sidekick pairs. Selected one will
      populate the form.
      <Modal isOpen={isListOpen} onClose={onListClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Popular Detective and Sidekick Pairs</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto" maxH="70vh">
            <VStack spacing={3} pb={4}>
              {popularPairs.map((pair) => (
                <Box
                  key={pair.detective.name}
                  w="100%"
                  p={4}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                  transition="background 0.15s, border-color 0.15s"
                  onClick={() => {
                    handlePrepopulate(pair);
                    onListClose();
                  }}
                >
                  <Text fontWeight="bold" fontSize="md">
                    {pair.detective.name}
                    {pair.sidekick && ` & ${pair.sidekick.name}`}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {pair.detective.characteristics}
                    {pair.sidekick &&
                      ` | ${pair.sidekick.characteristics}`}
                  </Text>
                  <Text fontSize="xs" color="gray.400" mt={1}>
                    {pair.detective.visualDescription}
                    {pair.sidekick &&
                      ` · ${pair.sidekick.visualDescription}`}
                  </Text>
                </Box>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DetectiveSetup;
