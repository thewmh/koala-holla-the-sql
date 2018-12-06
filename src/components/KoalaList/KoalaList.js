import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';

class KoalaList extends Component {

  deleteKoala = (id) => {
    console.log('delete koala id: ', id);
    axios.delete(`/api/koalas/${id}`)
      .then((response) => {
        this.props.getKoalas();
      })
      .catch((error) => {
        alert('Error on Delete', error);
      });
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.reduxState.koalaList.map( (koala, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{koala.name}</TableCell>
                                <TableCell>{koala.gender}</TableCell>
                                <TableCell>{koala.age}</TableCell>
                                <TableCell>{koala.rtt ? ('True') : ('False')}</TableCell>
                                <TableCell>{koala.notes}</TableCell>
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
