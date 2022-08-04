import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

const section3 = [
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
];

const Section3 = () => {
  return (
    <>
      <section className="section3">
        <div className="uk-container">
          <Swiper
            className="mySwiper"
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              type: "progressbar",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            uk-scrollspy="cls: uk-animation-fade; target: .swiper-slide; delay: 300; repeat: false"
          >
            {section3.map((props) => {
              const { id, image } = props;
              return (
                <SwiperSlide key={id}>
                  <div className="section3-wrapper">
                    <div className="uk-position-relative" uk-lightbox="animation: scale">
                      <a href={image} className="section3-img">
                        <img src={image} alt="image" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Section3;
