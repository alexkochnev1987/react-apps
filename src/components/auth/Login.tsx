import { BASE_URL, QueryType, UrlParams } from './../../constants';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/user-slice';
import { useFetch } from 'hook/useGetUsers';
import { errorHandler } from 'hook/error-handler';

export interface User {
  login: string;
  password: string;
}

export interface UserResponse {
  id: string;
  login: string;
  name: string;
}

const user = {
  login: 'user001',
  password: 'userpass@123',
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ defaultValues: user });
  const dispatch = useDispatch();
  const getUsers = useFetch;

  const signIn = async (user: User) => {
    const body = JSON.stringify(user);
    try {
      const response = await fetch(BASE_URL + UrlParams.signin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        return errorHandler(response);
      }

      const token: { token: string } = await response.json();

      localStorage.setItem('token', token.token);
      const users: UserResponse[] = await getUsers(BASE_URL + UrlParams.users, QueryType.get);
      const loggedUser = users.find((userResponse) => userResponse.login === user.login);
      if (loggedUser) dispatch(setToken(loggedUser));
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit: SubmitHandler<User> = (data) => {
    signIn(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Link to="/registration">Go to registration</Link>
        </p>
        <Button type="submit" disabled={!isDirty && !isValid} onClick={handleSubmit(onSubmit)}>
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
