const SignUpForm = (props: any) => {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <span onClick={props.onChangeForm}>S'identifier</span>
    </div>
  );
};

export default SignUpForm;
