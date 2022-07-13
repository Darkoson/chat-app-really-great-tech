import { gql, useLazyQuery } from "@apollo/client";
import { GQLResult } from "../../interfaces";

const GET_MESSAGES = gql`
  query GetMessages($user1: ID, $user2: ID) {
    getMessages(user1: $user1, user2: $user2) {
      ok
      res {
        ... on Chats {
          chats {
            id
            message
            senderId
            receiverId
            created_at
          }
        }
        ... on Info {
          info
        }
      }
    }
  }
`;

export const useRemoteGetMessages = () => {
  const [execGetMessages] = useLazyQuery(GET_MESSAGES, {
    fetchPolicy: "no-cache",
  });

  const executeGetMessages = async (
    userId1: string,
    userId2: string
  ): Promise<GQLResult> => {
    let response = await execGetMessages({
      variables: { userId1, userId2 },
    });

    if (response.error) {
      return {
        ok: false,
        res: { info: response.error.message },
      };
    }

    let result: GQLResult = response.data.getMessages;
    return result;
  };

  return { executeGetMessages };

  // const [handleGetMessages] = useMutation();

  // const executeGetMessages = async (
  //   user1: string, user2:string
  // ): Promise<GQLResult> => {
  //   let result = await handleGetMessages({
  //     variables: { user1, user2 },
  //   });
  //   if (result.errors) {
  //     return { ok: false, res: { info: "some errors has happened" } };
  //   }
  //   return result.data.GetMessages;
  // };

  // return { executeGetMessages };
};
