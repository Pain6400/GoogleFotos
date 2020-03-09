import React from 'react';
import RedendisarImagenes from './RenderisarImagenes';

function ListaImagenes (props) {
    const imagenes = props.listaImagenes;
    console.log(imagenes);
    
    return (
        <div>
            {
                imagenes.map(
                    (imagen,index)=><RedendisarImagenes key={index} valor={imagen} indice={index+1} />
                )
            }
        </div>
    );
}

export default ListaImagenes;