import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().required('Email is required.').email('Must be a valid email.'),
  password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters long.'),
});

export const signupSchema = Yup.object({
  email: Yup.string().required('Email is equired').email('Invalid email.'),
  password: Yup.string().required('Password is required.').min(8, 'Password must be at least 8 characters long.'),
  password_2: Yup.string()
    .required('Must confirm password.')
    .oneOf([Yup.ref('password'), 'null'], 'Passwords must match.'),
});
