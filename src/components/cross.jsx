import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Lights from './lights.jsx';

export default class Cross extends React.Component {
  render() {
    return <Grid>
      <Row className="show-grid" id="top-ns-lights">
        <Col md={4}></Col>
        <Col  md={4} id="left-ws-light"><Lights className="NS-lights"/></Col>
        <Col md={4}></Col>
      </Row>

      <Row className="show-grid">
        <Col  md={4}><Lights className="WS-lights"/></Col>
        <Col md={4} id="center-light"></Col>
        <Col md={4}><Lights className="WS-lights"/></Col>
      </Row>

      <Row className="show-grid ns-lights">
        <Col md={4} ></Col>
        <Col  md={4} id="right-ws-light"><Lights className="NS-lights"/></Col>
        <Col md={4}></Col>
      </Row>

    </Grid>
  }
}
