import React, { useReducer, useEffect, createContext} from "react";

const initialState = {
    titulo: "Esto es un titulo",
    dni: "424242",
    desc: "esto es una descripcion"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setTitulo":
        return {...state, titulo: action.value};

        case "setDni":
        return { ...state, dni: action.payload.dni };

        case "setDesc":
        return { ...state, desc: action.payload.desc };

        default:
        return { ...state };
    }
};

const VisitorContext = createContext(initialState);

function VisitorProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function uploadVisitorDetails() {}

    useEffect(() => {
        dispatch({type:"setTitulo",value:"Titulo"})
    },[]);

    return (
        <VisitorContext.Provider value={{ state, dispatch }}>
            {children}
        </VisitorContext.Provider>
    );
}

export { VisitorContext, VisitorProvider };
