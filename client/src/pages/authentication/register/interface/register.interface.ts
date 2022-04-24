export interface Props {
  onChangeForm: () => void;
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Manager {
  firstName: string;
  lastName: string;
  email: string;
}
export interface FormValues {
  employee: Employee[];
  manager: Manager[];
}
