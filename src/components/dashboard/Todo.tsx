import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/todo-slice';
import ConfirmDialog from './ConfirmDialog';

export interface Todo {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files?: [
    {
      filename: string;
      fileSize: number;
    }
  ];
}

interface Props {
  todo: Partial<Todo>;
}

const TodoPage = ({ todo }: Props) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const removeTask = () => {
    if (todo.id) dispatch(removeTodo(todo.id));
  };
  return (
    <>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={removeTask}
        title="Delete task?"
        content="If you click delete. Task will be deleted."
      />
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.order}</p>
      <Button onClick={() => setOpen(true)}>Remove task</Button>
    </>
  );
};

export default TodoPage;
