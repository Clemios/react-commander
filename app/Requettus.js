import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import axios from 'axios'

class Requettus extends Component {

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`)
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data) ;
            return (Object.keys(data).map((key) => console.log(data[key])));
        })
    }

    test = () => {
        return axios.post('http://localhost:' + '7777' + '/test')
            .then(response => console.log(response))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Segment>
                <Button onClick={() => this.test()}>Click Here</Button>
            </Segment>
        );
    }
}

export default Requettus;
