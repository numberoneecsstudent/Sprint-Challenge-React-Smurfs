import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios('http://localhost:3333/smurfs')
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => {throw new Error(err)});
  }
  handleUpdateList = (smurfs) => {
    this.setState({
      smurfs,
    })
  }
  handleEditSmurf = (name, age, height, id) => {
    axios.put(`http://localhost:3333/smurfs${id}`, {
      name, 
      age: Number(age),
      height: Number(height)
    })
    .then(res => this.setState({smurfs : res.data}) )
    .catch(err => { throw new Error(err) });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.


  render() {
    return (
      <div className="App">
      <Navigation />
        <Route exact path="/" render={props => (
          <Smurfs
          {...props}
          smurfs={this.state.smurfs}
         deleteSmurfs={this.handleDeleteSmurf}
         editSmurfs={this.handleEditSmurf}
          />
        )} />
        <Route path="/add" render={props =>
        <SmurfForm {...props}
      updateList={this.handleUpdateList} />} />
      </div>
    );
  }
}

export default App;
