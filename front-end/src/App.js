import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ users: [] });

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      setData(res.data.users);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Esto una prueba</h1>

        <ul>
          {data.map((item) => (
            <li key={item.objectID}></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
