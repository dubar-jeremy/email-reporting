export interface Props {
  onChangeForm: () => void;
}

export interface FormValues {
  employee_lastName: string;
  employee_firstName: string;
  employee_email: string;
  employee_password: string;
  manager_lastName: string;
  manager_firstName: string;
  manager_email: string;
  customer_name: string;
}

export interface Customer {
  name: string;
}