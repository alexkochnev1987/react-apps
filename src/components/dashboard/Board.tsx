import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import CustomDialog from './CustomDialog';
import TodoPage, { Todo } from './Todo';
import { addTodo } from 'store/todo-slice';
import { useAppDispatch, useAppSelector } from 'store/hook';

const Board = () => {
  const todos = useAppSelector((store) => store.todos.list);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTask: SubmitHandler<Partial<Todo>> = (data) => {
    dispatch(addTodo(data));
    handleClose();
  };
  return (
    <>
      <button onClick={handleClickOpen}>Add task</button>
      <CustomDialog
        open={open}
        onClose={handleClose}
        onSubmit={addTask}
        title="Add new task"
        content="To add task complete this form."
      />

      {todos.map((todo) => (
        <TodoPage todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Board;
