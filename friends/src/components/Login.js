import React from 'react';
import axios from 'axios'
import { LoginForm } from './LoginForm';



class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        // console.log('testing')
        axios
            .get('http://localhost:5000/api.login')
    }

    login = e => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <h1> Friend Login</h1>
                <LoginForm />
            </div>
        )
    }
}

export default Login;