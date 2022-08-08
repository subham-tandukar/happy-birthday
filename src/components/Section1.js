import React from "react";

const Section1 = () => {
  return (
    <>
      <section className="section1 uk-container uk-overflow-hidden">
        <div
          className="uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center uk-margin-medium-top uk-grid"
          uk-scrollspy="cls: uk-animation-slide-bottom; target: .animate; delay: 300; repeat: true"
          uk-lightbox="animation: scale"
        >
          <div className="animate">
            <div className="section1-img">
              <a href="images/img5.jpg">
                <img src="images/img5.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="animate" uk-scrollspy-class="uk-animation-slide-top">
            <div className="section1-img">
              <a href="images/img4.jpg">
                <img src="images/img4.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="animate">
            <div className="section1-img">
              <a href="images/img6.jpg">
                <img src="images/img6.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="animate">
            <div className="section1-img">
              <a href="images/img7.jpg">
                <img src="images/img7.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="animate" uk-scrollspy-class="uk-animation-slide-top">
            <div className="section1-img">
              <a href="images/img8.jpg">
                <img src="images/img8.jpg" alt="image" />
              </a>
            </div>
          </div>
          <div className="animate">
            <div className="section1-img">
              <a href="images/img9.jpg">
                <img src="images/img9.jpg" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
