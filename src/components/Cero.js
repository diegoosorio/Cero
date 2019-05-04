import React from 'react';
import * as moment from 'moment';
import 'moment/locale/es';
import './styles/Cero.css';
const butterfly = require('../images/butterfly.svg');
// import butterfly from '../images/butterfly.svg';

//const hoy = moment().format('LLL');

class Cero extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      hoy: "",
      ultimoAccidente: "",
      dias: "",
      data: [
        {
          fecha: '01/01/2018',
          descripcion: 'accidente'
        },
        {
          fecha: '01/05/2019',
          descripcion: 'accidente'
        }
      ]
      
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => { 
      this.setState({
        hoy: moment().format('LL, h:mm:ss a')
      })
    }, 1000);
    
    const n = this.state.data.length;
    const ultimoAccidente = this.state.data[n-1].fecha
    const hoy = moment(moment(),"DD/MM/YYYY");
    const ultimo = moment(ultimoAccidente, "DD/MM/YYYY")
    this.setState({
      dias: hoy.diff(ultimo, 'days'),
      ultimoAccidente
    })

  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.intervalId);
  }

  render(){
    return(
      <div className="Cero__container">
        <div className="Cero">
          <div className="Cero__body">
            <div className="Cero__header">
              <time>{this.state.hoy}</time>
            </div>
            <div className="Cero__badge"><span>Ruta cero</span></div>
            <img src={butterfly} className="Cero__butterfly" alt=""/>
            <div className="Cero__section">
              <time>{this.state.dias}</time>
              <p>días sin accidentes</p>
              <small className="text-muted">Ultimo accidente <time>{this.state.ultimoAccidente}</time></small>
            </div>
            {/* <div className="Cero__footer">
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Cero;