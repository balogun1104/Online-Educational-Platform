import React, { Fragment } from "react";
import HeaderAll from "../components/Header/HeaderAll";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import { Helmet } from 'react-helmet';

// import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>E-LNOTE | Home</title>
      </Helmet>
       <HeaderAll /> 
      <HeroSection />
      <CompanySection />
      <AboutUs />
      {/* <Courses /> */}
      <ChooseUs />
      <Features />
      {/* <FreeCourse /> */}
      <Testimonials />
      <Newsletter />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
