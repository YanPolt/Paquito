import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

export default function Table({ parentToChild }) {

  const [t, i18n] = useTranslation("global");

  return (
    <MDBTable stripped borded hover className="table-align-middle">
      <MDBTableHead className="head-table">
        <tr>
          <th className="align-middle" scope="col">
            {t("header.StateEntity")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.EntityLevel")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.Description")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.Publicationdate")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.contractvalue")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.Typeofcontract")}
          </th>
          <th className="align-middle" scope="col">
            {t("header.Stateoftheprocess")}
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
              <a href={item["URL.Contrato"]} target="_blank" rel="noreferrer">
              {t("header.detalle")}
              </a>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
