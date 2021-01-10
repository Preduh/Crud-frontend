import React, { Component } from 'react';
import axios from 'axios'

class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://register-mongoose.herokuapp.com/users').then(response => {
            console.log(response.data)
            this.setState({users: response.data})
        })
    }

    render() {
        return (
            <div>
                <form action="https://register-mongoose.herokuapp.com/register" method="POST">
                    <input type="text" name="name" placeholder="Insert your name..."></input>
                    <input type="email" name="email" placeholder="Insert your email..."></input>
                    <button type="submit">Register</button>
                </form>
                <div>
                    {this.state.users.map(user => 
                        <form key={user._id} action={"https://register-mongoose.herokuapp.com/deleteUser/"+ user._id} method="POST">
                            <p>{user.name} - {user.email}</p>
                            <button type="submit">Remove</button>
                        </form>
                    )}
                </div>
            </div>
        )
    }
}

export default UserList;
