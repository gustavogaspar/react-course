import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css'

class App extends Component {

  state = {
    persons: [
      { name: "max" },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName },
      ]
    })
  }

  nameChangedHanler = (event) => {
    this.setState({
      persons: [{ name: event.target.value }]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I'm a React App </h1>
        <p>This is Working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Teste')}>Switch Name</button>
        <Person name={this.state.persons[0].name} click={this.switchNameHandler.bind(this, 'data')} changed={this.nameChangedHanler}>My hobby is: Gaming</Person>
        <Person name={this.state.persons[0].name} click={this.switchNameHandler.bind(this, 'data2')} changed={this.nameChangedHanler}>My hobby is: Gaming</Person>
      </div>
    );
  }
}

export default App;
