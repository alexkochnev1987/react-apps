import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { urlImgFormat } from './urlImgFormat';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CardMedia from '@mui/material/CardMedia';
import { ExerciseQuery } from 'querys/exercise';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogProps {
  open: boolean;
  data: ExerciseQuery;
  onClose: () => void;
  onSubmit: (value: ExerciseQuery) => void;
}

const ExerciseDialog = (props: DialogProps) => {
  const { onSubmit, onClose, data, open } = props;
  const [image, setImage] = useState('');
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({ defaultValues: data });

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.img) setImage(value.img);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      onClose={onClose}
      open={open}
      sx={{ padding: '10px', margin: '10px' }}
    >
      <DialogTitle>Set fields for adding exercise</DialogTitle>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={image ? urlImgFormat(image) : urlImgFormat(data.img)}
        alt={data.name}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            rules={{
              required: { value: true, message: 'This field required' },
            }}
            render={({ field }) => {
              return <TextField label="name" {...field} />;
            }}
          />
          {errors.name && <p role="alert">{errors.name?.message}</p>}
        </div>
        <div>
          <Controller
            name="img"
            control={control}
            rules={{
              required: { value: true, message: 'This field required' },
            }}
            render={({ field }) => {
              return <TextField fullWidth multiline label="img" {...field} />;
            }}
          />
          {errors.img && <p role="alert">{errors.img?.message}</p>}
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => {
              return <TextField multiline fullWidth maxRows={4} label="description" {...field} />;
            }}
          />
        </div>
        <div>
          <Controller
            name="points"
            control={control}
            render={({ field }) => {
              return <TextField label="points" {...field} />;
            }}
          />
        </div>
        <div>
          <Controller
            name="tag"
            control={control}
            render={({ field }) => {
              return <TextField label="tag" {...field} />;
            }}
          />
          <Controller
            name="age"
            control={control}
            render={({ field }) => {
              return <TextField label="age" {...field} />;
            }}
          />
        </div>
        <Button type="button" onClick={onClose} variant="contained" color="error">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Save changes
        </Button>
      </form>
    </Dialog>
  );
};

export default ExerciseDialog;
