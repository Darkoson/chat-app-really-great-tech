import { gql, useMutation } from "@apollo/client";
import { GQLResult, RegistrationInput } from "../../interfaces";

export const REGISTER_MUTATION = gql`
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
          messages
        }
      }
    }
  }
`;

const useRegistration = () => {
  const [register] = useMutation(REGISTER_MUTATION);

  const executeRegistration = async (
    input: RegistrationInput
  ): Promise<GQLResult | null> => {
    let result = await register({
      variables: { input },
    });
    return result.data ? result.data.register : null;
  };

  return { executeRegistration };
};

export default useRegistration;
