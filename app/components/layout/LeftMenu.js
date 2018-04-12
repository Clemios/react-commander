import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Sidebar, Menu, Icon } from 'semantic-ui-react'


class LeftMenu extends Component {

    render() {
        return (
            <Sidebar.Pushable>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical inverted>
                    <Link to="/">
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                    </Link>
                    <Link to="/requests">
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Requêtes
                        </Menu.Item>
                    </Link>
                </Sidebar>
                <Sidebar.Pusher>
                    <Container fluid>
                        {this.props.children}
                    </Container>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default LeftMenu;
