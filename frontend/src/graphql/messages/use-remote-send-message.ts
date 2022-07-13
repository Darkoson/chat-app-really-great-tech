import { gql, useMutation } from "@apollo/client";
import { SendMessageInput, GQLResult } from "../../interfaces";

const SEND_MESSAGE = gql`
  mutation SendMessage($input: SendMessageInput!) {
    sendMessage(input: $input) {
      ok
      res {
        ... on Info {
          info
        }
      }
    }
  }
`;

export const useRemoteSendMessage = () => {
  const [handleSendMessage] = useMutation(SEND_MESSAGE);

  const executeSendMessage = async (
    input: SendMessageInput
  ): Promise<GQLResult> => {
    let result = await handleSendMessage({
      variables: { input },
    });
    if (result.errors) {
      return { ok: false, res: { info: "some errors has happened" } };
    }
    return result.data.SendMessage;
  };

  return { executeSendMessage };
};
