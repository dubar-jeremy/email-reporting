import Cookies from 'js-cookie';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getCustomers, signIn, postCustomer, postEmployee, register } from '../services/api/api';

// Authentication
export const UseLogin = () => {
  return useMutation(['UseLogin'], async (data: any) => await signIn(data));
};

export const UseRegister = () => {
  return useMutation(['UseRegister'], async (data: any) => await register(data), {
    onSuccess: (data: any) => {
      Cookies.set('emailReporting', data.data.access_token);
    },
  });
};

// Customer
export const UseFindAllCustomers = () => {
  return useQuery(['UseFindAllCustomers'], getCustomers);
};

export const UseCreateCustomer = (invalidateQuery: boolean = false, queryKey: string = '') => {
  const queryClient = useQueryClient();

  return useMutation(['UseCreateCustomer'], async (data: any) => await postCustomer(data), {
    onSuccess: () => {
      if (invalidateQuery && queryKey.length > 0) {
        queryClient.invalidateQueries(queryKey);
      }
    },
  });
};

// Employee
export const useCreateEmployee = (invalidateQuery: boolean = false, queryKey: string = '') => {
  const queryClient = useQueryClient();

  return useMutation(['useCreateEmployee'], async (data: any) => await postEmployee(data), {
    onSuccess: () => {
      if (invalidateQuery && queryKey.length > 0) {
        console.log('test');
        queryClient.invalidateQueries(queryKey);
      }
    },
  });
};
