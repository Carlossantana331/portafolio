import React from "react";
import "./Educacion.css";


function Educacion() {
  return (
    <div className="educacion-container">
      <h2>Educación y Certificaciones</h2>
      <div className="educacion-cards">

        <div className="educacion-card-licenciatura">
          <h3>Grado Universitario</h3>
          <div className="educacion-card">
            <h4>Ingeniería en Nanotecnología</h4>
            <p>Universidad de Guadalajara</p>
            <p>2017-2021</p>
          </div>
        </div>

        <span className="educacion-line"></span>

        <div className="educacion-card-certificacion">
          <h3>Cursos y Certificaciónes</h3>
        
          <div className="educacion-card">
            <h4>Desarrollo Web</h4>
            <p>Coderhouse (2023)</p>
          </div>

          <div className="educacion-card">
            <h4>javascript</h4>
            <p>Coderhouse (2024)</p>
          </div>

          <div className="educacion-card">
            <h4>React</h4>
            <p>Coderhouse (2024)</p>
          </div>
        </div>

        <div className="educacion-card"></div>
      </div>
    </div>
  );
}

export default Educacion;
