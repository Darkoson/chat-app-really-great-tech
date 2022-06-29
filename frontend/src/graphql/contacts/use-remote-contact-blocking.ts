import { gql, useMutation } from "@apollo/client";
import { BlockContactInput, GQLResult } from "../../interfaces";


const CONTACT_BLOCKING = gql`
  mutation BlockContact($input: BlockContactInput!) {
    blockContact(input: $input) {
      ok
      res {
        ... on Users {
          users {
            id
            email
            firstname
            lastname
          }
        }
        ... on Info {
          messages
        }
      }
    }
  }
`;




export const useRemoteContactBlocking = () => {
  const [handleContactBlocking] = useMutation(CONTACT_BLOCKING);

  const executeContactBlocking = async (
    input: BlockContactInput
  ): Promise<GQLResult> => {
    let result = await handleContactBlocking({
      variables: { input },
    });
    if (result.errors) {
      return { ok: false, res: { messages: ["some errors has happened"] } };
    }
    return result.data.blockContact;
  };

  return { executeContactBlocking };
};
