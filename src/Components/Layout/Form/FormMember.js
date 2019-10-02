import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';

class FormMember extends Component {

  // componentWillReceiveProps = () => {
  //   console.log('form', this.props.firstName)
  //   this.props.form.setFieldsValue({
  //     first_name: this.props.firstName,
  //     last_name: this.props.lastName
  //   })
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var url = 'https://reqres.in/api/users'
        if (this.props.formStatus === 'edit') {
          url = `https://reqres.in/api/users/${this.props.memberIdSelected}`
          this.editMember(url, values)
        } 
        else {
          this.addMember(url, values)
        }
      }
    })
  }

  addMember = (url, values) => {
    axios.post(url, values)
      .then(response => {
        // console.log('response', response.data)
        var members = this.props.resMembers
        members.push(response.data)
        // this.setState({members})
        this.props.handleMembers(members)
      }) 
      .catch(error => {
          console.log(error)
      })
    
  }

  editMember = (url, values) => {
    axios.put(url, values)
      .then(response => {
        var members = this.props.resMembers
        var indexMember = members.findIndex(member => member.id === this.props.memberIdSelected)

        // mengganti data yang ada dalam state members dan index yang sesuai
        members[indexMember].first_name = response.data.first_name
        members[indexMember].last_name = response.data.last_name
      })
      .catch(error => {
        console.log(error)
      })
  }

  setValue = () => {
    this.props.form.setFieldsValue({
      first_name: this.props.firstName,
      last_name: this.props.lastName
    })
    console.log(this.props.formStatus)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please input your first name!' }],
            setFieldsValue: this.props.firstName,
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
              name="firstName"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
              name="lastName"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <button onClick={() => this.setValue()}>
        set
      </button>
      </div>
    );
  }
}
const WrappedFormMember = Form.create({ name: 'form_member' })(FormMember);
export default WrappedFormMember;