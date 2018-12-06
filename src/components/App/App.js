import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddKoalaForm from '../AddKoalaForm/AddKoalaForm';
import KoalaList from '../KoalaList/KoalaList';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <AddKoalaForm/>
        <KoalaList/>
      </div>
    );
  }
}

export default App;
