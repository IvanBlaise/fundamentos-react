
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumeroAleatorio'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>

    <div id="app">
        <h1>Fundamentos React Resume</h1>
        <NumAleatorio max={100} min={50} />
        <Fragmento />
        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Show de Bola!!!"
            nota={6.0}
        />
        <Primeiro />

    </div>

