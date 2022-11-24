import React from "react";

export default function Fragmento(props){
    return (
        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado</p>
        </React.Fragment>
        /*
        Ou 
        <>
            <h2>Fragmento</h2>
            <p>Cuidado</p>
        </>
        não pode ter propriedades
        
        */
    )
}