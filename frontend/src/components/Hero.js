import React from "react";
import { Alert, Container, Row, Col } from "reactstrap";
import "../App.css";
import RequestModal from "./RequestModal";
import VolunteerModal from "./VolunteerModal";

const Hero = () => {
  return (
    <div>
      <div className="text-center hero my-5">
        <img
          src={require("../assets/helping-hand.jpg")}
          alt="logo"
          height="100"
          width="100"
          style={{ marginLeft: 20 }}
        />
        <h1 className="mb-4">Helping Hand</h1>

        <Alert color="primary">
          Helping Hand connect users to others people in need within their local
          community.
        </Alert>
      </div>
      <hr />
      <div className="text-center" style={{ backgroundColor: "#fce8ff" }}>
        <br />
        <h2> Welcome! Read below to learn how Helping Hands works. </h2>
        <br />
        <Container className="text-left">
          <Row>
            <Col xs="12" sm="6">
              <h5>
              <br />
              Self-isolating and need something?
              <br />
              <br />
              Request a delivery from a local volunteer.
              <br />
              <br />
              Want to help your neighbors?
              <br />
              <br />
              Sign up and deliver essential items to quarantined people nearby.
              <br />
              <br />
              <br />
              <br />
              <br />
              </h5>
              <Container>
                <Row>
                  <RequestModal />
                  <VolunteerModal />
                </Row>
              </Container>
            </Col>

            <Col xs="12" sm="6">
              <img
                src={require("../assets/covid.svg")}
                alt="logo"
                height="90%"
                width="90%"
                style={{ marginLeft: 20 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
