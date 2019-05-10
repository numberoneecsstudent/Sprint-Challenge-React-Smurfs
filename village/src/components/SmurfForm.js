import React from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom';

class SmurfForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
           height: '',
        };
    } 
    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value,
        });
    }
    onAddSmurf = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.height) return alert('Please fill out all fields');
        const [name, age,height] = [this.state.name, Number(this.state.age), this.state.height];
        this.setState({name: '', age: '',height: ''});
        axios.post('http://localhost:3333/smurfs', {
            name,
            age,
           height,
        })
            .then(res => {
                this.props.updateList(res.data);
                this.props.history.push('/');
            })
            .catch(err => { throw new Error(err) });
    }
    render(){
        return (
            <div className="input-container">
                <form onSubmit={this.onAddSmurf} className="smurf-input">
                    <Link to="/" className="return-home">Home</Link>
                    <p>Enter new smurf's information:</p>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.onInputChange(e, 'name')} />
                    <input type="number" placeholder="Age" value={this.state.age} onChange={(e) => this.onInputChange(e, 'age')} />
                    <input type="height" placeholder="Height" value={this.state.height} onChange={(e) => this.onInputChange(e, 'height')} />
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        );
    } 
}
export default SmurfForm; 