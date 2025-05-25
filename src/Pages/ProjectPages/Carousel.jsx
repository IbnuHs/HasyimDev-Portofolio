import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import {
  Scrollbar,
  Pagination,
  Navigation,
  A11y,
  EffectCreative,
} from "swiper/modules";
import thumbnailtemplate from "../../assets/projectbasepict.svg";

export const Carousel = ({ project }) => {
  // console.log(project);

  return (
    <Swiper
      navigation
      lazyPreloadPrevNext={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
      spaceBetween={30}>
      {project.urlImg ? (
        project.urlImg.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <img
                src={imgUrl}
                alt={`picture of ${project.title}`}
                loading="lazy"
                className="object-center h-full object-contain aspect-[4/3]"
              />
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div className="flex items-center justify-center h-full bg-gray-300 rounded-md">
            <img
              src={thumbnailtemplate}
              alt={`default picture for ${project.title}`}
              loading="lazy"
              className="object-center h-full object-contain aspect-[4/3]"
            />
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
