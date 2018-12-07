import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import { FormControlLabel, Switch } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1,
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		backgroundColor: '#fff'
	},
	actions: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		marginBottom: theme.spacing.unit * 1,
	}
})

const genders = {
	F: 'Female',
	M: 'Male',
	O: 'Other',
}

const KoalaListItem = props => {
		const { classes, item, transferKoala} = props;
		// console.log(props);
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
				<Card className={classes.card}>
					<CardHeader
						title={item.name}
						subheader={`${item.age}-year-old ${genders[item.gender]}`}
					/>
					<Divider />
					<CardContent className={classes.grow}>
						{item.notes}
					</CardContent>
					<CardActions className={classes.actions}>
						{item.rtt ? <Fab disabled><FontAwesomeIcon icon="plane" size="lg" color="black"/></Fab> : <Button variant="contained" onClick={()=>transferKoala(item)}>Ready</Button>}
							<div className={classes.grow} />
							<Button>Edit</Button>
							<Button onClick={()=>props.deleteKoala(item._id)}>Delete</Button>
					</CardActions>
				</Card>
			</Grid>
		  
		);
	
}

KoalaListItem.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(KoalaListItem);