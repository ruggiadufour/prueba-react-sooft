import React, {useState} from 'react';

export default function Ejercicio_1() {
    const [myArray, setmyArray] = useState([1,5,2,3,5,2,4,1,2,1]);
    let histograma = [];

    const mostrarHistograma = () =>{
        hacerHistograma();
        histograma.map((elemento,j)=>{
            return (<h3 key={j}>{elemento}</h3>)
        })
    }
    const hacerHistograma = () =>{
        for (let i = 0; i < 5; i++) {
            let fila = "";
            for (let j = 0; j < 10; j++) {
                if(i == myArray[j]){
                    fila = fila + "*";
                }
            }
            histograma.push(fila);   
        }
    }
    return (
        <div>
            {
                mostrarHistograma
            }
        </div>
    )
}
