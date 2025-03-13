import React from "react";

function Download() {
  return (
    <section id="download">
      <div className="container">
        <div className="section-text">
          <div className="section-text__title text-white">
            Encuéntranos
          </div>
          <div className="section-text__body text-white">
            Próximamente en App Store y Play Store.
          </div>
          <a href="#download" className="download-btn__img">
            <img src="./images/app_btn1.webp" alt="app store" />
          </a>
          <a href="#download" className="download-btn__img">
            <img src="./images/app_btn2.webp" alt="google play store" />
          </a>
        </div>
        <div className="section-image">
          <img src="./images/available-app.webp" alt="download" />
        </div>
      </div>
    </section>
  );
}

export default Download;
