import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from '../../Modules/Home/Index';
import Premium from '../../Modules/Premium/Components/Premium';
import DevSchool from '../../Modules/DevSchool/Components/DevSchool';

const { Header, Content, Footer } = Layout;
class AppLayout extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
                </Menu.Item>
              <Menu.Item key="2">
                <Link to="/premium">nav 2</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/devschool">nav 3</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route path="/" exact component={Home}></Route>
              <Route path="/premium" component={Premium}></Route>
              <Route path="/devschool" component={DevSchool}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    );
  }
}

export default AppLayout;