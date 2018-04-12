import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class Mapus extends Component {

    render() {
        return (
            <Button onClick={() => this.test()}>Click Here</Button>
        );
    }
}

export default Mapus;
