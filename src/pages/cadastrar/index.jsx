import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';
import { Container, Form, Button} from 'react-bootstrap';

const Cadastrar = () => {
    return(
        <div>
            <Menu />
                <Container className="form-height">
                    <Form className="form-signin">
                        <div className="font-weight-normal">
                        Cadastro
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome completo" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Endereço de email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Container>
            <Rodape />
        </div>
    )
}

export default Cadastrar;
