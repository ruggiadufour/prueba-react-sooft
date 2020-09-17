import React, {useState,useEffect} from 'react';

export default function Ejercicio_1({array}) {
    const [myArray, setmyArray] = useState(array);
    const [histograma, sethistograma] = useState([])

    useEffect(()=>{
        if(myArray.length>10 || myArray.some((element) => element>5 || element<1)){
            alert("ERROR - Ejercicio 1: El arreglo ingresado tiene mas de 10 elementos o contiene elementos distintos de 1, 2, 3, 4 o 5");
        }else{
            hacerHistograma();
        }
    },[])
    
    const hacerHistograma = () =>{
        for (let i = 1; i <= 5; i++) {
            let fila = "";
            for (let j = 0; j < 10; j++) {
                if(i == myArray[j]){
                    fila = fila + "*";
                    
                }
            }
        
            sethistograma((arreglo) => [...arreglo, fila])
            
        }
    }
    return (
        <div>
            {
                histograma.map((elemento,j)=>(<h3 key={j}>{`${j+1}: ${elemento}`}</h3>))
            }
        </div>
    )
}
