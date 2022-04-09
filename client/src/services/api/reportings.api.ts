import { AxiosResponse } from 'axios';
import API from '../../config/axios.config';

/**
 * TODO: check types
 */
export const create = async (data: any): Promise<AxiosResponse<any, any>> =>
  await API.post('/reportings', data);

export const findAll = async (): Promise<AxiosResponse<any, any>> =>
  await API.get('/reportings');
