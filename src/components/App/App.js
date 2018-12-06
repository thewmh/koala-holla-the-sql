import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './App.theme';
// import logo from './logo.svg';
// import './App.css';
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
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AddKoalaForm />
          <KoalaList getKoalas={this.getKoalas} />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
