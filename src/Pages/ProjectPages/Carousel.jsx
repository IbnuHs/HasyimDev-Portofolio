import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Scrollbar, Pagination, Navigation, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Carousel = ({ project }) => {
  console.log(project);

  return (
    <Swiper
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      spaceBetween={50}>
      {project.urlImg.map(i => {
        return (
          <SwiperSlide>
            <div className="flex items-center justify-center h-full aspect-square">
              <img
                src={i}
                alt=""
                className="object-center h-full object-contain"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
