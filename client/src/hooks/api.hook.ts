import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getCustomers, signIn, postCustomer, postEmployee } from '../services/api/api';

// Authentication
export const UseLogin = () => {
  return useMutation(['UseLogin'], async (data: any) => await signIn(data));
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
