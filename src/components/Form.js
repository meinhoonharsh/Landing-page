import React, { useState } from 'react';
import database from './firebase';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  
  const [Name, setName] = useState('');
  
  const [email, setEmail] = useState('');

  const Push = () => {
    database.ref("users").push({
      Name : Name,
      Email : email,
    }).catch(alert);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(Name, email);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="filled"
        required
        value={Name}
        onChange={e => setName(e.target.value)}
      />
      
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
  
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={Push}>
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;