import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>oooooops, something went wrong</h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
