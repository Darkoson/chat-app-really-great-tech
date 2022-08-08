import { gql, useMutation } from "@apollo/client";
import { GQLResult, RegistrationInput } from "../../interfaces";

const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
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
          info
        }
      }
    }
  }
`;

export const useRemoteRegistration = () => {
  const [register] = useMutation(REGISTER_MUTATION);

  const executeRegistration = async (
    input: RegistrationInput
  ): Promise<GQLResult> => {
    let result = await register({
      variables: { input },
    });
    return result.data
      ? result.data.register
      : { ok: false, res: result.errors };
  };

  return { executeRegistration };
};
