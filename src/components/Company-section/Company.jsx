import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Company = () => {
  return (
    <section>
      <Marquee
      speed={30}
      play={true}
      pauseOnHover={true}
      >
        <Container>
          <motion.div
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 1.5 }}
          >
            <Row>
              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  <i class="ri-vimeo-line"></i> Vimeo
                </h3>
              </Col>

              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  <i class="ri-pinterest-line"></i> Pinterest
                </h3>
              </Col>

              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  <i class="ri-dribbble-line"></i> Dribble
                </h3>
              </Col>

              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  {" "}
                  <i class="ri-apple-fill"></i> Apple
                </h3>
              </Col>

              <Col lg="2" md="3" sm="4" xs="6">
                <h3 className=" d-flex align-items-center gap-1">
                  {" "}
                  <i class="ri-finder-fill"></i> Finder
                </h3>
              </Col>

              <Col lg="2" md="3" sm="4" xs="6">
                <h2 className=" d-flex align-items-center gap-1">
                  {" "}
                  <i class="ri-google-fill"></i> Google
                </h2>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Marquee>
    </section>
  );
};

export default Company;
