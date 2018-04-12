import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class Controlus extends Component {

    render() {
        return (
            <div>
            <Button onClick={() => this.props.getUptime()}>UpTime</Button>
            <Button onClick={() => this.props.minecraftCmd()}>Test</Button>
            </div>
        );
    }
}

export default Controlus;
