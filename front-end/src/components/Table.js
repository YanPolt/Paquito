import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table({ parentToChild }) {
  return (
    <MDBTable stripped borded hover className="table-align-middle">
      <MDBTableHead dark>
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
            <td>{item["Nombre.de.la.Entidad"]}</td>
            <td>{item["Nivel.Entidad"]}</td>
            <td>{item["Objeto.a.Contratar"]}</td>
            <td>{item["Fecha.de.Firma.del.Contrato"]}</td>
            <td>
              {item["Valor.Contrato"]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              COP
            </td>
            <td>{item["Tipo.de.Contrato"]}</td>
            <td>{item["Estado.del.Proceso"]}</td>
            <td>
              <a href={item["URL.Contrato"]} target="_blank">Detalle</a>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
