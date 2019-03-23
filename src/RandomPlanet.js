import React, { Component } from 'react'
import './App.css';

export default class RandomPlanet extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //         randomPlanet: "",

    //     }
    //     this.getRandomPlanet=this.getRandomPlanet.bind(this)
    // }

    // componentDidMount() {
    //     this.getRandomPlanet()
    //   }
    
    //   getRandomPlanet() {
    //     fetch('https://wdi-nyc-planets-api.herokuapp.com/planets/random')
    //       .then(response => response.json())
    //       .then(planetData => {
    //         this.setState({
    //           list: planetData.planets
    //         })
    //         console.log(planetData.planets)
    //       })
    //   }

    render() {
        return (
            <div>
                <h1 className="randomPlanet">Random Planets</h1>
            </div>
        )
    }
}
