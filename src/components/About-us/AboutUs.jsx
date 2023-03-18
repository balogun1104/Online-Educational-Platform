import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                At Electronic Lesson Note, we believe that teachers are the
                backbone of society. We understand the challenges teachers face
                in managing their lesson plans and keeping track of their
                students' progress. Our mission is to simplify the lesson
                planning process and empower teachers with a powerful tool that
                makes their job easier. We have designed an electronic lesson
                note that is user-friendly, efficient and reliable.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25000} duration={2}  />
                    </span>

                    <p className="counter__title">Visted Users</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5000} duration={2} />
                    </span>

                    <p className="counter__title">Current Users</p>
                  </div>
                </div>

               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
