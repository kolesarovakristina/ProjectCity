import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cities from './Cities/Cities'

class App extends Component {

  state = {
    cities:[{id:'c1',city:'Kosice', country:'SK',temp:'NaN'},
    {id:'c2',city:'Amsterdam',country:'NL',temp:'NaN'},
    {id:'c3',city:'London',country:'UK',temp:'NaN'},
    {id:'c4',city:'Madrid',country:'ES',temp:'NaN'},
    {id:'c5',city:'Detroit',country:'US',temp:'NaN'}]
  };



  





  render() {
    return (
      <Cities list={this.state.cities}/>
    );
  }
}

export default App;
