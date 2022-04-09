import { useMutation, useQuery, useQueryClient } from 'react-query';
import { findAllCustomers, addCustomer } from '../services/api/customer.api';

export const UseGetAllCustomers = () => {
 return useQuery(['useGetAllCustomers'], findAllCustomers);
};

export const UseAddCustomer = (invalidateQuery: boolean = false, queryKey: string = '') => {
  const queryClient = useQueryClient();

  return useMutation(['useAddCustomer'], async (data: any) => await addCustomer(data), {
    onSuccess: () => {
      if (invalidateQuery && queryKey.length > 0) {
        console.log("test")
        queryClient.invalidateQueries(queryKey)
      }
    }
  });
}