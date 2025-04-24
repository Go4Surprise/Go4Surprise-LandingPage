import React from "react";

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle">Sobre Nuestra Aplicación</div>
          <div className="section-text__title-big">
            Go4Surprise, Diversión por sorpresa
          </div>
          <div className="section-text__body">
            En Go4Surprise eligiendo una fecha, ciudad y tipo de evento, serás capaz de asistir a un evento totalmente sorpresa.
          </div>
          <div className="section-text__body">
            Estas entradas además gozarán de un precio reducido, en comparación con las vendidas por la competencia para el mismo evento.
          </div>
          <a href="https://s3-go4-frontend-dot-ispp-2425-g10.ew.r.appspot.com/" className="download-btn">
            Encuéntranos
          </a>
        </div>

        <div className="section-image">
          <img src="./images/hero_right.webp" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
