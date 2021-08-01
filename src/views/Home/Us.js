import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import quote from "../../assets/icon/ic_quote.svg";
function Us(props) {
  return (
    <div className="bg-corrnon py-5 text-center">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <img className="mx-auto" src={quote} height="50px" alt="quote" />
            <h6 className="text-white mt-5">
              Corrnon is a software development team in Vietnam, we connect
              students, learn and work together, make each other be full of joy
              and no longer alone.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Us;
