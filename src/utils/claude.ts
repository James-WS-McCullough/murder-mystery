import Anthropic from "@anthropic-ai/sdk";
import { prevMessagesProps } from "../types";

const anthropic = new Anthropic({
  apiKey: process.env.REACT_APP_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

type sendChatMessageProps = {
  message: string;
  prevMessages?: prevMessagesProps;
  model?: string;
};

export const sendChatMessage = async ({
  message,
  prevMessages = [],
  model = "claude-sonnet-4-5-20250929",
}: sendChatMessageProps) => {
  prevMessages.push({
    role: "user",
    content: message,
  });

  const response = await anthropic.messages.create({
    model,
    max_tokens: 4096,
    messages: prevMessages,
  });

  const contentBlock = response.content[0];
  if (contentBlock.type === "text" && contentBlock.text != null) {
    prevMessages.push({
      role: "assistant",
      content: contentBlock.text,
    });

    return prevMessages;
  }
  return null;
};
