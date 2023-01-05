import React from 'react';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';

import './form.css';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  date: number | string;
  country: string;
  checkbox: boolean;
  sex: string;
  file: string;
}

const initialState: User = {
  firstName: '',
  lastName: '',
  email: '',
  date: Date.now(),
  country: '',
  checkbox: false,
  sex: 'male',
  file: '',
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialState });

  const countries = ['Belarus', 'Russia', 'Greece', 'Poland'];

  const onSubmit: SubmitHandler<User> = (data) => {
    toast.success('User was added to cards');
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...register('firstName', {
            required: 'This field required.',
            minLength: { value: 3, message: 'Min length 3.' },
          })}
        />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...register('lastName', {
            required: 'This field required.',
            minLength: { value: 5, message: 'Min length 5.' },
          })}
        />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'This field required.',
          })}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          {...register('date', {
            required: 'This field required.',
          })}
        />
        <p>{errors.date?.message}</p>
      </div>
      <div>
        <select {...register('country')}>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;
