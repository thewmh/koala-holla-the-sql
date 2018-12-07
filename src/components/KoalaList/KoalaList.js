import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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
	
	handleCheck = item => event => {
		this.setState({
			[event.target.name]: event.target.checked
		})
	}

  render() {

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Ready to Transfer</TableCell>
                        <TableCell>Notes</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.reduxState.koalaList.map( (koala, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{koala.name}</TableCell>
                                <TableCell>{koala.gender}</TableCell>
                                <TableCell>{koala.age}</TableCell>
                                <TableCell>{this.readyToTransferButton(koala.rtt, koala, koala._id)}</TableCell>
                                <TableCell>{koala.notes}</TableCell>
                                <TableCell onClick={() => this.deleteKoala(koala._id)}><Button>Delete</Button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
  }

}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(KoalaList);
