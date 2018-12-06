import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './App.theme';
import KoalaForm from '../AddKoalaForm/AddKoalaForm';
import KoalaList from '../KoalaList/KoalaList';
import Nav from '../Nav/Nav';
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
      <MuiThemeProvider theme={theme}>
				<CssBaseline />
        <Nav />
        <KoalaForm />
        <KoalaList />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
