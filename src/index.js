import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import Naoencontrado from './pages/naoencontrado';
import Dashboard from './pages/admin/dashboard';
import CrudEventos from './pages/admin/crudeventos';
import CrudCategorias from './pages/admin/crudcategorias';
import jwt_decode from 'jwt-decode';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

const RotaPrivada = ({component : Component, ...rest }) => (
  <Route 
    {...rest}
    render = {
      props => 
        localStorage.getItem('token-nyous') === null ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state : {from : props.location}}} />
    }
  />
); 

const RotaPrivadaAdmin = ({component : Component, ...rest }) => (

  <Route 
    {...rest}
    render = {
      props => 
        localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role !== 'Admin' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state : {from : props.location}}} /> 
    }
  />
);

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cadastrar' component={Cadastrar} />
      <RotaPrivada exact path='/eventos' component={Eventos} />
      <RotaPrivadaAdmin exact path='/admin/dashboard' component={Dashboard} />
      <RotaPrivadaAdmin exact path='/admin/categorias' component={CrudCategorias} />
      <RotaPrivadaAdmin exact path='/admin/eventos' component={CrudEventos} />   
      <Route component={Naoencontrado} />
    </Switch>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
