import React from "react";
import PageHeader from "../../components/Reuseable/PageHeader";
import background from "../../assets/image/background-contact.png";
import { Col, Container, Row } from "react-bootstrap";
function Contact(props) {
  return (
    <PageHeader background={background} className="min-vh-100">
      <Container>
        <Row className="h-100">
          <Col md="12" className="my-auto bg-white shadow p-5"></Col>
        </Row>
      </Container>
    </PageHeader>
  );
}

export default Contact;
