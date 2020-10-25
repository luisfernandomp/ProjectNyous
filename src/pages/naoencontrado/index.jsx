import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button} from 'react-bootstrap';

const Naoencontrado = () => {
    return(
        <div>
            <Menu />
                <Container>
                    Não encontrado
                </Container>
            <Rodape />
        </div>
    )
}

export default Naoencontrado;
