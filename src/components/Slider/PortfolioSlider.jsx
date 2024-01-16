import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Heal Her Jaqueline & Associates LLC',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio1.png'
    },
    {
      title:'Provider Staff',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio2.png'
    },
    {
      title:'New Solutions Psychology',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio3.png'
    },
    {
      title:'Mindly.',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio4.png'
    },
    {
      title:'Mind Peace Psychology',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio5.png'
    },
    {
      title:'The Early Years Matter LLC ',
      subtitle:'See Details',
      // href:'/portfolio/portfolio-details',
      src:'/images/Portfolio6.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
