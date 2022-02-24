import React from 'react';
import "./Tabla.css"
import Row from './Row';

export default function Tabla() {
    const fila=[
        {
            titulo:"Avengers",
            duracion: 350,
            rating:8,
            genero:["accion","ficcion"],
            premios:9
        },
        {
            titulo:"duro de matar",
            duracion: 270,
            rating:5,
            genero:["accion","romantico"],
            premios:3
        }
    ]

  return (
      <table>
          <tr>
              <th>Titulo</th>
              <th>Duracion</th>
              <th>Rating</th>
              <th>Genero</th>
              <th>Premios</th>
          </tr>
          <Row filas={fila}/>
      </table>
  );
}
