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
    handleSubmit= (event) => {
        alert(`Dog name is ${this.state.name}, breed : ${this.state.breed}, Birthday : ${this.state.birthday}, Gender : ${this.state.gender}, Spayed/neutered : ${this.state.spayed} ,weight : ${this.state.weight}`);
        // event.preventDefault();

}
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
                    <input name='Birthday' type ='Date' value={this.state.birthday} onChange={e=>this.setState({birthday: e.target.value})}/>
                    <br/>
                    Gender
                    <br/>
                    
                    
                    <input name='Gender-male' list='gender' onChange={e=>this.setState({gender : e.target.value})}/>
                    <datalist id="gender">
                        <option value ="Male"/>
                        <option value="Female"/>
                    </datalist>
                    {/* <input name='Gender-female' type ='radio' value='Female' onClick={e=>this.setState({ gender : e.target.value})}/> */}
                    
                    <br/>
                    Spayed or Neutered<br/>
                    <input name='Spayed/Neutered' list="treated" onChange={e=>this.setState({ spayed : e.target.value})}/>
                    <datalist id="treated">
                        <option value="Yes"/>
                        <option value="No"/>
                    </datalist>
                    {/* <input name='Spayed/Neutered' type ='button' value = 'No' onClick={e=>this.setState({ spayed : e.target.value})}/> */}
                    
                    <br/>
                    Weight<br/>
                    <input name='Weight'  list="weight"   onChange={e=>this.setState({ weight : e.target.value})}/>
                    <datalist id="weight">
                        <option value='0 - 25 lb'/>
                        <option value='25 - 50 lb'/>
                        <option value='50 - 75 lb'/>
                        <option value='26 - 50 lb'/>
                    </datalist>
                    {/* <input name='name' type ='button' value='25 - 50 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    <input name='name' type ='button' value='50 - 75 lb' onClick={e=>this.setState({ weight : e.target.value})}/>
                    <input name='name' type ='button' value='26 - 50 lb' onClick={e=>this.setState({ weight : e.target.value})}/> */}
                    </div>
                    
                    {/* <input type="checkbox" id="toggle" value ="male" class="checkbox" onClick={e=>this.setState({gender : e.target.value})} />
                    <label for="toggle" class="switch"></label> */}

                    <br/>

                    <input type='submit' value='submit'/>
                </form>
                
            </div>
        );
    }
}

export default Form;