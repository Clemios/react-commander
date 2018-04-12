import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class Controlus extends Component {

    render() {
        return (
            <Button onClick={() => this.test()}>Click Here</Button>
        );
    }
}

export default Controlus;
