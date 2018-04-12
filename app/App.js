import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { Container } from 'semantic-ui-react'

import TopMenu from './components/layout/TopMenu'
import LeftMenu from './components/layout/LeftMenu'

import Homus from './Homus';
import Requettus from './Requettus';

class App extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderContent = () => (
    <Switch>
      <Route exact path="/" component={Homus} />
      <Route path="/requests" component={Requettus} />
    </Switch>
  )

  render() {
    const { visible } = this.state
    return (
      <Container fluid className="App">
        <TopMenu toggleVisibility={() => this.toggleVisibility()}/>
        <Container fluid>
          <LeftMenu visible={visible}>
              {this.renderContent()}
          </LeftMenu>
        </Container>
      </Container>
    );
  }
}

export default hot(module)(App);
