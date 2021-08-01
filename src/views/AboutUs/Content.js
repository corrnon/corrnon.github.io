import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Content(props) {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h6 className="text-secondary text-center font-weight-normal">
              Corrnon was founded for everyone who have passion for technology.
              We boost our skills via course, semester/thesis projects. We hope
              that we can help young people become more confident on their
              career.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
