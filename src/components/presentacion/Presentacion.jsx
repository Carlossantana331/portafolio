import React from "react";
import { useState } from "react";
import "./Presentacion.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

const presentacion = () => {

  const [copied, setCopied] = useState(false);
  const email = "carlossantana331@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Restablecer mensaje después de 2s
      })
      .catch(err => console.error("Error al copiar: ", err));
  };

  return (
    <div className="presentacionContainer">
      <div className="presentacionTextContainer">

        <p className="presentacionText">
          ¡Hola! Soy <span className="presentacionName">Carlos Santana</span>, un apasionado del desarrollo web. Me encanta
          trabajar con JavaScript, React, CSS y más para crear experiencias
          digitales increíbles. Busco mi primera oportunidad laboral en el sector
          y estoy listo para aprender, aportar y seguir mejorando.
        </p>

        <div className="presentacionBtns">
          <a className="linkedin" href="https://www.linkedin.com/in/carlos-ignacio-santana-ruiz/" target="_blank"><FaLinkedin /></a>
          <a className="github" href="https://github.com/Carlossantana331/" target="_blank"><FaGithubSquare /></a>
          <a className="cv" href="cv"><GrDocumentDownload className="cvIcon"/>CV</a>
          <div >
            <button onClick={copyToClipboard} className="email">
              {copied ? <span style={{ color: "green", fontSize: "14px" }}>¡Copiado!</span> : <><MdOutlineMailOutline style={{ fontSize: "18px"}}/> <span style={{ fontSize: "14px", height: "23px" }}>{email}</span></>}
            </button>
          </div>

        </div>

      </div>
      <div className="presentacionPhotoContainer">
        <img className="presentacionPhoto" src="./img/photo.png" alt="Foto de perfil" />

      </div>
    </div>
  );
}

export default presentacion;


