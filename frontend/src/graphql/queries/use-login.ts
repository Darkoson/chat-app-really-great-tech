import { gql, useMutation } from "@apollo/client";
import {  GQLResult, LoginInput } from "../../interfaces";

export const LOGIN_MUTATION = gql`
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

const useLogin = () => {
  const [login] = useMutation(LOGIN_MUTATION);

  const executeLogin = async (input: LoginInput): Promise<GQLResult | null> => {
    let result = await login({
      variables: { input },
    });
    return result.data ? result.data.login : null;
  };

  return { executeLogin };
};

export default useLogin;
