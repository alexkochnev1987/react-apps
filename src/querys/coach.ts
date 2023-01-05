import { gql } from '@apollo/client';

export interface Coach {
  id: string | number;
  name: string;
  age: number;
  team: string;
}

export interface CoachesGQL {
  coaches: Coach[];
}

export const coachQuery = gql`
  query {
    coaches {
      id
      name
      age
      team
    }
  }
`;
