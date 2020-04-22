import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { axiosWithAuth } from '../Utils/AxiosWithAuth';
import 'bootstrap/dist/css/bootstrap.min.css';

class FriendCard extends React.Component {
    state = {
        friends: [],
        newFriend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = e => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // console.log('testing res', res.data)
                this.setState({
                    friends: [...this.state.friends, ...res.data]
                })
            })
            .catch(err => console.log({ err }));

    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        axiosWithAuth()
            .post('/api/friends', this.state.newFriend)
            .then(res => console.log('POST new Friend', res))
            .catch(err => console.log({ err }))
    }


    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (<Card key={friend.id}>
                        <CardBody>
                            <CardTitle>Friends: {friend.name}</CardTitle>
                            <CardSubtitle>Age:{friend.age}</CardSubtitle>
                            <CardSubtitle>Email:{friend.email}</CardSubtitle>
                        </CardBody>

                    </Card>
                    )
                })}
                < Card onSubmit={this.onSubmit}>
                    <CardTitle type="name">Name</CardTitle>
                    <input htmlFor="name"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChanges} />
                    <label type="age">Age</label>
                    <input htmlFor="number"
                        name="age"
                        placeholder="Enter Age"
                        value={this.state.newFriend.age}
                        onChange={this.handleChanges} />
                    <label type="email">Email</label>
                    <input htmlFor="email"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.newFriend.email}
                        onChange={this.handleChanges} />
                    <Button >Add New Friend</Button>
                </Card>

            </div>
        )
    };
};

export default FriendCard;
