import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { createUser } from '../utils/APICalls/userCreation_API';

const UserCreation = () => {
  const [newUser, setNewUser] = useState({username:'', birthday:'', password:'', email:''})

  const handleSubmit = () => {
    console.log(newUser);
    createUser(newUser.username, newUser.email,newUser.birthday, newUser.password)
  }

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Username</label>
        <input
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Birthday</label>
        <input
          placeholder="Birthday"
          type="date"
          name="birthday"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default UserCreation
