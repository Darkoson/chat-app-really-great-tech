import { gql, useMutation } from "@apollo/client";
import { GQLResult } from "../../interfaces";

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      ok
      res {
        ... on Info {
          messages
        }
      }
    }
  }
`;

export const useRemoteLogout = () => {
  const [logout] = useMutation(LOGOUT_MUTATION);

  const executeLogout = async (): Promise<GQLResult | null> => {
    let result = await logout();
    return result.data ? result.data.logout : null;
  };

  return { executeLogout };
};
