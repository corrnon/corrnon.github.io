import React, { useEffect } from "react";
import PageHeader from "../../components/Reuseable/PageHeader";
import background from "../../assets/image/background-contact.png";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import icEmail from "../../assets/icon/ic_mail.png";
import icPlace from "../../assets/icon/ic_outline-place.png";
import imgHolderIco from "../../assets/icon/holder-ico.png";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
function Contact(props) {
  return (
    <PageHeader background={background} className="min-vh-100 d-flex pt-9">
      <Container>
        <Row className="h-100">
          <Col md="12" className="my-auto shadow p-0">
            <Container fluid className="p-0">
              <Row className="m-0">
                <Col md="8" className="bg-white p-4">
                  <h5 className="d-flex mb-3 text-secondary">
                    Send us a Message
                  </h5>
                  <MessageForm />
                </Col>
                <Col md="4" className="bg-corrnon p-4">
                  <h5 className="text-white o-80">Contact information</h5>
                  <ContactInformation />
                  <img
                    src={imgHolderIco}
                    alt=""
                    width="50%"
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "0px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </PageHeader>
  );
}

const MessageForm = () => {
  const [state, handleSubmit] = useForm("mleapbkn");
  useEffect(() => {
    if (state.succeeded) {
      document.getElementById("formmessage").reset();
    }
  }, [state]);

  return (
    <Form onSubmit={handleSubmit} method="POST" id="formmessage">
      <Row>
        <Col md="6">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formMessage" className="position-relative">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn-send float-right"
      >
        <IoPaperPlane color="#fff" />
      </button>
      {state.succeeded && (
        <p className="success-message">
          We received your message. We will reply you soon. Thanks!
        </p>
      )}
    </Form>
  );
};

const ContactInformation = () => {
  return (
    <div className="contact-information">
      <InformationItem icon={icEmail} info="corrnon@gmail.com" />
      <InformationItem icon={icPlace} info="Vietnam" />

      <h3 className="mt-5">
        <a
          className="mr-3"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/corrnon"
        >
          <FaFacebook color="#fff" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/corrnon">
          <FaTwitter color="#fff" />
        </a>
      </h3>
    </div>
  );
};

const InformationItem = ({ icon, info }) => {
  return (
    <h6 className="text-white font-weight-normal d-flex">
      <img className="icon mr-3 my-auto" src={icon} width="24px" alt="icon" />
      <span className="my-auto">{info}</span>
    </h6>
  );
};
export default Contact;
