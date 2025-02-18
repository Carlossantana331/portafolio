import React from "react";
import "./Educacion.css";
import { IoMdDownload } from "react-icons/io";


function Educacion() {
  return (
    <section className="educacion-container" id="educacion">
      <h2>Educación y Certificaciones</h2>
      <div className="educacion-cards">

        <div className="educacion-card-licenciatura">
          <h3>Grado Universitario</h3>
          <div >
            <h4>Ingeniería en Nanotecnología</h4>
            <p>Universidad de Guadalajara</p>
            <p>2017-2021</p>
          </div>
        </div>

        <span className="educacion-line"></span>

        <div className="educacion-card-certificacion">
          <h3>Cursos y Certificaciónes</h3>

          <div className="educacion-card-container">
            <div className="educacion-card">
              <div className="educacion-card-info">
                <h4>Desarrollo Web</h4>
                <p>Coderhouse (2023)</p>
              </div>

              <div className="educacion-card-botones">
                <a className="educacion-card-ver" href="https://drive.google.com/uc?export=view&id=10u71-Kf1z0xqhb_ZNoJEOEbfTEGTd_ze" target="_blank" rel="noopener noreferrer">
                    Ver
                </a>
                <a className="educacion-card-descargar" href="https://drive.google.com/uc?export=download&id=10u71-Kf1z0xqhb_ZNoJEOEbfTEGTd_ze" target="_blank" rel="noopener noreferrer">
                  <IoMdDownload />
                </a>
              </div>
            </div>

            <div className="educacion-card">
              <div className="educacion-card-info">
                <h4>javascript</h4>
                <p>Coderhouse (2024)</p>
              </div>

              <div className="educacion-card-botones">
                <a className="educacion-card-ver" href="https://drive.google.com/uc?export=view&id=1eQE3WzsPV65lj0hUpS1kshg7fSEn2fEz" target="_blank" rel="noopener noreferrer">
                    Ver
                </a>
                <a className="educacion-card-descargar" href="https://drive.google.com/uc?export=download&id=1eQE3WzsPV65lj0hUpS1kshg7fSEn2fEz" target="_blank" rel="noopener noreferrer">
                  <IoMdDownload />
                </a>
              </div>

            </div>

            <div className="educacion-card">
              <div className="educacion-card-info">
                <h4>React</h4>
                <p>Coderhouse (2024)</p>
              </div>
              <div className="educacion-card-botones">
                <a className="educacion-card-ver" href="https://drive.google.com/uc?export=view&id=1ApGYtqUaT0SZf9tAAudVnERiIHFPdrNH" target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
                <a className="educacion-card-descargar" href="https://drive.google.com/uc?export=download&id=1ApGYtqUaT0SZf9tAAudVnERiIHFPdrNH" target="_blank" rel="noopener noreferrer">
                  <IoMdDownload />
                </a>
              </div>
            </div>

          </div>
        
        </div>

      </div>
    </section>
  );
}

export default Educacion;
