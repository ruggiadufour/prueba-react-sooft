import React, {useState,useEffect} from 'react';

export default function Ejercicio_1() {
    const [myArray, setmyArray] = useState([1,5,2,3,5,2,4,1,2,1]);
    const [histograma, sethistograma] = useState([])

    useEffect(()=>{
        hacerHistograma();
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
                histograma.map((elemento,j)=>(<h3 key={j}>{j+1}:{elemento}</h3>))
            }
        </div>
    )
}
