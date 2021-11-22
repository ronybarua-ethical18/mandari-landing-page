import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselImage,
  TestimonialContainer,
  Feedback,
  Name,
  Title,
} from "./TestiomonialCarouselStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../../dummyData";
const TestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 2000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    // customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    // removeArrowOnDeviceType:["tablet" ,"mobile"],
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
  };
  return (
    <CarouselContainer>
      <Carousel {...carouselParams}>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <CarouselImage src={testimonial.img} alt="image" />
            <TestimonialContainer>
              <Feedback>{testimonial.feedback}</Feedback>
              <Name>{testimonial.name}</Name>
              <Title>{testimonial.location}</Title>
            </TestimonialContainer>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
