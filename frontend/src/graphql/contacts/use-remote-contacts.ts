import { gql, useLazyQuery } from "@apollo/client";
import { GQLResult } from "../../interfaces";

const MY_CONTACTS_QUERY = gql`
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

export const useRemoteContacts = () => {
  // const { data, loading, error } =

  // const executeContacts = (id: number | undefined) => {
  //   return useQuery(MY_CONTACTS_QUERY, {
  //     variables: { id },
  //     fetchPolicy: "no-cache",
  //   });
  // }

  // console.log("before loading contacts id=", id);

  // let result: GQLResult = data.getAllUserContacts;
  // console.log("after loading contacts result =", result);

  // if (error) {
  //   result.ok = false;
  //   result.res = { messages: [error.message] };
  // }

  const [execGetContacts] = useLazyQuery(MY_CONTACTS_QUERY, {
    fetchPolicy: "no-cache",
  });

  const executeContacts = async (id: any): Promise<GQLResult> => {
    let response = await execGetContacts({
      variables: { id },
    });

    console.log("after loading contacts result =");

    if (response.error) {
      return {
        ok: false,
        res: { messages: [response.error.message] },
      };
    }

    let result: GQLResult = response.data.getAllUserContacts;
    return result;
    // return result.data
    //   ? result.data.getAllUserContacts
    //   : { ok: false, res: result.error };
  };

  return { executeContacts };
};
