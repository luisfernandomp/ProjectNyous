import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './home.css';
import {Carousel, Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap';

const Home = () => {
    return(
         <div>
            <Menu />
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{
                        'max-height' : '380px',
                        'object-fit' : 'cover',
                        'width' : 'auto',
                        'height': 'auto'
                    }}
                    className="d-block w-100"
                    src="https://www.revistaebs.com.br/wp-content/uploads/2020/03/principais-eventos-de-e-commerce-do-ano.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Os melhores eventos estão aqui</h3>
                    <p>Nyous sua plataforma de eventos online.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{
                        'max-height' : '380px',
                        'object-fit' : 'cover',
                        'width' : 'auto',
                        'height': 'auto'
                    }}
                    className="d-block w-100"
                    src="https://www.mundodomarketing.com.br/images/editoriais/artigo-evento.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Os melhores eventos estão aqui</h3>
                    <p>Nyous sua plataforma de eventos online.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{
                        'max-height' : '380px',
                        'object-fit' : 'cover',
                        'width' : 'auto',
                        'height': 'auto',
                    }}
                    className="d-block w-100"
                    src="https://www.mundodomarketing.com.br/images/editoriais/artigo-evento.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Os melhores eventos estão aqui</h3>
                    <p>Nyous sua plataforma de eventos online.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Jumbotron className="text-center">
                <h1>Diversos eventos em um único local</h1>
                <p>
                    Encontre eventos nos mais diversos segmentos de forma rápida.
                </p>
                <p>
                    <Button className="btn btn-danger" variant="primary" href="/login">Login</Button><Button variant="primary" style={{ 'margin-left': '20px', 'background-color' : 'green'}} href="/cadastro">Cadastre-se</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.even3.com.br/4gJZhhAwvtO8mdoQbmXrWCibtUk=/smart/filters:format(png)/blog.even3.com.br/wp-content/uploads/2019/09/programacao-de-eventos-como-montar-da-melhor-forma-possivel.png" />
                            <Card.Body>
                                <Card.Title>Melhores Eventos de Design</Card.Title>
                                <Card.Text>
                                Só aqui na Nyous você encontra os melhores eventos com as melhores ofertas em ingressos.
                                </Card.Text>
                                <Button variant="primary">Saber mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.even3.com.br/4gJZhhAwvtO8mdoQbmXrWCibtUk=/smart/filters:format(png)/blog.even3.com.br/wp-content/uploads/2019/09/programacao-de-eventos-como-montar-da-melhor-forma-possivel.png" />
                            <Card.Body>
                                <Card.Title>Melhores Eventos de Tecnologia</Card.Title>
                                <Card.Text>
                                Só aqui na Nyous você encontra os melhores eventos com as melhores ofertas em ingressos.
                                </Card.Text>
                                <Button variant="primary">Saber mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.even3.com.br/4gJZhhAwvtO8mdoQbmXrWCibtUk=/smart/filters:format(png)/blog.even3.com.br/wp-content/uploads/2019/09/programacao-de-eventos-como-montar-da-melhor-forma-possivel.png" />
                            <Card.Body>
                                <Card.Title>Melhores Eventos de Gastronomia</Card.Title>
                                <Card.Text>
                                Só aqui na Nyous você encontra os melhores eventos com as melhores ofertas em ingressos.
                                </Card.Text>
                                <Button variant="primary">Saber mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
            <Rodape />
         </div>
    )

}

export default Home;