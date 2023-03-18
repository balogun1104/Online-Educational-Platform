import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero2.jpeg";
import "./hero-section.css";
import { motion }  from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h3 className="mb-4 hero__title">
              Revolutionizing the way teachers manage their lesson plans with electronic lesson notes
              </h3>
              <p className="mb-5">
              Welcome to Electronic Lesson Note <br/>Your One-Stop Shop for Effective Classroom Management!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>
         
          <Col lg="6" md="6" className="imageContainer">
          <motion.div
                initial={{ x: 900 }}
                animate={{ x: 0}}
                transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
              >
            <img src={heroImg} alt="" className="w-100 hero__img" />
            </motion.div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
