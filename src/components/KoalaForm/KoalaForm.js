import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { FormControl, FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1
	},
	grid: {
		flexGrow: 1,
		backgroundColor: 'powderblue',
		padding: 16,
		display: 'flex',
		flexWrap: 'wrap',
	},
	form: {
		margin: 0,
		padding: 0,
	},
	test: {
		border: 'solid red 1px'
	}
})

class KoalaForm extends Component {

	state = {
			name: '',
			gender: '',
			age: 0,
			rtt: false,
			notes: '',    
	}

	// capture input values and store them locally until ready to send prisoner data
	handleChange = (event) => {
		console.log(event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// onClick event to 'save' the data, result is imprisoned koala
	imprisonTheKoala = (event) => {
		console.log(this.state);
		this.props.dispatch({type: 'ADD_KOALA', payload: this.state});
		this.setState({
			name: '',
			gender: 'f',
			age: 0,
			rtt: false,
			notes: '',
		});
		}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={16} className={classes.grid}>
					<Grid item xs={12}>
					<Grid container spacing={16} className={classes.grid}>
						<Grid item className={classes.grow}>
							<TextField
								required
								fullWidth
								label = "Name"
								value={this.state.name}
								onChange={this.handleChange}
								type="text"
								placeholder="Enter the koala's name"
								name="name"
							/>
						</Grid>
						<Grid item>
							<TextField
								required
								fullWidth
								select
								label="Gender"
								onChange={this.handleChange}
								value={this.state.gender}
								name="gender"
							>
								<MenuItem value="F">F</MenuItem>
								<MenuItem value="M">M</MenuItem>
								<MenuItem value="O">O</MenuItem>
							</TextField>
						</Grid>
						<Grid item>
							<TextField
								required
								fullWidth
								label="Age"
								value={this.state.age}
								onChange={this.handleChange}
								type="number"
								name="age"
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								control={
									<Switch
										color="primary"
										value={this.state.rtt}
										onChange={this.handleChange}
										name="rtt"
									/>
									}
								label="Ready to transfer"
								labelPlacement="start"
							/>
						</Grid>
						</Grid>
						<Grid item xs={12}>
						<Grid container spacing={16} className={classes.grid} direction="row">
							<Grid item className={classes.grow}>
								<TextField
									required
									fullWidth
									className={classes.grow}
									value={this.state.notes}
									onChange={this.handleChange}
									type="text"
									placeholder="Enter additional information about the koala"
									name="notes"
								/>
							</Grid>
								<Grid item>
									<Button variant="contained" color="primary" type="submit">Imprison the koala</Button>										
								</Grid>
						</Grid>
					</Grid>
				</Grid>
				</Grid>
			</div>
		);
	}
}

KoalaForm.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = reduxState => ({
	reduxState,
});

export default compose(
	connect(mapStateToProps),
	withStyles(styles),
)(KoalaForm);