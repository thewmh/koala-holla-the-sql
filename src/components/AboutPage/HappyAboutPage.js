import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	title: {
		padding: theme.spacing.unit * 2,
	},
  text: {
		padding: theme.spacing.unit * 4,
		paddingTop: 0,
  },
});

class HappyAboutPage extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
					<Typography variant="h4" align="center" className={classes.title}>Welcome to the safest place on Earth for Koalas!</Typography>
          <Typography variant="body1" className={classes.text} align="justify">
						Koala Holla Sanctuary opened in 1927 as a safe refuge for sick, injured, 
						and orphaned koalas, at a time when the species was being culled for the fur trade. 
						Founder, Claude Reid, recognized something had to be done to help protect one of 
						Australia's most iconic species. Today, Lone Pine remains as a destination for local 
						and international guests to not only see native Australian animals, but to also connect 
						and learn, and to leave feeling inspired to make small, positive changes in their daily 
						lives to help protect their own native wildlife and habitats.
						We are committed to maximizing the positive environmental and social impacts of our operations. 
						We achieve this through water and energy efficiency, biodiversity, communication and planning. 
						Through cooperation with our employees, suppliers and customers, we aim to set a new standard in 
						environmental wildlife management. This will contribute to building a stronger Lone Pine and a safer, 
						cleaner, more sustainable Australia.
          </Typography>
        </div>
    );
  }

}

HappyAboutPage.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default compose( 
  connect(mapReduxStateToProps), 
  withStyles(styles)
  )(HappyAboutPage);
