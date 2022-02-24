import React from 'react';

export default function Row(props) {
  return (
      <>
          { props.filas ? props.filas.map(fila=>
            <tr>
                <td>{fila.titulo}</td>
                <td>{fila.duracion}</td>
                <td>{fila.rating}</td>
                <td>{fila.genero.map(genero=>
                    <li>{genero}</li>
                    )}</td>
                <td>{fila.premios}</td>
            </tr>
          ) : <p>No hay filas</p>}
      </>
      
  );
}
