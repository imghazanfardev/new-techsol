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
      testimonialThumb: '/images/wanda.png',
      testimonialText:
        'This was some additions to my website. He was still patient and made the necessary changes. Thanks again.',
      avatarName: "Wandap07's",
      avatarDesignation: 'Founder Of ISC Therapy LLC',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/sonnee.png',
      testimonialText:
        "It was a pleasure working with this seller. He was professional, patient, and had good ideas. We got the website exactly as I wanted, even though I wasn't quite sure what I wanted. I appreciate that he was willing to work with my ideas and make them a reality. I would work with this seller again, and plan to! Very happy customer.",
      avatarName: 'Sayleedae',
      avatarDesignation: 'Founder Of Affinity Triangle',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/drluo.png',
      testimonialText:
        "It takes a bit time for the communication. But eventually he delivers satisfactory work. I got one website done with him and am planning to do the second one with him.",
      avatarName: 'Dr. Houyuan Luo',
      avatarDesignation: 'Founder & Clinical Director at Mindpeace Psychology',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/jaqueline.png',
      testimonialText:
        "Very responsive! Great work",
      avatarName: "Jacquelinelouis's",
      avatarDesignation: 'Founder Of HealHer Jaqueline Therapeutic Services, LLC',
      ratings: '5',
    },

    {
      testimonialThumb: '/images/drsunil.png',
      testimonialText:
        " It was amazing and very valuable service",
      avatarName: 'Dr. Sunil Kumar',
      avatarDesignation: 'Medicine Physician at Dr. Sunil Kumar',
      ratings: '5',
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
