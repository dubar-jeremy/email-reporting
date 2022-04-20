import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  employee_lastName: Yup.string().required('Required'),
  employee_firstName: Yup.string().required('Required'),
  employee_email: Yup.string().email('Invalid email').required('Required'),
  employee_password: Yup.string().required('Required'),
  manager_lastName: Yup.string().required('Required'),
  manager_firstName: Yup.string().required('Required'),
  manager_email: Yup.string().email('Invalid email').required('Required'),
  customer_name: Yup.string().required('Required'),
});

export const initialValues = {
  employee_lastName: '',
  employee_firstName: '',
  employee_email: '',
  employee_password: '',
  manager_lastName: '',
  manager_firstName: '',
  manager_email: '',
  customer_name: '',
};

export const transformValues = (values: any, customersList: any) => {
  return {
    employee: [
      {
        firstName: values.employee_firstName,
        lastName: values.employee_lastName,
        email: values.employee_email,
        password: values.employee_password,
      },
    ],
    manager: [
      {
        firstName: values.manager_firstName,
        lastName: values.manager_lastName,
        email: values.manager_email,
      },
    ],
    customer: customersList,
  };
};
