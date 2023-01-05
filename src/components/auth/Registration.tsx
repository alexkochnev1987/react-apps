import Button from '@mui/material/Button';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export interface Registration {
  name: string;
  login: string;
  password: string;
}

const user = {
  name: 'Alex',
  login: 'user001',
  password: 'userpass@123',
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ defaultValues: user });

  const onSubmit: SubmitHandler<Registration> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register('name', {
            required: 'This field required.',
            minLength: { value: 3, message: 'Min length login should to be more than 2 letter.' },
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
        <label htmlFor="password">Password</label>
        <input
          type="text"
          {...register('password', {
            required: 'This field required.',
            minLength: { value: 5, message: 'Min length 5.' },
          })}
        />
        <p>{errors.password?.message}</p>
      </div>
      <p>
        Already have an account?
        <Link to="/login">Go to login</Link>
      </p>
      <Button type="submit" disabled={!isDirty && !isValid} onClick={handleSubmit(onSubmit)}>
        Registration
      </Button>
    </form>
  );
};

export default Registration;
