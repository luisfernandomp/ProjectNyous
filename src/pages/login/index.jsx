import React, {useState} from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import jwt_decode from "jwt-decode";

import './index.css';
import { Container, Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/account/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok === true){
                return response.json();
            }

            alert('Dados Inválidos!');
        })
        .then(data => {
            localStorage.setItem('token-nyous', data.token); 

            let decoded = jwt_decode(token);

            if(usuario.role === "Admin"){
                history.push('/admin/dashboard');
            }else{
                history.push('/eventos');
            }

        })
        .catch( err => console.error(err));
    }

    return(
        <div>
            <Menu />
                <Container className="form-height">
                    <Form className="form-signin">
                        <div className="font-weight-normal">
                        Login
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Endereço de email" onChange={ event => setEmail(event.target.value)} value={email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" onChange={ event => setSenha(event.target.value)} value={senha} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={ event => logar(event) }>
                            Enviar
                        </Button>
                        
                    </Form>
                </Container>
            <Rodape />
        </div>
    )
}

export default Login;
