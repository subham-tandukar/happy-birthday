import React from 'react'

const galleryImage = [
    {
      id: 1,
      image: "images/img1.jpg",
    },
    {
      id: 2,
      image: "images/img1.jpg",
    },
    {
      id: 3,
      image: "images/img1.jpg",
    },
    {
      id: 4,
      image: "images/img1.jpg",
    },
    {
      id: 5,
      image: "images/img1.jpg",
    },
    {
      id: 6,
      image: "images/img1.jpg",
    },
    {
      id: 7,
      image: "images/img1.jpg",
    },
    {
      id: 8,
      image: "images/img1.jpg",
    },
    {
      id: 9,
      image: "images/img1.jpg",
    },
    {
      id: 10,
      image: "images/img1.jpg",
    },
    {
      id: 11,
      image: "images/img1.jpg",
    },
    {
      id: 12,
      image: "images/img1.jpg",
    },
    {
      id: 13,
      image: "images/img1.jpg",
    },
    {
      id: 14,
      image: "images/img1.jpg",
    },
    {
      id: 15,
      image: "images/img1.jpg",
    },
    {
      id: 16,
      image: "images/img1.jpg",
    },
  ];

const Section4 = () => {
  return (
    <>
      <div className="section4 uk-container uk-section">
        <div className="gallery-bg" uk-lightbox="animation: scale">
          {galleryImage.map((props) => {
            const { id, image } = props;
            return (
              <div className="gallery" key={id}>
                <a className="uk-inline" href={image}>
                  <img
                    src={image}
                    width="1800"
                    height="1200"
                    alt="gallery image"
                  />
                  <p>
                    View image <span uk-icon="icon: image"></span>
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Section4
