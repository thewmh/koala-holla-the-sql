import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './App.theme';
import KoalaForm from '../AddKoalaForm/KoalaForm';
import KoalaList from '../KoalaList/KoalaList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
				<CssBaseline />
				<KoalaForm />
				<KoalaList />
      </MuiThemeProvider>
    );
  }
}

export default App;
