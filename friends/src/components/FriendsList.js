import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { axiosWithAuth } from '../Utils/AxiosWithAuth';

class FriendCard extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')

            .then(res => {
                // console.log('testing res', res.data)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log({ err }));

    }

    render() {
        return (
            <div>
                {this.state.friends.map((friend) => {
                    return <Card>
                        <CardBody>
                            <CardTitle>Friends: {friend.name}</CardTitle>
                            <CardSubtitle>Age:{friend.age}</CardSubtitle>
                            <CardSubtitle>Email:{friend.email}</CardSubtitle>
                        </CardBody>
                    </Card>
                })}


            </div>
        )
    };
};

export default FriendCard;


