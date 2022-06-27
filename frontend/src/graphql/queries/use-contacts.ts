import { gql, useLazyQuery } from "@apollo/client";
import { GQLResult } from "../../interfaces";

export const MY_CONTACTS_QUERY = gql`
  query Query($id: ID) {
    getAllUserContacts(id: $id) {
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

const useContacts = () => {
  const [execGetContacts] = useLazyQuery(MY_CONTACTS_QUERY, {
    fetchPolicy: "no-cache",
  });

  const executeGetContacts = async (id: any): Promise<GQLResult | null> => {
    let result = await execGetContacts({
      variables: { id },
    });
    return result.data ? result.data.getAllUserContacts : null;
  };

  return { executeGetContacts };
};

export default useContacts;
