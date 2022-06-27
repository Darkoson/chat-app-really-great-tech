import { gql, useMutation } from "@apollo/client";
import { GQLResult } from "../../interfaces";

export const LOGOUT_MUTATION = gql`
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

const useLogout = () => {
  const [logout] = useMutation(LOGOUT_MUTATION);

  const executeLogout = async (): Promise<GQLResult | null> => {
    let result = await logout();
    return result.data ? result.data.logout : null;
  };

  return { executeLogout };
};

export default useLogout;
