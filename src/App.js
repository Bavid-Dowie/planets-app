import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

import Welcome from './Welcome';
import PlanetList from './PlanetList';
import RandomPlanet from './RandomPlanet';
import PlanetDetail from './PlanetDetail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      planetList: [],

    }
    this.getPlanetNames = this.getPlanetNames.bind(this)
  }
  componentDidMount() {
    this.getPlanetNames()
  }

  getPlanetNames() {
    fetch('https://wdi-nyc-planets-api.herokuapp.com/planets')
      .then(response => response.json())
      .then(planetData => {
        this.setState({
          list: planetData.planets
        })
        console.log(planetData.planets)
      })
    }
    
    render() {
      
      
      return (
        <div className="App">
        <nav>
          <ul className="mainNav">
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/planetList">PlanetList</Link></li>
            <li><Link to="/randomPlanet">RandomPlanet</Link></li>
            <li><Link to="/planetDetail">PlanetDetail</Link></li>
          </ul>
        </nav>
        <div className="main">
          <Route exact path="/" component={Welcome} />
          <Route path="/planetList" component={PlanetList} />
          <Route path="randomPlanet" component={RandomPlanet} />
          <Route path="planetDetail" component={PlanetDetail} />
        </div>
      </div>
    );
  }
}

export default App;
