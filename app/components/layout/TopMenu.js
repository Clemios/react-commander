import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'


class TopMenu extends Component {

    render() {
        return (
            <Menu attached inverted className="menu-top">
                <Menu.Item as="a" header onClick={() => this.props.toggleVisibility()}>
                    <span>HEY</span>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item as="a" href="/"><Icon name="power" />TITLE</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default TopMenu;
