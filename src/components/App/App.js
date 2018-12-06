import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddKoalaForm from '../AddKoalaForm/AddKoalaForm';
import KoalaList from '../KoalaList/KoalaList';
import { connect } from 'react-redux';


class App extends Component {

    // When the App is first loaded get our stuff
    componentDidMount() {
      this.getKoalas();
    }
  
    getKoalas = () => {
      // Get our koalas from the server
      console.log(this.props);
      this.props.dispatch( { type: 'GET_KOALAS' } );
    }

  render() {
    return (
      <div className="App">
        <AddKoalaForm/>
        <KoalaList getKoalas={this.getKoalas} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
