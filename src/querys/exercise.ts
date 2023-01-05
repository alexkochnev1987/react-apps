import { gql } from '@apollo/client';
import { Coach } from './coach';

export interface ExerciseQuery {
  id: string | number;
  name: string;
  tag: string;
  age: string;
  description: string;
  points: string;
  coachId?: Coach | string;
  img: string;
}

export interface ExerciseGQL {
  exercises: ExerciseQuery[];
}

export const exerciseQuery = gql`
  query {
    exercises {
      id
      name
      tag
      age
      description
      points
      img
      coachId {
        id
        name
        age
        team
      }
    }
  }
`;
