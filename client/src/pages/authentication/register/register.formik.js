import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const initialValues = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
};
