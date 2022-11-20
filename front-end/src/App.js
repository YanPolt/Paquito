import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Table from "./components/Table";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    info: "",
  });

  const [monto, setMonto] = useState({
    min: -1,
    max: -1,
  });

  const [fecha, setFecha] = useState({
    desde: -1,
    hasta: -1,
  });

  const { reset } = useForm();

  const handleInputChangeInfo = (event) => {
    setInfo({
      ...info,
      [event.target.id]: event.target.value,
    });
    console.log(info);
  };

  const handleInputChangeMonto = (event) => {
    setMonto({
      ...monto,
      [event.target.id]: event.target.value,
    });
    console.log(monto);
  };

  const handleInputChangeFecha = (event) => {
    console.log(event.target.value);
    setFecha({
      ...fecha,
      [event.target.id]: event.target.value,
    });
    console.log(fecha);
  };

  const enviarDatos = (event) => {
    console.log(info);
    event.preventDefault();
    findContract(info, monto, fecha);
  };

  const reiniciar = (event) => {
    setFecha({
      desde: -1,
      hasta: -1,
    });
    setMonto({
      min: -1,
      max: -1,
    });
  };

  async function findContract(info, monto, fecha) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:8000/find", JSON.stringify({ texts: [info] }), {
        headers,
      })
      .then((res) => {
        var datos = JSON.parse(res.data);
        console.log(datos);
        console.log("min", monto.min);
        console.log("max", monto.max);
        if (
          monto.min !== -1 &&
          monto.min !== "" &&
          monto.max !== -1 &&
          monto.max !== "" &&
          monto.min <= monto.max
        ) {
          datos = datos.filter(
            (item) =>
              item["Valor.Contrato"] <= monto.max &&
              item["Valor.Contrato"] >= monto.min
          );
        }
        console.log(datos);
        if (
          fecha.desde !== -1 &&
          fecha.hasta !== -1 &&
          fecha.desde !== "" &&
          fecha.hasta !== ""
        ) {
          var desde = Date.parse(fecha.desde);
          var hasta = Date.parse(fecha.hasta);
          if (desde <= hasta) {
            datos = datos.filter(
              (item) =>
                Date.parse(item["Fecha.de.Firma.del.Contrato"]) >= desde &&
                Date.parse(item["Fecha.de.Firma.del.Contrato"]) <= hasta
            );
          }
        }
        console.log(datos);
        setData(datos);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1 className="text-center font-weight-bold mt-3">
          Motor de busqueda mejorado para Secop II
        </h1>
        <h3 className="text-center">
          Permite aplicar filtros y realizar busquedas generalizadas
        </h3>
        <InputGroup className="d-flex align-items-center justify-content-center">
          <Form onSubmit={enviarDatos} className="drop">
            <InputGroup className="find mt-4 mb-4">
              <Form.Control
                type="text"
                placeholder="Buscar un contrato"
                id="info"
                name="info"
                onChange={handleInputChangeInfo}
              ></Form.Control>
              <div className="input-group-append">
                <Button
                  className="customButtonSearch"
                  variant="light"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </Button>
              </div>
            </InputGroup>
          </Form>
          <Form onSubmit={enviarDatos}>
            <Dropdown>
              <Dropdown.Toggle className="customButton" variant="info">
                Añadir Filtros{" "}
                <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu className="col-md-6">
                <Accordion alwaysOpen className="mb-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Monto</Accordion.Header>
                    <Accordion.Body>
                      <InputGroup>
                        <div className="col">
                          <h6>Mínimo:</h6>
                          <Form.Control
                            type="number"
                            placeholder="Mín"
                            id="min"
                            onChange={handleInputChangeMonto}
                            className="mr-2"
                          ></Form.Control>
                        </div>
                        <div className="col">
                          <h6>Máximo:</h6>
                          <Form.Control
                            type="number"
                            placeholder="Máx"
                            id="max"
                            onChange={handleInputChangeMonto}
                          ></Form.Control>
                        </div>
                      </InputGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Fechas</Accordion.Header>
                    <Accordion.Body>
                      <InputGroup>
                        <div className="col">
                          <h6>Desde:</h6>
                          <Form.Control
                            type="date"
                            placeholder="Desde"
                            id="desde"
                            className="mr-2"
                            onChange={handleInputChangeFecha}
                          ></Form.Control>
                        </div>
                        <div className="col">
                          <h6>Hasta:</h6>
                          <Form.Control
                            type="date"
                            placeholder="Hasta"
                            id="hasta"
                            onChange={handleInputChangeFecha}
                          ></Form.Control>
                        </div>
                      </InputGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="row justify-content-center">
                  <Button
                    className="col-4 customButton"
                    variant="info"
                    type="submit"
                  >
                    Filtrar
                  </Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </InputGroup>

        <Table parentToChild={data} />
      </header>
    </div>
  );
}

export default App;
