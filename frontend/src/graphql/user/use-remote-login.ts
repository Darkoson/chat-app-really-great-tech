import { gql, useMutation } from "@apollo/client";
import { GQLResult, LoginInput } from "../../interfaces";

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      res {
        ... on LoginData {
          currentUser {
            id
            email
            firstname
            lastname
            password
            avatar
            confirmed
          }
          contacts {
            id
            email
            firstname
            lastname
            password
            avatar
            confirmed
          }
          blockedIds
        }
        ... on Info {
          info
        }
      }
    }
  }
`;

export const useRemoteLogin = () => {
  const [login] = useMutation(LOGIN_MUTATION);

  const executeLogin = async (input: LoginInput): Promise<GQLResult> => {
    let result = await login({
      variables: { input },
    });

    console.log("login input = ", input);
    console.log("login data = ", result.data.login);
    
    return result.data ? result.data.login : { ok: false, res: result.errors};
  };

  return { executeLogin };
};
