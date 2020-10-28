import React, {useEffect} from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { useHistory } from 'react-router-dom';

const Eventos = () => {
    const history = useHistory();

    useEffect(() =>{
        const token =  localStorage.getItem('token-nyous');

        //usuário não logado
        if(token === null){
            history.push('/login');
        }
    },[])

    return(
        <div>
            <Menu />
            <h1>Eventos</h1>
            <Rodape />  
        </div>
    )

}

export default Eventos;