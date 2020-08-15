import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            name : '',
            breed : '',
            birthday :'',
            gender : '',
            weight:'',
            spayed: ''
        }
    }
    handleSubmit= () => alert(`Dog name is ${this.state.name}, breed : ${this.state.breed}, Birthday : ${this.state.birthday}, Gender : ${this.state.gender}, Spayed/neutered : ${this.state.spayed} ,weight : ${this.state.weight}`)
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='label'>
                    Name<br/>
                    <input name='name' type ='text' value={this.state.name} onChange={e=>this.setState({name: e.target.value})}/>
                    <br/>
                    Breed<br/>
                    <input name='Breed' type ='text' value={this.state.breed} onChange={e=>this.setState({breed: e.target.value})}/>
                    <br/>
                    Birthday<br/>
                    <input name='Birthday' type ='text' value={this.state.birthday} onChange={e=>this.setState({birthday: e.target.value})}/>
                    <br/>
                    Gender<br/>
                    <input name='Gender-male' type ='button' value='Male' onClick={e=>this.setState({gender : e.target.value})}/>
                    <input name='Gender-female' type ='button' value='Female' onClick={e=>this.setState({ gender : e.target.value})}/>
                    <br/>
                    Spayed or Neutered<br/>
                    <input name='Spayed/Neutered' type ='button' value = 'Yes' onClick={e=>this.setState({ spayed : e.target.value})}/>
                    <input name='Spayed/Neutered' type ='button' value = 'No' onClick={e=>this.setState({ spayed : e.target.value})}/>
                    
                    <br/>
                    Weight<br/>
                    <input name='name' type ='button' value='0 - 25 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    <input name='name' type ='button' value='25 - 50 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    <input name='name' type ='button' value='50 - 75 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    <input name='name' type ='button' value='26 - 50 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    </div>

                    <br/>

                    <input type='submit' value='submit'/>
                </form>
                
            </div>
        );
    }
}

export default Form;