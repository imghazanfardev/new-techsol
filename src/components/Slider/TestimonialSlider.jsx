import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/Testimonial1.png',
      testimonialText:
        'As a client of Techsol, our online presence received a remarkable boost. Their web development turned our vision into reality, creating a user-friendly and visually stunning website that truly reflects our brand.',
      avatarName: 'Sarah Thompson',
      avatarDesignation: 'Marketing Director, GlobalTech Solutions',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/Testimonial2.png',
      testimonialText:
        "Techsol's UI/UX design surpassed our expectations. Their understanding of user behavior resulted in designs that not only look fantastic but also enhance the overall experience. Exceptional work!",
      avatarName: 'Alex Rodriguez',
      avatarDesignation: 'Creative Director, Innovate Designs',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/Testimonial3.png',
      testimonialText:
        "With Techsol's digital marketing expertise, our brand witnessed a significant surge. Their Google Ads and SEO strategies brought tangible results, boosting visibility, attracting leads, and elevating our business profile.",
      avatarName: 'Emily Reynolds',
      avatarDesignation: 'Chief Marketing Officer, PeakTech Enterprises',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/Testimonial5.png',
      testimonialText:
        "Techsol's React development is unparalleled. They seamlessly turned our app ideas into a reality. Their commitment to staying at the forefront of React trends ensures our application remains cutting-edge and user-centric.",
      avatarName: 'James Manning',
      avatarDesignation: 'CEO AT ByteCraft Innovations',
      ratings: '3.5',
    },

    {
      testimonialThumb: '/images/Testimonial4.png',
      testimonialText:
        "Techsol's SEO mastery transformed our online visibility. Our website now ranks high, thanks to their strategic approach. More traffic, and better leads – a testament to Techsol's impact on our digital success.",
      avatarName: 'Olivia Chambers',
      avatarDesignation: 'Head of Online Strategy, Visionary Ventures Ltd.',
      ratings: '3.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
