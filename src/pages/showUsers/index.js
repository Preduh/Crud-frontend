import React, { Component } from 'react';
import axios from 'axios'
import { FormRegister, FormContent } from './styles'

class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://register-mongoose.herokuapp.com/users').then(response => {
            this.setState({users: response.data})
        })
    }

    render() {
        return (
            <div>
                <FormRegister>
                <form action="https://register-mongoose.herokuapp.com/register" method="POST">
                    <label for="name">Name</label>
                    <input type="text" name="name" autoComplete="off"></input>
                    <label for="email">Email</label>
                    <input type="email" name="email" autoComplete="off"></input>
                    <button className="register" type="submit">Register</button>
                </form>
                </FormRegister>
                <div>
                    {this.state.users.map(user => 
                        <FormContent>
                            <form key={user._id} action={"https://register-mongoose.herokuapp.com/deleteUser/"+ user._id} method="POST">
                                <p>{user.name} - {user.email}</p>
                                <button className="remove" type="submit">Remove</button>
                            </form>
                        </FormContent>
                    )}
                </div>
            </div>
        )
    }
}

export default UserList;
