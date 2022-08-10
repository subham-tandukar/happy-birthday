import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="uk-inline uk-width-1">
          <img src="images/img1.jpg" alt="" />
          <div className="uk-overlay-primary uk-position-cover"></div>
          <div className="uk-overlay text uk-light">
            <h1>
              Shoutout To Your Mom And Dad <br /> For Making You 🔊
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
