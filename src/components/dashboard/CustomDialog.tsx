import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Todo } from './Todo';

export interface DialogProps<T extends FieldValues> {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<T>;
  title: string;
  content: string;
}

const defaultValues = { title: 'Enter main text', description: 'Enter description' };

const CustomDialog: React.FC<DialogProps<Partial<Todo>>> = ({
  open,
  onClose,
  onSubmit,
  title,
  content,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ defaultValues: defaultValues });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login">Title</label>
            <input
              autoFocus
              type="text"
              {...register('title', {
                required: 'This field required.',
              })}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div>
            <label htmlFor="Description">Description</label>
            <input type="text" {...register('description')} />
          </div>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={!isDirty && !isValid} onClick={handleSubmit(onSubmit)}>
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
