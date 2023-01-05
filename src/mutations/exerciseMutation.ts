import { gql } from '@apollo/client';

export interface ExerciseMutation {
  id: string | number;
  name: string;
  tag: string;
  age: string;
  description: string;
  points: string;
  coachId: string;
  img: string;
}

export const addExerciseMutation = gql`
  mutation (
    $name: String!
    $tag: String
    $age: String
    $description: String
    $points: String
    $coachId: ID
    $img: String!
  ) {
    addExercise(
      name: $name
      age: $age
      tag: $tag
      description: $description
      points: $points
      coachId: $coachId
      img: $img
    ) {
      id
      name
      age
      tag
      description
      points
      coachId {
        id
      }
      img
    }
  }
`;

export const updateExerciseMutation = gql`
  mutation updateExercise(
    $id: ID
    $name: String
    $tag: String
    $age: String
    $description: String
    $points: String
    $coachId: ID
    $img: String
  ) {
    updateExercise(
      id: $id
      name: $name
      age: $age
      tag: $tag
      description: $description
      points: $points
      coachId: $coachId
      img: $img
    ) {
      id
      name
      age
      tag
      description
      points
      coachId {
        id
      }
      img
    }
  }
`;

export const deleteExerciseMutation = gql`
  mutation deleteExercise($id: ID) {
    deleteExercise(id: $id) {
      id
      name
    }
  }
`;
