import React, { Component } from 'react';

export class AddUserForm extends Component{
    state={
        name:'',
        email:'',
    }
    handleChange = ({target:{name,value}}) =>{
        this.setState({
            [name]:value,
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {addUser}=this.props;
        addUser({...this.state});
        this.setState({name:'',email:''})
    }

    render(){
        const {name,email} = this.state;
        return(
            <form onSubmit={this.handleSubmit} autoComplete='off'>
                <label>
                    Name:
                    <input name='name' value={name} onChange={this.handleChange}/>
                </label>
                <label>
                    Email:
                    <input name='email' value={email} onChange={this.handleChange}/>
                </label>
                <button type='submit'>Save</button>
            </form>
        )
    }
}