import React from 'react';
import { axiosWithAuth } from '../Utils/AxiosWithAuth';
// import { LoginForm } from './LoginForm';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('./protected')
            })
            .catch(err => console.log({ err }))
    };


    render() {
        return (
            <div>
                <h1> Friend Login</h1>

                <Form onSubmit={this.login}>
                    <FormGroup>
                        <Label for="userName">User Name</Label>
                        <Input type="text"
                            name="username"
                            id="name"
                            placeholder="Enter Username Here"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Enter password here"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button>Submit</Button> <br />


                </Form>

            </div>
        )
    }
}

export default Login;