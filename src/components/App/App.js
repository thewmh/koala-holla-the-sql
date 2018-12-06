import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './App.theme';
// import logo from './logo.svg';
// import './App.css';
import AddKoalaForm from '../AddKoalaForm/AddKoalaForm';
import KoalaList from '../KoalaList/KoalaList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
				<CssBaseline />
        <AddKoalaForm />
        <KoalaList />
      </MuiThemeProvider>
    );
  }
}

export default App;