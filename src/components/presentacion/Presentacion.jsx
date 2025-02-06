import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Presentacion = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  
  const fullText = '¡Hola mundo!/>';
  const email = "carlossantana331@gmail.com";
  const typingSpeed = 150;
  const pauseDuration = 2000;
  
  useEffect(() => {
    let timeout;
    
    const startTyping = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(typeNextChar, typingSpeed);
        } else {
          // Cuando termine de escribir, espera y reinicia
          timeout = setTimeout(() => {
            setText('');
            timeout = setTimeout(startTyping, typingSpeed);
          }, pauseDuration);
        }
      };
      
      typeNextChar();
    };

    // Iniciar la primera animación
    startTyping();
    
    // Limpiar los timeouts cuando el componente se desmonte
    return () => clearTimeout(timeout);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error("Error al copiar: ", err));
  };

  return (
    <div className="presentacionContainer">
      <div className="presentacionTextContainer">
        <p className="presentacionText">
          <span className="presentacionName">&lt;{text}</span> <br /><br />
          Soy un apasionado del desarrollo web. Me encanta
          trabajar con <span style={{ fontWeight: "bold", color: "rgb(0, 213, 255)" }}>JavaScript, React, CSS</span> y más para crear experiencias
          digitales increíbles. Busco mi primera oportunidad laboral en el sector
          y estoy listo para aprender, aportar y seguir mejorando.
        </p>

        <div className="presentacionBtns">
          <a className="linkedin" href="https://www.linkedin.com/in/carlos-ignacio-santana-ruiz/" target="_blank">
            <FaLinkedin />
          </a>
          <a className="github" href="https://github.com/Carlossantana331/" target="_blank">
            <FaGithubSquare />
          </a>
          <a className="cv" href="cv">
            <GrDocumentDownload className="cvIcon" />CV
          </a>
          <div>
            <button onClick={copyToClipboard} className="email">
            {copied ? <span style={{ color: "white", fontSize: "14px" }}>¡Copiado!</span> : <><MdOutlineMailOutline style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>{email}</span></>}
            </button>
          </div>
        </div>
      </div>

      <div className="presentacionPhotoContainer">
        <img className="presentacionPhoto" src="./img/photo.png" alt="Foto de perfil" />
        <h1 className="presentacionPhotoName">Carlos Santana - Desarrollador Web</h1>
        <div className="presentacionLocation">
          <IoLocationOutline className="presentacionLocationIcon" />
          <span>Jalisco, México</span>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;