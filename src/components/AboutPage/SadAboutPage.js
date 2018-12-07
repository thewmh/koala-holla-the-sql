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

class SadAboutPage extends Component {

	render() {
		const { classes } = this.props;
		return (
				<div className={classes.root}>
				<Typography variant="h4" align="center" className={classes.title}>
					Just Kidding. We take our Koala safety seriously. Even if it means 
					making long headers and keeping Koalas in questionable conditions!
				</Typography>
				<Typography variant="body1" className={classes.text} align="justify">
							Koala Holla Sanctuary actually opened in 1926! As a by any means necessary refuge for sick, injured, 
							and orphaned koalas, at a time when the species was destroying cities and ice cream stores! 
							Founder, William Peter-Karla Rhonda Cooper, recognized something had to be done to protect one of 
							Australia's most dangerous species. Today, Koala Holla remains as a destination for local 
							and international guests to not only see native Australian animals, but to also connect 
							and learn, how to make small, positive changes in their daily 
							lives to help protect their own communities and wildlife habitats.
							We are committed to maximizing environmental and social impacts of our operations.
					</Typography>
				</div>
		);
	}

}

SadAboutPage.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default compose( 
	connect(mapReduxStateToProps), 
	withStyles(styles)
	)(SadAboutPage);
