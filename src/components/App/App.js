import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './App.theme';
import KoalaForm from '../KoalaForm/KoalaForm';
import KoalaList from '../KoalaList/KoalaList';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import HappyAboutPage from '../AboutPage/HappyAboutPage';
import SadAboutPage from '../AboutPage/SadAboutPage';
import GoodNav from '../Nav/GoodNav';

class App extends Component {

  state = {
    showGood: true,
  }

    // When the App is first loaded get our stuff
    componentDidMount() {
      this.getKoalas();
    }
  
    getKoalas = () => {
      // Get our koalas from the server
      console.log(this.props);
      this.props.dispatch( { type: 'GET_KOALAS' } );
    }

    handleStateClick = () => {
      let showGood = this.state.showGood;
      this.setState({
        showGood: !showGood
      });
    };
  
    handleClose = () => {
      this.setState({
        showGood: false,
      });
    };

  render() {
    const isGood = this.state.showGood;
    let about;
    if(isGood === true) {
      about = 
        <div>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GoodNav />
            <KoalaForm handleStateClick={this.handleStateClick} />
            <KoalaList getKoalas={this.getKoalas} />
            <HappyAboutPage />
          </MuiThemeProvider>
        </div>
    } else {
      if(isGood === false) {
        about = 
        <div>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Nav />
            <KoalaForm handleStateClick={this.handleStateClick} />
            <KoalaList getKoalas={this.getKoalas} />
            <SadAboutPage />
          </MuiThemeProvider>
        </div>
      }
    }
    return (
      <div>
        {about}
      </div>
      );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
