import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  div: {
    width: 800,
    height: 'flex',
    display: 'center',
  },
  text: {
    padding: 10,
  },
});

class SadAboutPage extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.div}>
          <h1>Just Kidding. We take our Koala safety seriously. Even if it means 
              making long headers and keeping Koalas in questionable conditions!</h1> 
          <div className={classes.text}>
            <p>Koala Holla Sanctuary actually opened in 1926! As a by any means necessary refuge for sick, injured, 
              and orphaned koalas, at a time when the species was destroying cities and ice cream stores! 
              Founder, William Peter-Karla Rhonda Cooper, recognized something had to be done to protect one of 
              Australia's most dangerous species. Today, Koala Holla remains as a destination for local 
              and international guests to not only see native Australian animals, but to also connect 
              and learn, how to make small, positive changes in their daily 
              lives to help protect their own communities and wildlife habitats.
              We are committed to maximizing environmental and social impacts of our operations.
            </p>
          </div>
        </div>
    );
  }

}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default compose( 
  connect(mapReduxStateToProps), 
  withStyles(styles)
  )(SadAboutPage);
