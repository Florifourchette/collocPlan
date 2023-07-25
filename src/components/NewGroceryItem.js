import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewGroceryItem = ({
  itemForm,
  listIndex,
  activeList,
  list,
  groceryLists,
  setGroceryLists,
}) => {
  const [newItem, setNewItem] = useState('');

  const handleSumbit = () => {
    list = {
      ...list,
      items: [...list.items, newItem],
    };
    console.log(list);
  };

  if (itemForm && listIndex === activeList) {
    return (
      <div>
        <Form onSubmit={handleSumbit}>
          <Form.Field>
            <input
              placeholder="What do you need?"
              onChange={(e) => {
                setNewItem(e.target.value);
              }}
            />
          </Form.Field>
          <Button type="submit">Add</Button>
        </Form>
      </div>
    );
  } else {
    <></>;
  }
};

export default NewGroceryItem;
