import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo-dark.png";
import icFacebook from "../../assets/icon/ic_facebook.png";
import icTwitter from "../../assets/icon/ic_twitter.png";
import icGithub from "../../assets/icon/ic_github.png";
import getContentItems from "../../data/navigation-bar-items";
function Footer(props) {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="d-flex" md="6">
            <div className="text-center m-auto m-md-0">
              <Link to="/" className="mx-auto">
                <Image className="logo" src={logo} />
              </Link>
              <SocialNetwork className="mt-2" />
              <p className="mt-5 text-secondary">© 2021 Corrnon.</p>
            </div>
          </Col>
          <Col md="6" className="row mx-0 mt-5 m-md-0 content">
            <Col md="6 text-center text-md-left">
              <h6>Content</h6>
              <Content />
            </Col>
            <Col md="6 text-center text-md-left">
              <h6>Legal</h6>
              <Legal />
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
const SocialNetwork = ({ className }) => {
  return (
    <div className={`d-flex ${className}`}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/corrnon"
        className="ml-auto"
      >
        <Image className="icon" src={icFacebook} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/corrnon"
        className="mx-3"
      >
        <Image className="icon" src={icTwitter} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/corrnon"
        className="mr-auto"
      >
        <Image className="icon" src={icGithub} />
      </a>
    </div>
  );
};

const Content = () => {
  const items = getContentItems();
  return (
    <>
      {items.map((item, index) => {
        return (
          <p key={index}>
            <Link to={item.to}>{item.title}</Link>
          </p>
        );
      })}
    </>
  );
};

const Legal = () => {
  return (
    <>
      <p>
        <Link to="/term-and-condition">Terms & Conditions</Link>
      </p>
      <p>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </>
  );
};
export default Footer;
