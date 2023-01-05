import { useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { deleteExerciseMutation, updateExerciseMutation } from 'mutations/exerciseMutation';

import { ExerciseQuery } from 'querys/exercise';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { editExercise, removeExercise } from 'store/exercise-slice';
import { useAppDispatch } from 'store/hook';
import ExerciseDialog from './ExerciseDialog';
import { urlImgFormat } from './urlImgFormat';

interface UpdateExerciseMutationResponse {
  updateExercise: {
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

interface DeleteExerciseMutationResponse {
  deleteExercise: {
    id: string;
    name: string;
    __typename: string;
  };
}

const Exercise = (props: { exercise: ExerciseQuery }) => {
  const dispatch = useAppDispatch();
  const [mutateFunction] = useMutation(updateExerciseMutation);
  const [deleteMutation] = useMutation(deleteExerciseMutation);
  const { name, img, description, tag, age, points, id } = props.exercise;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteExercise = () => {
    deleteMutation({ variables: { id } })
      .then((d) => {
        const result = d.data as DeleteExerciseMutationResponse;
        dispatch(removeExercise(result.deleteExercise.id));
        toast.success(
          `Exercise with name ${result.deleteExercise.name.toUpperCase()} was successfully deleted`
        );
      })
      .catch((e) => {
        toast.error(e.message);
      });
    handleClose();
  };

  const handleSubmit = ({ name, tag, age, description, points, img }: ExerciseQuery) => {
    mutateFunction({
      variables: {
        id,
        name,
        tag,
        age,
        description,
        points,
        img,
      },
    })
      .then((d) => {
        const result = d.data as UpdateExerciseMutationResponse;
        dispatch(editExercise(result.updateExercise));
        toast.success(
          `Exercise with name ${result.updateExercise.name.toUpperCase()} was successfully created`
        );
      })
      .catch((e) => {
        toast.error(e.message);
      });
    handleClose();
  };

  return (
    <>
      <Paper elevation={3}>
        <ExerciseDialog
          open={open}
          data={props.exercise}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <h2></h2>
          <CardMedia component="img" sx={{ width: 300 }} image={urlImgFormat(img)} alt={name} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h3">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {points}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {age}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {tag}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleClickOpen} variant="contained">
                Change
              </Button>
              <Button onClick={deleteExercise} variant="contained" color="error">
                Delete
              </Button>
            </CardActions>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Exercise;
