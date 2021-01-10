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
                    <input type="text" name="name"></input>
                    <input type="text" name="email"></input>
                    <button type="submit">Register</button>
                </form>
                <div>
                    {this.state.users.map(user => <p key={user._id}>{user._id} - {user.name} - {user.email}</p>)}
                </div>
            </div>
        )
    }
}

export default UserList;
