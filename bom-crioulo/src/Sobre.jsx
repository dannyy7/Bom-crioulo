import './globalstyle.css'; // CSS global
import { useState } from 'react'; // só se for usar state

function Sobre(){
    return(
        <div className='sobre'>
            <p className='textosobre'>Alunos:Daniela, Emanuel, Emily, Heitor, Rafaela</p>
            <p className='textosobre'>Professora:Sandra</p>
        </div>
    )
}

export default Sobre