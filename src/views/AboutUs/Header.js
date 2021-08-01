import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/Reuseable/PageHeader";
import background from "../../assets/image/background-about-us.png";
import MyTeam from "../../assets/image/my-team-animate.svg";
function Header(props) {
  return (
    <PageHeader className="min-vh-50 pt-9 pb-5">
      <Container>
        <Row className="h-100">
          <Col md="4" className="my-auto">
            <h1
              style={{ fontSize: 50 }}
              className="font-weight-bold text-center text-md-left"
            >
              About us
            </h1>
          </Col>
          <Col md="8">
            <MyTeamAnimate />
          </Col>
        </Row>
      </Container>
    </PageHeader>
  );
}

const MyTeamAnimate = () => {
  return (
    <object width="100%" type="image/svg+xml" data={MyTeam}>
      svg-animation
    </object>
  );
};

export default Header;
