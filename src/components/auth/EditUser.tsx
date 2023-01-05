import Button from '@mui/material/Button';
import { useAuth } from 'hook/useAuth';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const EditUser = () => {
  const { name, login } = useAuth();
  const [isValidPas, setIsValidPas] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ defaultValues: { name: name, login: login, password: '', password2: '' } });
  const onSubmit: SubmitHandler<{
    name: string;
    login: string;
    password: string;
    password2: string;
  }> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (!isValidPas && value.password === value.password2) setIsValidPas(true);
      if (isValidPas && value.password !== value.password2) setIsValidPas(false);
    });
    return () => subscription.unsubscribe();
  }, [watch, isValidPas]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register('name', {
            required: 'This field required.',
            minLength: { value: 3, message: 'Min length name should to be 3 letter.' },
          })}
        />
        <p>{errors.login?.message}</p>
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          {...register('login', {
            required: 'This field required.',
            minLength: { value: 3, message: 'Min length login should to be 3 letter.' },
          })}
        />
        <p>{errors.login?.message}</p>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'This field required.',
            minLength: { value: 5, message: 'Min length 5.' },
          })}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          {...register('password2', {
            required: 'This field required.',
            minLength: { value: 5, message: 'Min length 5.' },
          })}
        />
        <p>{errors.password2?.message}</p>
      </div>
      <Button type="submit" disabled={!isValid || !isValidPas} onClick={handleSubmit(onSubmit)}>
        Save changes
      </Button>
    </form>
  );
};

export default EditUser;
