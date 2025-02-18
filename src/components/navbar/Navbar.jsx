import React, { useEffect } from 'react';
import './navbar.css';

function Navbar() {
  useEffect(() => {
    // Función para manejar el cambio de color del navbar al hacer scroll
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // Función para resaltar el enlace activo según la sección visible
    const handleActiveLink = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".navbar-list a");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 500) {
          // Ajusta el valor `-100` según la altura del navbar
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    };

    // Agregar event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveLink);

    // Limpieza de event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []);

  return (
    <div className="navbar">
      <ul className='navbar-list'>
        <li><a href="#inicio" className="navbar-link active">Inicio</a></li>
        <li><a href="#sobremi" className='navbar-link'>Sobre mí</a></li>
        <li><a href="#proyectos" className='navbar-link'>Proyectos</a></li>
        <li><a href="#educacion" className='navbar-link'>Educación</a></li>
      </ul>
    </div>
  );
}

export default Navbar;