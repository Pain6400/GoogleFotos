import React from 'react';

function handleClick() {
    alert('Hola')
  }

function RerendisarImagenes(props){
    const imagen = props.valor;
    const retorno = (
        <img 
            src={imagen.link} 
            alt="..." 
            class="img-thumbnail" 
            style={{width: 300, height: 300}}
            onClick={handleClick}
            ></img>
    );
    return retorno;
}



export default RerendisarImagenes;