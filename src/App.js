import React, {useState, useContext} from 'react';

//import { VisitorContext, VisitorProvider } from './Context.js'
//import OtraPersona from './OtraPersona.js'

import Ejercicio_1 from './Ejercicio_1.js';
import Ejercicio_2 from './Ejercicio_2.js';
function App() {
  return (
    <div>
      <h1>Ejercicio 1:</h1>
      <Ejercicio_1/>

      <h1>Ejercicio 2:</h1>
      <Ejercicio_2/>
    </div>
  );
}

/*function Persona() {
  const { state, dispatch } = useContext(VisitorContext);
  return (
    <div className="App">
      <VisitorProvider>
        <OtraPersona/>
      </VisitorProvider>
    
      <h1>Titulo: {state.titulo}</h1>
      <h1>Dni: {state.dni}</h1>
      <h1>Desc: {state.desc}</h1>
    </div>
  )
}*/


export default App;
