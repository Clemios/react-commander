import React, { Component } from 'react'
import { Segment, Button, Grid } from 'semantic-ui-react'
import Controlus from './components/Controlus'
import Mapus from './components/Mapus'
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

    getUptime = () => {
        return axios.post('http://localhost:' + '7777' + '/uptime')
            .then(response => console.log(response))
            .catch(function (error) {
                console.log(error);
            });
    }

    minecraftCmd = () => {
        return axios.post('http://localhost:' + '7777' + '/minecraft', {
            cmd: 'restart'
        })
            .then(response => console.log(response.data))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Grid columns='equal'>
            <Grid.Row>
            <Grid.Column width={6}>
            <Segment>
            <Controlus getUptime={() => this.getUptime()} minecraftCmd={() => this.minecraftCmd()}/>
            </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment>
                <Mapus />
            </Segment>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        );
    }
}

export default Requettus;
