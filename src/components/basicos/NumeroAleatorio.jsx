import React from "react";



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {min, max} = props
    const numAleatorio = parseInt(Math.random() * (max - min)) + min
    return(
        <>
            <h1>Valor Aleatorio</h1>
           <p> <strong>Valor minimo: </strong> {min}</p>
            <p><strong>Valor Máximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {numAleatorio}</p>
        </>
    )
}
