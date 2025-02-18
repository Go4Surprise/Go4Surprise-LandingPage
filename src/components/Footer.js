import React from "react";
import "../assets/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Go4Surprise</div>
            <div className="footer-text__body">
              Esta aplicación pretende ser lanzada en verano del 2025 coincidiendo con el final del curso escolar.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#features">Caracteristicas</a>
              </li>
              <li>
                <a href="#screenshots">Nuestro Diseño</a>
              </li>
              <li>
                <a href="#download">Encuentranos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
