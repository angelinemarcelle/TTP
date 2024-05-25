import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Slide1 from "../../image/About_Us/Slide1.jpg"
import Slide2 from "../../image/About_Us/Slide2.jpg"

const ImageSlider = () => {
  return (
      <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={Slide1}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={Slide2}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  )
}

export default ImageSlider