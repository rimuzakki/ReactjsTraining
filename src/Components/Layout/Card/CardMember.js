import React, { Component } from 'react';
import { Card, Button } from 'antd';

class CardMember extends Component {

  // editButtonHandler = (member) => {
  //   this.props.handleEdit(
  //     member.first_name, 
  //     member.last_name
  //   )
  // }


  render() {
    return (
      <div>
        <Card title={this.props.title}>
          <p>{this.props.firstName}</p>
          <p>{this.props.lastName}</p>
          <Button onClick={this.props.edit}>Edit</Button>
          <Button type="danger">Delete</Button>
        </Card>
      </div>
    );
  }
}

export default CardMember;