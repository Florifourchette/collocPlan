import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewGroceryItem = ({
  itemForm,
  listIndex,
  activeList,
  list,
  groceryLists,
  setGroceryListsUpdated,
}) => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(list.items);

  const handleSumbit = () => {
    setItems([...items, { name: newItem, bought: false }]);
  };

  useEffect(() => {
    groceryLists[listIndex] = { ...list, items: items };
    setGroceryListsUpdated(true);
  }, [items]);

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
