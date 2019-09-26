import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Container from './Container/Container';
import CardMember from './Card/CardMember';
import WrappedFormMember from './Form/FormMember';


class Index extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col span={24}>
            <h1>Member</h1>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <CardMember />
          </Col>
          <Col span={12}>
            <WrappedFormMember />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;