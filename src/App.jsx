import React, { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre && apellido && dni && email) {
      // Enviar los datos
      alert("Datos enviados");
    } else {
      alert("Completar todos los datos");
    }
  };

  return (
    
    <article className="centrar">
      <h1 className="titulo">Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />

        <label>Apellido</label>
        <input type="text" value={apellido} onChange={handleApellidoChange} />

        <label>DNI</label>
        <input type="text" value={dni} onChange={handleDniChange} />

        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <button type="submit">Enviar</button>
      </form>
    </article>
  );
}

export default App;
