import React from 'react'

const galleryImage = [
    {
      id: 1,
      image: "images/img2.jpg",
    },
    {
      id: 2,
      image: "images/img3.jpg",
    },
    {
      id: 3,
      image: "images/img4.jpg",
    },
    {
      id: 4,
      image: "images/img5.jpg",
    },
    {
      id: 5,
      image: "images/img6.jpg",
    },
    {
      id: 6,
      image: "images/img7.jpg",
    },
    {
      id: 7,
      image: "images/img8.jpg",
    },
    {
      id: 8,
      image: "images/img9.jpg",
    },
    {
      id: 9,
      image: "images/img10.jpg",
    },
    {
      id: 10,
      image: "images/img11.jpg",
    },
    {
      id: 11,
      image: "images/img12.jpg",
    },
    {
      id: 12,
      image: "images/img13.jpg",
    },
    {
      id: 13,
      image: "images/img14.jpg",
    },
    {
      id: 14,
      image: "images/img15.jpg",
    },
    {
      id: 15,
      image: "images/img16.jpg",
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
