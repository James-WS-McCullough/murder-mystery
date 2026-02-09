import { mysteryDataType, prevMessagesProps } from "../types";
import { sendChatMessage } from "./claude";
import {
  isValidObjectResponse,
  parseObjectResponse,
} from "./parseObjectResponse";

type PromptForObjectProps = {
  objectName: string;
  prompt: string;
  model?: string;
};

const MAX_RETRIES = 5;

export const sendPromptForObject = async ({
  objectName,
  prompt,
  model,
}: PromptForObjectProps): Promise<any> => {
  let object = null;
  let newMessageList = null;
  let attempts = 0;
  do {
    if (attempts >= MAX_RETRIES) {
      throw new Error(
        `Failed to get valid "${objectName}" after ${MAX_RETRIES} attempts`
      );
    }
    attempts++;
    console.log("Sending request for " + objectName);
    newMessageList = await sendChatMessage({
      message: prompt,
      model,
    });
    if (newMessageList === null) {
      console.log("newMessageList is null");
      continue;
    }

    if (
      isValidObjectResponse(
        newMessageList[newMessageList.length - 1].content,
        objectName
      )
    ) {
      object = parseObjectResponse(
        newMessageList[newMessageList.length - 1].content,
        objectName
      );
    }
  } while (object === null);

  return object;
};
