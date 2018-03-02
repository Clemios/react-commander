import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

import Homus from './Homus';
import Requettus from './Requettus';

class App extends Component {

  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderContent = () => (
    <Switch>
      <Route exact path="/" component={Homus} />
      <Route exact path="/requests" component={Requettus} />
    </Switch>
  )

  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <Menu attached inverted className="menu-top">
          <Container fluid>
            <Menu.Item as="a" header>
              <span>HEY</span>
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item  as="a" href="/"><Icon name="power" />TITLE</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <Container fluid>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <header className="App-header">
                <Link to="/"><button style={{ float: 'left' }}>Home</button></Link>
                <Link to="/requests"><button style={{ float: 'right' }}>Requests</button></Link>
                <h1 className="App-title">Welcome to React</h1>
              </header>
              {this.renderContent()}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Container>
      </div>
    );
  }
}

export default hot(module)(App);
