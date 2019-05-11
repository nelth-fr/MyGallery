import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <h5 className={'mt-2 text-center'}>Florent HAFFNER - 2019</h5>
      </Col>
    </Row>
  </div>
);

export default Footer;
