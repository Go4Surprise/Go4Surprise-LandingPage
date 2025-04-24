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
            Algunas de nuestras características
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Elección de fecha y lugar</div>
              <div className="section-text__body">
                Podrás acomodar la fecha y lugar del evento a tus necesidades.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Pistas a las 48 horas</div>
              <div className="section-text__body">
                48 horas antes recibirás una pista de tu evento, siendo este revelado 24 horas antes de su comienzo.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Revelación 24h antes</div>
              <div className="section-text__body">
                24 horas antes de tu evento recibirás un correo con los detalles de la experiencia que te toca disfrutar.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Presume tus experiencias</div>
              <div className="section-text__body">
                Podrás compartir fotos y reseñas de todos los eventos realizados en la aplicación.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
