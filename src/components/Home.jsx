import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FunFact from '../components/FunFact';
import Spacing from '../components/Spacing';
import Div from './Div';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import PortfolioSlider from './Slider/PortfolioSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import PostSlider from '../components/Slider/PostSlider';
import MovingText from '../components/MovingText';
import LogoList from '../components/LogoList';
import Cta from '../components/Cta';
import VideoModal from "../components/VideoModal/index"
import { pageTitle } from "../components/helper/index"
import Button from './Button';
import ContactForm from './Contact';

export default function Home() {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: '/',
    },
  
    {
      name: 'Linkedin',
      links: '/',
    },

    {
      name: 'Upwork',
      links: '/',
    },
    
    {
      name: 'Fiverr',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Satisfied Clients',
      factNumber: '6K',
    },
    {
      title: 'Live Projects',
      factNumber: '14K',
    },
    {
      title: 'Satisfaction Rate',
      factNumber: '4.7',
    },
    {
      title: 'Years of Experience',
      factNumber: '15',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      {/* Start Hero Section */}
      <Hero
        title="Ignite Your Dreams  <br/>Startup With Us!"
        subtitle="Welcome to Techsol, where innovation and creativity elevate your online presence to unprecedented heights. Our digital hub, a reservoir of unmatched talent, transforms your brand into a digital phenomenon with captivating visuals, compelling content, and avant-garde web development. Immerse yourself in a world of digital excellence, explore boundless possibilities, and stay ahead in the digital landscape. Your success story begins here. Get in touch with us today!"
        btnText="Get a Quote"
        btnLink="./contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/heroimage2.jpg"
      />

      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="At Techsol, we don't just build websites; we create digital symphonies. Our team crafts captivating visuals and compelling content for enchanting online experiences!"
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <h3 className="cs-section_subtitle" style={{fontSize:"16px",color:"grey"}}>What Can We Do</h3>
              <h2 className="cs-section_title">Services we can help you with</h2>
              <p>Get a quick introduction and outline of our digital solutions services.</p>
              <Spacing lg='45' md='20' />
              <Button btnLink={"/service"} btnText={"See All Services"} />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="App Development"
                    link="/service/service-details"
                    src="/images/service_2.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Web Development"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <p style={{textAlign:'center'}}>Explore Prominent Projects – a Glimpse into Our Exceptional Work and Unmatched Expertise.</p>
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      {/* <MovingText text="Our Most Honorable Companies Whom We’re Working Since A Decade! Contact Now to Be the Part of It!" /> */}
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}
        <h2 className='logo_section_title'>Some of the Our Prestigious companies we’ve work with! </h2>
      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Schedule a Meeting"
          btnLink="/contact"
          // bgSrc="/images/newblackbg.jpg"
        />
      </Div>
      {/* End CTA Section */}
      <ContactForm/>
    </>
  );
}
