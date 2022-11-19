import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      setData(res.data.users);
      console.log(data)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Esto una prueba</h1>

        <ul>
          {data.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
