import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import KoalaListItem from '../KoalaListItem/KoalaListItem'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	background: {
		padding: 16,
		marginTop: 1,
		marginBottom: 1,
		background: 'powderblue',
	}
})

class KoalaList extends Component {

  deleteKoala = (id) => {
    this.props.dispatch( { type: 'DELETE_KOALA', payload: id } );
	}

  readyToTransferButton = (boolean, koala, _id) => {
      //  This function returns a button to click if the bear is
      //  not ready to transfer and a little truck gif if it is
    
    if (!boolean) {
      return <Button onClick={() => this.transferKoala(koala)} >Ready</Button>;
    }
    return <iframe title={_id} src="https://giphy.com/embed/IpCUVfiM7p8ly" width="110" height="30" frameBorder="0"  allowFullScreen></iframe>;
  }

  transferKoala = (koala) => {
      console.log('koala: ', koala);
      this.props.dispatch({ type: 'TRANSFER_KOALA', payload: koala });
  }

  render() {
		const { classes } = this.props;
		const { koalaList } = this.props.reduxState
    return (
			<div className={classes.root}>
				<Grid container spacing={16} alignItems="stretch" className={classes.background}>
				{koalaList.map((item, index) => {
					return (
						<KoalaListItem key={item._id} item={item} deleteKoala={this.deleteKoala} transferKoala={this.transferKoala} readyToTransferButton={this.readyToTransferButton}/>
					)
				})}
				</Grid>
			</div>
    );
  }
}

KoalaList.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = reduxState => ({
	reduxState,
});

export default compose(
	connect(mapStateToProps),
	withStyles(styles),
)(KoalaList);