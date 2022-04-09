/**
 * test react query hooks
 */

import { UseAddCustomer, UseGetAllCustomers } from './hooks/customer.hook';


const TestComponent: React.FC = () => { 
   
  const { isLoading, data: items } = UseGetAllCustomers();

  const { mutate } = UseAddCustomer(true, 'useGetAllCustomers');

  const data = {
    name: "test",
  }

  return (
  <div>
    <button onClick={() => mutate(data)}>post data</button>
  </div>
  );
};

export default TestComponent;
