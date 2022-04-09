import { AxiosResponse } from 'axios';
import API from '../../config/axios.config';



/**
 * TODO: check types
 */
export const addCustomer = async (
  data: any,
): Promise<AxiosResponse<any, any>> => await API.post('/customer', data);



interface Customer {
  id: number;
  name: string;
}

export const findAllCustomers = async (): Promise<AxiosResponse<Customer[]>> =>
  await API.get<Customer[]>('/customer');