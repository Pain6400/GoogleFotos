import React from 'react';
import './App.css';
import Album from './Componentes/Album';
import Imagenes from './Componentes/Imagenes';
import ListaImagenes from './Componentes/ListaImagenes';


class App extends React.Component {
  constructor(props) {
    super(props);
    const listaImagenes = [
      {name: 'imagen1', album:'1', link: 'https://concepto.de/wp-content/uploads/2019/12/paisaje-rural-e1576119288479.jpg'},
    ];
    this.state = {
      imagenes: listaImagenes
    };
    this.guardarImagen = this.guardarImagen.bind(this);
  }

  guardarImagen(imagen){
    this.setState({imagenes: [...this.state.imagenes, imagen]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <Imagenes guardar={this.guardarImagen} />
              <ListaImagenes listaImagenes={this.state.imagenes} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
