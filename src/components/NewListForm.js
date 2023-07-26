import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const NewListForm = ({ setGroceryLists, groceryLists }) => {
  const [newList, setNewList] = useState({
    name: '',
    items: { name: '', bought: false },
  });

  const handleSumbit = () => {
    setGroceryLists([...groceryLists, newList]);
  };

  const handleChange = (e) => {
    if (e.target.name === 'itemName') {
      setNewList((prev) => ({
        ...prev,
        items: [{ name: e.target.value, bought: false }],
      }));
    } else {
      setNewList((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    console.log(newList);
  };

  return (
    <div>
      <Form onSubmit={handleSumbit}>
        <Form.Field>
          <input
            placeholder="What's the name of your list?"
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="What's the first item?"
            name="itemName"
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default NewListForm;
