import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users(limit: 10) {
      id
      firstName
      lastName
      company {
        id
        name
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query getCompanies {
    companies {
      id
      name
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $companyId: ID!) {
    addUser(user: { firstName: $firstName, lastName: $lastName, companyId: $companyId }) {
      id
      firstName
      lastName
      company {
        id
        name
      }
    }
  }
`;
