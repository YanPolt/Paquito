import "./App.css";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const info = JSON.stringify({ texts: [{ info: "icbf bukaramanja" }] });
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    axios.post("http://localhost:8000/find", info, { headers }).then((res) => {
      setData(JSON.parse(res.data));
      console.log(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item["Nombre.de.la.Entidad"]}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
