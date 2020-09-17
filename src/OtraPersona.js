import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {VisitorContext} from './Context.js'

export default function Variants() {
  const classes = useStyles();
  const { state, dispatch } = useContext(VisitorContext);
  return (
    <div className={classes.bg}>
      <Paper className={classes.root} elevation={2}>
          <FormControl fullWidth style={{margin: 10}}>
              <Typography variant="h5" component="h1" align="center" className={classes.form}>
                {state.titulo}
              </Typography>
              <TextField id="filled-basic" label="Usuario/Correo electrónico" variant="filled" />
              
              <Typography variant="body1" align="center">
                  ¿Sos nuevo acá?
                  
              </Typography>
          </FormControl>
      </Paper>
    </div>
    
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
    margin: 10,
    background: "gray",
  },
  
  bg:{
    
    width: 400,
    margin: "auto"
  }
}));