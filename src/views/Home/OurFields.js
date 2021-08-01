import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SquareCard from "./SquareCard";
import getOurFieldItems from "../../data/our-field-items";
import Aos from "aos";
import "aos/dist/aos.css";
const items = getOurFieldItems();
function OurFields(props) {
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease-out" });
  }, []);
  return (
    <Container className="py-5">
      <Row>
        <Col className="px-0" md={{ span: 4 }}>
          <SquareCard className="d-flex">
            <div className="my-auto w-100">
              <h1 className="text-center text-md-left font-weight-bold">
                Our Fields
              </h1>
              <h6 className="text-center text-md-left">
                What do we learn and work ?
              </h6>
            </div>
          </SquareCard>
        </Col>
        {items.map((item, index) => {
          return (
            <Col key={index} className="px-0" md={{ span: 4 }}>
              <SquareCard index={index} className="d-flex flex-column">
                <Image
                  className="m-auto"
                  src={item.image}
                  alt={`Corrnon ${item.title}`}
                  data-aos="zoom-in-left"
                />
                <h5 className="font-weight-bold text-center mb-3">
                  {item.title}
                </h5>
              </SquareCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default OurFields;
