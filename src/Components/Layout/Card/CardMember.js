import React, { Component } from 'react';
import { Card, Button } from 'antd';

class CardMember extends Component {
  render() {
    return (
      <div>
        <Card title="ID Member" style={{ width: 300 }}>
          <p>First Name</p>
          <p>Last Name</p>
          <Button>Edit</Button>
          <Button type="danger">Delete</Button>
        </Card>
      </div>
    );
  }
}

export default CardMember;