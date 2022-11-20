import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function Table({parentToChild}) {
  return (
    <MDBTable >
      <MDBTableHead dark>
        <tr>
          <th scope='col'width="15%">Entidad Estatal</th>
          <th scope='col'>Nivel de Entidad</th>
          <th scope='col'width="30%">Descripción</th>
          <th scope='col'>Fecha de publicación</th>
          <th scope='col'>Valor del contrato</th> 
          <th scope='col'>Tipo de contrato</th> 
          <th scope='col'>Estado del proceso</th>
          <th scope='col'> </th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>

          {parentToChild.map((item, i) => (
            <tr>
            <td key={i}>{item["Nombre.de.la.Entidad"]}</td>
            <td key={i}>{item["Nivel.Entidad"]}</td>
            <td key={i}>{item["Objeto.a.Contratar"]}</td>
            <td key={i}>{item["Fecha.de.Firma.del.Contrato"]}</td>
            <td key={i}>{item["Valor.Contrato"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} COP</td>
            <td key={i}>{item["Tipo.de.Contrato"]}</td>
            <td key={i}>{item["Estado.del.Proceso"]}</td>
            <td key={i}><a href={item["URL.Contrato"]}>Detalle</a></td>
            </tr>
          ))}

</MDBTableBody>
      
    </MDBTable>
  );
}