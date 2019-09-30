import React, { Component } from 'react';
import { Card, Button } from 'antd';

class CardMember extends Component {
  render() {
    return (
      <div>
        <Card title={this.props.title}>
          <p>{this.props.firstName}</p>
          <p>{this.props.lastName}</p>
          <Button>Edit</Button>
          <Button type="danger">Delete</Button>
        </Card>
      </div>
    );
  }
}

export default CardMember;