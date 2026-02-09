import React, { useState } from "react";
import { Button, Input, VStack, Box, Text } from "@chakra-ui/react";
import { sendChatMessage } from "../utils/claude";
import { prevMessagesProps } from "../types";

const ChatInterface: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState<prevMessagesProps>([]);

  const handleSubmit = async () => {
    if (inputText) {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "user",
          content: inputText,
        },
      ]);

      try {
        const updatedHistory = await sendChatMessage({
          message: inputText,
          prevMessages: chatHistory,
        });
        if (updatedHistory) setChatHistory(updatedHistory);
      } catch (error) {
        setChatHistory((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, something went wrong. Please try again.",
          },
        ]);
      }

      setInputText("");
    }
  };

  return (
    <VStack spacing={4} width="100%">
      <Box
        maxW="600px"
        width="100%"
        border="1px"
        borderColor="gray.200"
        p={4}
        borderRadius="md"
      >
        {chatHistory.map((message, index) => (
          <Text key={index}>{message.content}</Text>
        ))}
      </Box>
      <Box width="100%" maxW="600px">
        <Input
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
      </Box>
      <Button onClick={handleSubmit}>Send</Button>
    </VStack>
  );
};

export default ChatInterface;
