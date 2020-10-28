import React, { useEffect, useState } from 'react';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { url } from '../../../utils/constants';

const CrudCategorias = () => {
    const [id, setId] = useState(0);    
    const [nome, setNome] = useState('');
    const [urlImagem, setUrlImagem] = useState('');

    useEffect(() =>{
        listar();
    }, [])

    const editar = (event) =>{
        event.preventDefault();

        fetch(url + "/categorias/" + event.target.value, {
            method : "GET",

            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-nyous')
            }

          })
          .then(response => response.json())
          .then( dado =>{
            setId(dado.data.id);
            setNome(dado.data.nome);
            setUrlImagem(dado.data.urlImagem);
          })
          .catch(err => console.error(err))
    }

    const remover = (event) =>{
        event.preventDefault();

        fetch(url + "/categorias/" + event.target.value, {
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-nyous')
            }
          })
          .then(response => response.json())
          .then( dados => {
            alert('Categoria removida');

            listar();
          })
          .catch(err => console.error(err))
    }

    const listar = () =>{
        fetch(`${url}/categorias`, {
            method : 'GET'
        })
        .then(response => response.json())  
        .then(dados => {
            setCategorias(dados.data);

            limparCampos();
        })
        
        .catch(err => console.error(err));
    }

    const salvar = (event) => {
        event.preventDefault();

        const categoria = {
            nome : this.state.nome,
            urlImagem : this.state.urlImagem
        }

          let filmeId = this.state.id;
          
          let method = (id === 0 ? 'POST' : 'PUT');
          let urlRequest = (id === 0 ? `${url}/categorias` : `${url}/categorias/${id}`);

          fetch(urlRequest, {
            method : method,
            body : JSON.stringify(categoria),
            headers : {
              'content-type' : 'application/json',
              'authorization' : 'Bearer ' + localStorage.getItem('token-nyous')
            }
          })
          .then(response => response.json)
          .then(dado => {
            alert("Nova categoria salva");
        
            listar();
          })
          .catch(err => console.error(err));
    }

    const limparCampos = () =>{
        setId(0);
        setNome('');
        setUrlImagem('');
    }

    const uploadFile = (event) => {
        event.preventDefault();

        let formdata = new FormData();

        formdata.append('arquivo', event.target.files[0]);

        fetch(`${url}/upload`,{
            method : 'POST',
            body : formdata,
        })
        .then(response => response.json)
        .then(data => {
            setUrlImagem(data.url);
        })
        .catch(err => console.erros(err))
    }

    return(
        <div>
            <Menu />
                <Container>
                    <Titulo titulo="Categorias" chamada="Gerencie as categorias" />  
                <Card>
                    <Card.Body>
                    <Form onSubmit={ event => salvar(event)}>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" value={nome} onChange={ event => setNome(event.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formNome">
                            <Form.File id="fileCategoria"  label="Imagem da categoria" onChange={event => uploadFile(event)} />
                            { urlImagem && <img src={urlImagem} style={{ width : '120px'}} />}
                        </Form.Group>
                        <Button type="submit">Salvar</Button>
                    </Form>
                    </Card.Body>
                </Card>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           categorias.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td><img src={item.urlImagem} style={{ width : '120px'}} /></td>
                                        <td>{item.nome}</td>
                                        <td>
                                            <Button type="button" variant="warning" value={item.id} onClick={ event => editar(event)} >Editar</Button>
                                            <Button type="button" variant="danger" value={item.id} style={{ marginLeft : '10px'}} onClick={ event => remover(event)} >Excluir</Button> 
                                        </td>
                                    </tr>
                                )
                           })
                       }
                    </tbody>
                    </Table>
                </Container>
            <Rodape />  
        </div>
    )
}

export default CrudCategorias;