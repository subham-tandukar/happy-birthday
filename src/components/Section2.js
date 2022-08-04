import React from "react";

const Section2 = () => {
  return (
    <>
      <div className="section2 uk-overflow-hidden">
        <div className="uk-container">
          <div className="uk-child-width-1-3@s uk-flex uk-flex-middle uk-padding uk-padding-remove-horizontal uk-padding-remove-top uk-grid">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 90%;">
              <img
                src="images/img1.jpg"
                alt="image"
                uk-scrollspy="cls: uk-animation-kenburns; repeat: false"
              />
            </div>

            <div
              className="uk-text-center"
              uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 90%;"
            >
              <p>
                <span>Enjoy</span> <br /> Your Day 👍
              </p>
            </div>

            <div uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 90%;">
              <img
                src="images/img1.jpg"
                alt="image"
                className="uk-animation-reverse uk-transform-origin-top-right"
                uk-scrollspy="cls: uk-animation-kenburns; repeat: false"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
