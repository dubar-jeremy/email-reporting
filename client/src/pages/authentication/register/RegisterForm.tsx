import { useFormik } from 'formik';
import { Customer, FormValues, Props } from './register.interface';
import TextField from '@mui/material/TextField';
import { Button, Chip, Snackbar } from '@mui/material';
import { UseRegister } from '../../../hooks/api.hook';
import { initialValues, transformValues, validationSchema } from './register.formik';
import { useEffect, useState } from 'react';
import { capitalizeWords } from '../../../helper/shared.helper';
import Error from '../../../components/Error/Error';

const RegisterForm: React.FC<Props> = ({ onChangeForm }) => {
  const [customersList, setCustomersList] = useState<Array<Customer>>([]);
  const [displayError, setDisplayError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { mutate } = UseRegister();

    

  const updateCustomerList =  () => {
    let customerName = capitalizeWords(formik.values.customer_name);
    
    if (customerName.length === 0) {
      setErrorMessage('Customer name is required');
      return setDisplayError(true);
    }

   setCustomersList([
      ...customersList,
      { name: customerName },
    ]);

    formik.setFieldValue('customer_name', '');
  };

  const isDuplicateCustomer = () => {
    let customerName = capitalizeWords(formik.values.customer_name);

    const isDuplicate = customersList.some(customer => customer.name === customerName);

    if (isDuplicate == true) {
      setErrorMessage('Duplicate');
      setDisplayError(true);
      formik.setFieldValue('customer_name', '');
      return true
    }
    return false
  };

  const onAddButtonClick = () => { 
    if(!isDuplicateCustomer()) {
      updateCustomerList();
    }
  };


  const removeCustomerChip = (index: number) => {
    const newCustomersList = [...customersList];
    newCustomersList.splice(index, 1);
    setCustomersList(newCustomersList);
    return customersList;
  };

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = transformValues(values, customersList);
      //mutate(data)
    },

  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
     {displayError &&  <Error errorMessage={errorMessage} setDisplayError={setDisplayError}/>}
      <TextField
        id='employee_lastName'
        name='employee_lastName'
        label='lastName'
        value={formik.values.employee_lastName}
        onChange={formik.handleChange}
        error={
          formik.touched.employee_lastName &&
          Boolean(formik.errors.employee_lastName)
        }
        helperText={
          formik.touched.employee_firstName && formik.errors.employee_firstName
        }
      />

      <TextField
        id='employee_firstName'
        name='employee_firstName'
        label='firstName'
        value={formik.values.employee_firstName}
        onChange={formik.handleChange}
        error={
          formik.touched.employee_firstName &&
          Boolean(formik.errors.employee_firstName)
        }
        helperText={
          formik.touched.employee_firstName && formik.errors.employee_firstName
        }
      />

      <TextField
        id='employee_email'
        name='employee_email'
        label='Email'
        value={formik.values.employee_email}
        onChange={formik.handleChange}
        error={
          formik.touched.employee_email && Boolean(formik.errors.employee_email)
        }
        helperText={
          formik.touched.employee_email && formik.errors.employee_email
        }
      />
      <TextField
        id='employee_password'
        name='employee_password'
        label='Password'
        type='employee_password'
        value={formik.values.employee_password}
        onChange={formik.handleChange}
        error={
          formik.touched.employee_password &&
          Boolean(formik.errors.employee_password)
        }
        helperText={
          formik.touched.employee_password && formik.errors.employee_password
        }
      />
      <TextField
        id='manager_lastName'
        name='manager_lastName'
        label='manager lastName'
        value={formik.values.manager_lastName}
        onChange={formik.handleChange}
        error={
          formik.touched.manager_lastName &&
          Boolean(formik.errors.manager_lastName)
        }
        helperText={
          formik.touched.manager_lastName && formik.errors.manager_lastName
        }
      />

      <TextField
        id='manager_firstName'
        name='manager_firstName'
        label='manager firstName'
        value={formik.values.manager_firstName}
        onChange={formik.handleChange}
        error={
          formik.touched.manager_firstName &&
          Boolean(formik.errors.manager_firstName)
        }
        helperText={
          formik.touched.manager_firstName && formik.errors.manager_firstName
        }
      />

      <TextField
        id='manager_email'
        name='manager_email'
        label='manager Email'
        value={formik.values.manager_email}
        onChange={formik.handleChange}
        error={
          formik.touched.manager_email && Boolean(formik.errors.manager_email)
        }
        helperText={formik.touched.manager_email && formik.errors.manager_email}
      />

      <TextField
        id='customer_name'
        name='customer_name'
        label='customer_name'
        value={formik.values.customer_name}
        onChange={formik.handleChange}
        error={
          formik.touched.customer_name && Boolean(formik.errors.customer_name)
        }
        helperText={formik.touched.customer_name && formik.errors.customer_name}
      />
      <Button
        color='primary'
        variant='contained'
        type='button'
        onClick={onAddButtonClick}
      >
        Add
      </Button>
      {customersList &&
        customersList.map((customer: any, index: number) => {
          return (
            <Chip
              key={index}
              label={customer.name}
              onDelete={() => removeCustomerChip(index)}
            />
          );
        })}
      <Button color='primary' variant='contained' type='submit'>
        Submit
      </Button>
      <span onClick={onChangeForm}>Créer un compte</span>
    </form>
    </>
  );
};

export default RegisterForm;
