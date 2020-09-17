import React, {useState} from 'react';

export default function Ejercicio_1() {
    let n = 5;
    let matriz = [];
    const imprimirX = () =>{
        for(let i = 0; i < n; i++) {
            let fila = "";
            let izq = 0;
            let der = n-1;
            for(let j = 0; j < n; j++) {
                if(j===izq || j===der){
                    fila = fila + "X"
                }else{
                    fila = fila + "_"
                }
            }
            matriz.push(fila);
        }
    }

    return (
        <div>
            {
                matriz.map((valor, i) => {
                    return (<h1 key={i}>{valor}</h1>)
                })
            }
        </div>
    )
}
