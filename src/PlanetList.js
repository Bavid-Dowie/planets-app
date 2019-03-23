import React, { Component } from 'react'
import './App.css';
export default class PlanetList extends Component {

    constructor(props) {
        super(props)
        // console.log()
        this.state = {
            
            randomPlanet: "",
            
        }
        this.getRandomPlanet = this.getRandomPlanet.bind(this)
    }
    
    componentDidMount() {
        this.getRandomPlanet()
    }
    
    getRandomPlanet() {
        fetch('https://wdi-nyc-planets-api.herokuapp.com/planets/random')
        .then(response => response.json())
        .then(planetData => {
            this.setState({
                list: planetData.planets
            })
            })
    }



    render() {
        return (
            <div>
                <h1 className="planetList">Planet Lists</h1>
            </div>
        )
    }
}
