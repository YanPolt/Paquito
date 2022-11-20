import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table({ parentToChild }) {
  return (
    <MDBTable className="table-align-middle">
      <MDBTableHead className="head-table">
        <tr>
          <th className="align-middle" scope="col">
            Entidad Estatal
          </th>
          <th className="align-middle" scope="col">
            Nivel de Entidad
          </th>
          <th className="align-middle" scope="col">
            Descripción
          </th>
          <th className="align-middle" scope="col">
            Fecha de publicación
          </th>
          <th className="align-middle" scope="col">
            Valor del contrato
          </th>
          <th className="align-middle" scope="col">
            Tipo de contrato
          </th>
          <th className="align-middle" scope="col">
            Estado del proceso
          </th>
          <th className="align-middle" scope="col">
            {" "}
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {parentToChild.map((item, i) => (
          <tr>
            <td key={i}>{item["Nombre.de.la.Entidad"]}</td>
            <td key={i}>{item["Nivel.Entidad"]}</td>
            <td key={i}>{item["Objeto.a.Contratar"]}</td>
            <td key={i}>{item["Fecha.de.Firma.del.Contrato"]}</td>
            <td key={i}>
              {item["Valor.Contrato"]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              COP
            </td>
            <td key={i}>{item["Tipo.de.Contrato"]}</td>
            <td key={i}>{item["Estado.del.Proceso"]}</td>
            <td key={i}>
              <a href={item["URL.Contrato"]} target="_blank">
                Detalle
              </a>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
