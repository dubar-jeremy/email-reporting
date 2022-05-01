import { useFormik } from 'formik';
import {
  Employee,
  FormValues,
  Manager,
  Props,
} from './interface/register.interface';
import { Button, TextField } from '@mui/material';
import { UseRegister } from '../../../hooks/api.hook';
import { initialValues } from './formik/initialValues';
import { validationSchema } from './validation/register.validation';

const RegisterForm: React.FC<Props> = ({ onChangeForm }) => {
  const { mutate } = UseRegister();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  // https://github.com/jaredpalmer/formik/issues/2347
  return (
    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
      <TextField
        id='employee_lastName'
        name='employee[0].lastName'
        label='Nom'
        value={formik.values.employee[0].lastName}
        error={
          formik.touched.employee &&
          Boolean((formik.errors.employee?.[0] as Employee)?.lastName)
        }
        helperText={(formik.errors.employee?.[0] as Employee)?.lastName}
      />

      <TextField
        id='employee_firstName'
        name='employee[0].firstName'
        label='Prénom'
        value={formik.values.employee[0].firstName}
        error={
          formik.touched.employee &&
          Boolean((formik.errors.employee?.[0] as Employee)?.firstName)
        }
        helperText={(formik.errors.employee?.[0] as Employee)?.firstName}
      />

      <TextField
        id='employee_email'
        name='employee[0].email'
        label='Email'
        value={formik.values.employee[0].email}
        error={
          formik.touched.employee &&
          Boolean((formik.errors.employee?.[0] as Employee)?.email)
        }
        helperText={(formik.errors.employee?.[0] as Employee)?.email}
      />

      <TextField
        id='employee_password'
        name='employee[0].password'
        label='mot de passe'
        value={formik.values.employee[0].password}
        error={
          formik.touched.employee &&
          Boolean((formik.errors.employee?.[0] as Employee)?.password)
        }
        helperText={(formik.errors.employee?.[0] as Employee)?.password}
      />
      <TextField
        id='manager_lastName'
        name='manager[0].lastName'
        label='Nom'
        value={formik.values.manager[0].lastName}
        error={
          formik.touched.manager &&
          Boolean((formik.errors.manager?.[0] as Manager)?.lastName)
        }
        helperText={(formik.errors.manager?.[0] as Manager)?.lastName}
      />

      <TextField
        id='manager_firstName'
        name='manager[0].firstName'
        label='Prénom'
        value={formik.values.manager[0].firstName}
        error={
          formik.touched.manager &&
          Boolean((formik.errors.manager?.[0] as Manager)?.firstName)
        }
        helperText={(formik.errors.manager?.[0] as Manager)?.firstName}
      />

      <TextField
        id='manager_email'
        name='manager[0].email'
        label='Email'
        value={formik.values.manager[0].email}
        error={
          formik.touched.manager &&
          Boolean((formik.errors.manager?.[0] as Manager)?.email)
        }
        helperText={(formik.errors.manager?.[0] as Manager)?.email}
      />

      <Button color='primary' variant='contained' type='submit'>
        Submit
      </Button>
      <span onClick={onChangeForm}>Se connecter</span>
    </form>
  );
};

export default RegisterForm;
