import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Reuseable/PageHeader";
import background from "../../assets/image/background-home.png";
import Engineer from "../../assets/image/engineer.svg";
function Header(props) {
  return (
    <PageHeader background={background} className="min-vh-100 d-flex pt-9">
      <Container>
        <Row className="h-100">
          <Col md="6" sm="12" className="my-auto">
            <Foreword />
            <ActionButton />
          </Col>
          <Col md="6" sm="12" className="m-auto text-center">
            <ImageEngineer />
          </Col>
        </Row>
      </Container>
    </PageHeader>
  );
}

const ImageEngineer = () => {
  return (
    <object width="100%" type="image/svg+xml" data={Engineer}>
      svg-animation
    </object>
  );
};

const Foreword = () => {
  return (
    <h1 className="text-md-left text-center font-weight-600">
      Corrnon build applications, raise solutions.
    </h1>
  );
};

const ActionButton = () => {
  return (
    <p
      className="text-md-left text-center mt-4"
      style={{ marginLeft: "-.5rem", marginRight: "-.5rem" }}
    >
      <Button
        as={Link}
        variant="success"
        className="btn-round bg-corrnon border-corrnon m-2"
        style={{ minWidth: "170px" }}
        to="/contact"
      >
        Join us
      </Button>
      <Button
        as={Link}
        variant="secondary"
        className="btn-round m-2"
        style={{ minWidth: "170px" }}
        to="/about-us"
      >
        About us
      </Button>{" "}
    </p>
  );
};

export default Header;
