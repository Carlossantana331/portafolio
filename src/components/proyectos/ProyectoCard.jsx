import React from "react";
import proyectos from "../../data/poyectos.json";

function ProyectoCard() {
    return (
        <div>
            {proyectos.map((proyecto, index) => (
                <div key={index} className="proyecto-card">
                    <img src={proyecto.imagen} alt={proyecto.titulo} />
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.descripcion}</p>
                    <p>
                        <strong>Tecnologías:</strong> {proyecto.tecnologias.join(", ")}
                    </p>
                    <a href={proyecto.repo} target="_blank" rel="noopener noreferrer">
                        Ver código
                    </a>
                    <a href={proyecto.deploy} target="_blank" rel="noopener noreferrer">
                        Ver demo
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ProyectoCard;
