import React, {Component} from 'react';
import './index.css';

class Titulo extends Component {
        render(){
            return(
                <div className='background'>
                    <h1>{this.props.texto || 'Titulo não informado'}</h1>
                    <h4>{this.props.descricao || 'Descricão não informada'}</h4>
                </div>
            )
        }
}

export default Titulo; 