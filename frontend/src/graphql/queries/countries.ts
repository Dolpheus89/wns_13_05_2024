import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
query Country($code: String!) {
  country(code: $code) {
    code
    continent {
      name
    }
    emoji
    name
  }
}
`;