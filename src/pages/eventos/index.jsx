import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { useHistory } from 'react-router-dom';

const Eventos = () => {

    return(
        <div>
            <Menu />
            <h1>Eventos</h1>
            <Rodape />  
        </div>
    )

}

export default Eventos;