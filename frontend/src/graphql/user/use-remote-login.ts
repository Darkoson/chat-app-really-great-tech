import { gql, useMutation } from "@apollo/client";
import {  GQLResult, LoginInput } from "../../interfaces";

 const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      res {
        ... on User {
          id
          email
          firstname
          lastname
          password
        }
        ... on Info {
          messages
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
    return result.data ? result.data.login : { ok: false, res: result.errors };
  };

  return { executeLogin };
};
 
