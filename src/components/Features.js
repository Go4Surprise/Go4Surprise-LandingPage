import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="section-image__small">
          <img src="./images/best-features.webp" alt="features" />
        </div>
        <div className="section-text">
          <div className="section-text__title">
            Algunas de nuestras caracteristicas
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Elección de fecha y lugar</div>
              <div className="section-text__body">
                Podras acomodar la fecha y lugar del evento a tus necesidades
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Pistas a las 48h</div>
              <div className="section-text__body">
                48 horas antes reciviras una pista de tu evento, siendo este revelado 24 horas antes de su comienzo
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Compra sin sorpresas</div>
              <div className="section-text__body">
                Si eres de los que no les gustan las sorpresas, también disponemos de un servicio de compra tradicional a precios reducidos
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Presume de tus experiencias</div>
              <div className="section-text__body">
                Podras compartir fotos y reseñas de todos los eventos realizados en la aplicación.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
