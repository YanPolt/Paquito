import "./App.css";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    info: '',
  });


    const handleInputChange = (event) => {
      setInfo({
          ...info,
          [event.target.id] : event.target.value,
      })
      console.log(info)
  }
  const enviarDatos = (event) => {
      console.log(info);
      event.preventDefault();
      findContract(info);
  }

  async function findContract(info) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(info)
    axios.post("http://localhost:8000/find", JSON.stringify({ texts: [info] }), { headers }).then((res) => {
      setData(JSON.parse(res.data));
      console.log(data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <h1 className="text-center font-weight-bold mt-3">Motor de busqueda mejorado para Secop II</h1>
      <h3 className="text-center">Permite aplicar filtros y realizar busquedas generalizadas</h3>
      <Form onSubmit={enviarDatos}>
        <InputGroup className="find mt-4">
          <Form.Control type="text" placeholder="Buscar un contrato" id="info" onChange={handleInputChange}></Form.Control>
          <div className="input-group-append">
            <Button className="customButton" variant="light" type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
          </div>
        </InputGroup>
      </Form>
      <ul>
          {data?.map((item, i) => (
            <li key={i}>{item["Nombre.de.la.Entidad"]}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
