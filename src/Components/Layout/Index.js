import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Container from './Container/Container';
import CardMember from './Card/CardMember';
import WrappedFormMember from './Form/FormMember';
import axios from 'axios';


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      first_name    : '',
      last_name     : '',
      formStatus    : 'create',
      memberIdSelected: null,
    }
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        // console.log('response', response)
        this.setState({members: response.data.data})
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  handleGetMembers = (data) => {
    // console.log(data);
    this.setState({members: data})
  }

  handleEdit = (member) => {
    this.setState({
      first_name  : member.first_name,
      last_name   : member.last_name,
      formStatus  : 'edit',
      memberIdSelected : member.id
    })
  }

  
  render() {
    return (
      <Container>
        <Row>
          <Col span={24}>
            <h1>Member {this.state.formStatus}</h1>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            { this.state.members.map((member) =>
              <Col span={12} key={member.id}>
                <CardMember
                  title={member.id}
                  firstName={member.first_name}
                  lastName={member.last_name}
                  edit={() => this.handleEdit(member)}
                />
              </Col>
            )}
          </Col>
          <Col span={12}>
            <WrappedFormMember 
              resMembers={[...this.state.members]} 
              handleMembers={this.handleGetMembers} 
              memberIdSelected={this.state.memberIdSelected}
              formStatus={this.state.formStatus}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Index;