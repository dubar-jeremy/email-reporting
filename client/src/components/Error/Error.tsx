import { Snackbar } from '@mui/material';
import { useState } from 'react';

const Error = (props: any) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    props.setDisplayError(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={props.errorMessage}
      onClose={handleClose}
    />
  );
};
export default Error;
