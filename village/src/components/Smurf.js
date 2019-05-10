import React from 'react';

class Smurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            nameInput: this.props.name,
            ageInput: this.props.age,
            heightInput: this.props.height,
        };
    }
    handleInput = (e, type) => {
        const key = type + 'Input';
        this.setState({ [key]: e.target.value });
    }
    handleEdit = (e) => {
        e.preventDefault();
        if (!this.state.nameInput || !this.state.ageInput || !this.state.heightInput) return alert('Please fill out all fields');
        this.props.handleUpdate(this.state.nameInput, this.state.ageInput, this.state.heightInput, this.props.id);
        this.setState({
            editing: false,
        });
    }
    render(){
        return this.state.editing ? (
            <form onSubmit={this.handleEdit}>
                <p>
                    <span>Name:</span> 
                    <input type="text" 
                        placeholder="Name" 
                        value={this.state.nameInput} 
                        onChange={(e) => this.handleInput(e, 'name')} 
                    />
                </p>
                <p>
                    <span>Age:</span> 
                    <input type="number" 
                        placeholder="Age" 
                        value={this.state.ageInput} 
                        onChange={(e) => this.handleInput(e, 'age')}  
                    />
                </p>
                <p>
                    <span>Height(cm):</span> 
                    <input type="height" 
                        placeholder="height" 
                        value={this.state.heightInput} 
                        onChange={(e) => this.handleInput(e, 'height')}  
                    />
                </p>
                <button className = 'modify'>Submit</button>
            </form>
        ) : (
            <div>
                <p><span>Name:</span> {this.props.name}</p>
                <p><span>Age:</span> {this.props.age}</p>
                <p><span>Height(cm):</span> {this.props.height}</p>

            </div>
        );
    }
}

export default Smurf;