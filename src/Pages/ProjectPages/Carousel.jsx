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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Carousel = ({ project }) => {
  // console.log(project);

  return (
    <Swiper
      navigation
      lazyPreloadPrevNext={true}
      // pagination={{ clickable: true }}
      // effect={"creative"}
      // creativeEffect={{
      //   prev: {
      //     shadow: true,
      //     translate: ["-120%", 0, -500],
      //   },
      //   next: {
      //     shadow: true,
      //     translate: ["120%", 0, -500],
      //   },
      // }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
      spaceBetween={30}>
      {project.urlImg.map(i => {
        return (
          <SwiperSlide>
            <div className="flex items-center justify-center h-full">
              <img
                src={i}
                alt={`picture of ${project.title}`}
                loading="lazy"
                className="object-center h-full object-contain aspect-[4/3]"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
