import React from 'react';

function RerendisarImagenes(props){
    const imagen = props.valor;
    const retorno = (
        <img src={imagen.link} alt="..." class="img-thumbnail" style={{width: 300, height: 300}}></img>
    );
    return retorno;
}



export default RerendisarImagenes;