import React, {useState, useEffect} from 'react';

export default function Ejercicio_2({numero}) {
    const [n, setN] = useState(numero)
    const [matriz, setmatriz] = useState([])
    useEffect(()=>{
        imprimirX();        
    },[])
    const imprimirX = () =>{
        if(n===0){
            alert("ERROR - Ejercicio 2: El valor de n es 0, por lo que no se puede imprimir el resultado")
        }else{
            
            for(let i = 0; i < n; i++) {
                let fila = "";
                let izq = 0;
                let der = n-1;
                for(let j = 0; j < n; j++) {
                    if(i===izq || i===der){
                        fila = fila + "X"
                    }else{
                        fila = fila + "_"
                    }
                    izq++;
                    der--;
                }
                console.log(fila)
                setmatriz((elemento) => [...elemento, fila]);
            }
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
