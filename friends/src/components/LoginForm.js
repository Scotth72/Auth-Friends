import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const LoginForm = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="userName">User Name</Label>
                <Input type="text"
                    name="name"
                    id="Name"
                    placeholder="Enter Username Here" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter password here" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}