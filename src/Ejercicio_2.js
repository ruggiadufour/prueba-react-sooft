import React, {useState, useEffect} from 'react';

export default function Ejercicio_1() {
    let n = 5;
    const [matriz, setmatriz] = useState([])
    useEffect(()=>{
        imprimirX();
    },[])
    const imprimirX = () =>{
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
