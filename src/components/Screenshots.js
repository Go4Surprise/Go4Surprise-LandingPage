import React from "react";

function Screenshots() {
  return (
    <section id="screenshots" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-text">
          <div className="section-text__title">Nuestro Diseño</div>
          <div className="section-text__body">
            Go4Surprise ofrece una aplicación con un diseño moderno y sencillo de usar.  Este sigue las modas actuales de la industria haciendose intuitivo a la hora de usarse.
          </div>
        </div>
        <div className="section-carousel">
          <div className="section-carousel__images">
            <div className="section-carousel__image">
              <img src="./images/App1.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App2.webp" alt="app screenshot" />
            </div>
            <div className="section-carousel__image">
              <img src="./images/App3.webp" alt="app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
