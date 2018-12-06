import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddKoalaForm extends Component {

    state = {
            name: '',
            gender: 'f',
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
        return (
            <div>
                <input required value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter the koala's name" name="name"></input>
                <select required onChange={this.handleChange} placeholder="Enter the koala's gender" name="gender">
                <option value='f'>F</option>
                <option value='m'>M</option>
                </select>
                <input required value={this.state.age} onChange={this.handleChange} type="number" placeholder="Enter the koala's age" name="age"></input>
                <select required onChange={this.handleChange} placeholder="Enter the koala's ready to transfer status" name="rtt">
                <option value={false}>False</option>
                <option value={true}>True</option>
                </select>
                <textarea value={this.state.notes} required onChange={this.handleChange} type="text" placeholder="Enter any notes about the koala" name="notes"></textarea>
                <button onClick={this.imprisonTheKoala}>Imprison the Koala</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });

export default connect(mapStateToProps)(AddKoalaForm);