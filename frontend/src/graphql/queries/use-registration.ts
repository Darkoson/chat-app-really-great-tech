import { gql, useMutation } from "@apollo/client";
import { User, UserInfoResult } from "../../interfaces";

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
    input: User
  ): Promise<UserInfoResult | null> => {
    let result = await register({
      variables: { input },
    });
    return result.data ? result.data.register : null;
  };

  return { executeRegistration };
};

export default useRegistration;
