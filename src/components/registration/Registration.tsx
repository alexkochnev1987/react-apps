import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  date: number | string;
  country: string;
  checkbox: string;
  sex: string;
  file: string;
}

const validate = (values: User) => {
  const errors: Partial<User> = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.date) {
    errors.date = 'Required';
  }
  if (!values.country) {
    errors.country = 'Required';
  }

  if (!values.checkbox) {
    errors.checkbox = 'You should check this message';
  }

  return errors;
};

const Registration = (props: { func: (user: User) => void }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: Date.now(),
      country: '',
      checkbox: '',
      sex: 'male',
      file: '',
    },
    validate,
    onSubmit: (values) => {
      toast.success('FUCK EAHHH!!!!');
      props.func(values);
      formik.resetForm();
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="email">Birthday</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      {formik.errors.date ? <div>{formik.errors.date}</div> : null}
      <label htmlFor="country">Country</label>
      <select
        value={formik.values.country}
        onChange={formik.handleChange}
        id="country"
        name="country"
      >
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Greece">Greece</option>
        <option value="Poland">Poland</option>
      </select>
      {formik.errors.country ? <div>{formik.errors.country}</div> : null}

      <input
        type="checkbox"
        id="checkbox"
        value={formik.values.checkbox}
        onChange={formik.handleChange}
      />
      <label htmlFor="checkbox">I consent to my personal data</label>
      {formik.errors.checkbox ? <div>{formik.errors.checkbox}</div> : null}
      <button type="submit">Submit</button>

      <input type="radio" name="sex" value="male" onChange={formik.handleChange} />

      <input type="radio" name="sex" value="female" onChange={formik.handleChange} />
      <input type="file" onChange={formik.handleChange} name="file" />
    </form>
  );
};

export default Registration;
