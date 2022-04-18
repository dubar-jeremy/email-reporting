import { useState } from 'react';
import LoginForm from './login/LoginForm';
import RegisterForm from './register/RegisterForm';

const Authentication: React.FC = () => {
  const [switchForm, setSwitchForm] = useState<Boolean>(false);

  const onChangeForm = (): void => {
    setSwitchForm(!switchForm);
  };

  return switchForm ? (
    <LoginForm onChangeForm={onChangeForm} />
  ) : (
    <RegisterForm onChangeForm={onChangeForm} />
  );
};

export default Authentication;
