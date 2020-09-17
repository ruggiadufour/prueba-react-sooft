import React from 'react';
import Paper from '@material-ui/core/Paper';
import Ejercicio_1 from './Ejercicio_1.js';
import Ejercicio_2 from './Ejercicio_2.js';

import { makeStyles } from '@material-ui/core/styles';

function App() {
  const classes = Estilos();
  return (
    <div>
      <Paper className={classes.pastel}>
        <h1>Ejercicio 1:</h1>
        <hr/>
        <Ejercicio_1 array={[1,2,1,3,3,1,2,1,5,1]}/>
      </Paper>

      <Paper className={classes.pastel}>
        <h1>Ejercicio 2:</h1>
        <hr/>
        <Ejercicio_2 numero={5}/>
      </Paper>

      
    </div>
  );
}

const Estilos = makeStyles((theme) => ({
    pastel: {
        background: "#FFDED3",
        padding: 10,
        marginTop: 10,
        margin: "auto",
        width:400,

    },    
}));

export default App;
