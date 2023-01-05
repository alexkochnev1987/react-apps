import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ExerciseGQL, ExerciseQuery, exerciseQuery } from 'querys/exercise';
import CircularProgress from '@mui/material/CircularProgress';
import Exercise from './Exercise';
import Button from '@mui/material/Button';
import ExerciseDialog from './ExerciseDialog';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { addExercise, fillExercise } from 'store/exercise-slice';
import { addExerciseMutation } from 'mutations/exerciseMutation';

interface AddExerciseMutationResponse {
  addExercise: {
    id: string;
    name: string;
    age: string;
    tag: string;
    description: string;
    points: string;
    coachId: string;
    img: string;
    __typename: string;
  };
}

const ExerciseList = () => {
  const [mutationAddExercise] = useMutation(addExerciseMutation);
  const exercises = useAppSelector((store) => store.exercise.exercise);
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery<ExerciseGQL>(exerciseQuery);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (data) dispatch(fillExercise(data.exercises));
  }, [data, dispatch]);
  const emptyExercise: ExerciseQuery = {
    name: '',
    id: '',
    tag: '',
    description: '',
    img: '',
    age: '',
    points: '',
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = ({ name, tag, age, description, points, img }: ExerciseQuery) => {
    mutationAddExercise({
      variables: {
        name,
        tag,
        age,
        description,
        points,
        img,
      },
    })
      .then((d) => {
        const result = d.data as AddExerciseMutationResponse;
        dispatch(addExercise(result.addExercise));
        toast.success(
          `Exercise with name ${result.addExercise.name.toUpperCase()} was successfully created`
        );
      })
      .catch((e) => {
        toast.error(e.message);
      });
    setOpen(false);
  };
  return (
    <>
      <ExerciseDialog
        open={open}
        data={emptyExercise}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <Button onClick={handleClickOpen} variant="outlined">
        Add exercise
      </Button>
      {error ? error.message : ''}
      {loading || !data ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        exercises.map((elem) => {
          return <Exercise exercise={elem} key={elem.id} />;
        })
      )}
    </>
  );
};

export default ExerciseList;
