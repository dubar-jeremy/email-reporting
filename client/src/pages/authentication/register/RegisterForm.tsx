import { useFormik } from 'formik';
import { FormValues, Props } from './register.interface';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useCreateEmployee } from '../../../hooks/api.hook';
import { initialValues, validationSchema } from './register.formik';

const RegisterForm: React.FC<Props> = ({ onChangeForm }) => {
  const { mutateAsync: mutateEmployee } = useCreateEmployee();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await mutateEmployee(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id='lastName'
        name='lastName'
        label='lastName'
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />

      <TextField
        id='firstName'
        name='firstName'
        label='firstName'
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />

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

export default RegisterForm;
