import React from "react";
import proyectos from "../../data/poyectos.json";
import "./ProyectoCard.css";
import tecnologiasLogos from  "../../data/tecnologiasLogos.js";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


function ProyectoCard() {
    return (
        <div className="proyecto-container">
            <h2 className="proyecto-title">Proyectos</h2>

            <div className="proyecto-card-container">
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="proyecto-card">
                        <h3 className="proyecto-name">{proyecto.titulo}</h3>
                        <div className="proyecto-card-hoover">
                            <div className="proyecto-image">
                                <img src={proyecto.imagen} alt={proyecto.titulo} />
                            </div>

                            <div className="proyecto-description">
                                <div className="proyecto-icon"></div>
                                <p className="proyecto-text">{proyecto.descripcion}</p>

                            </div>
                        </div>

                        <div className="proyecto-tecnologias-container">
                            {proyecto.tecnologias.map((tec ,index) => {
                                const Icono = tecnologiasLogos[tec];
                                return(
                                    <div key={index} className="tooltip">
                                        <span className={`proyecto-logo ${tec} `}>
                                            {Icono ? <Icono /> : tec}
                                        </span>
                                        <span className={`tooltiptext tooltip${tec}`}>{tec}</span>

                                    </div>
                                );
                            })}
                        </div>

                        <div className="proyecto-links">
                            <a className="tooltip proyecto-link-card" href={proyecto.repo} target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare />
                                <p className="tooltiptext tooltipGoogleDriveAPI">visitar repositorio</p>
                            </a>
                            
                            <a className="tooltip proyecto-link-card"href={proyecto.deploy} target="_blank" rel="noopener noreferrer">
                                <TbWorldWww />
                                <p className="tooltiptext tooltipGoogleDriveAPI">ver deploy</p>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProyectoCard;
