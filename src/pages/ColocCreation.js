import React from 'react'
import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { getByUsername } from '../utils/APICalls/getByUsername_API';

const ColocCreation = () => {
 const [newColoc, setNewColoc] = useState({
   colocName: '',
   creation_date: '',
   colocIds: [],
 });
    const [user, setUser] = useState({})

    const handleSubmit = () => {
     setNewColoc((prev) => ({
       ...prev,
       colocIds: [...newColoc.colocIds, user.id],
     }));
     console.log(newColoc);
    };
    
    const handleFindUser = async (username) =>{
        console.log(username);
        const user = await getByUsername(username)
        console.log(user)
        if (user !== undefined) {
            setUser(user);
            console.log(user)
        }
        console.log(newColoc)
   }
 
 const handleChange = (e) => {
//    setNewUser((prev) => ({
//      ...prev,
//      [e.target.name]: e.target.value,
     //    }));
       

 };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name of the new coloc</label>
          <input
            placeholder="coloc name"
            name="colocName"
            onChange={handleChange }
          />
        </Form.Field>

        <Form.Field>
          <label>Other coloc</label>
          <input
            placeholder="username"
            name="username"
            onChange={(e)=>handleFindUser(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">add another flatmate</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ColocCreation
