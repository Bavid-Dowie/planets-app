import React, { Component } from 'react';
import Welcome from 'Welcome';
import PlanetList from 'PlanetList';
import RandomPlanet from 'RandomPlanet';
import PlanetDetail from 'PlanetDetail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={

      planetList:[],

    }
    this.getPlanetNames=this.getPlanetNames.bind(this)
    this.listAll=this.listAll.bind(this)
  }
componentDidMount() {
  this.getPlanetNames()
}

getPlanetNames() {
  fetch(`https://wdi-nyc-planets-api.herokuapp.com/planets`)
  .then(response => {
    return response.json()
  })
  .then(jsonData => {
    return this.setState({planetList: jsonData})
  })
}

listAll() {
  list.state.planetList.map(planet => <div><p>{planet[0]}</p></div>)
}



  render() {
    return (
      <div className="App">
        <Welcome />
        <PlanetList />
        <RandomPlanet />
        <PlanetDetail />
      </div>
    );
  }
}

export default App;
