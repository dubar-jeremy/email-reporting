import { useFormik } from 'formik';
import { FormValues, Props } from './interface/login.interface';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { UseLogin } from '../../../hooks/api.hook';
import { initialValues } from './formik/initialValues';
import { validationSchema } from './validation/login.validation';

const LoginForm: React.FC<Props> = ({ onChangeForm }) => {
  const { mutate } = UseLogin();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id='email'
        name='email'
        label='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id='password'
        name='password'
        label='Password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color='primary' variant='contained' type='submit'>
        Submit
      </Button>
      <span onClick={onChangeForm}>Créer un compte</span>
    </form>
  );
};

export default LoginForm;
