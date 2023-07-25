import React, { useEffect, useState } from 'react';
import shoppingList from '../samples/shoppingList';
import NewGroceryItem from '../components/NewGroceryItem';
import { Card, List } from 'semantic-ui-react';

const ShoppingList = () => {
  const [groceryLists, setGroceryLists] = useState(shoppingList());
  const [itemForm, setItemForm] = useState(false);
  const [activeList, setActiveList] = useState();
  console.log(groceryLists);

  const handleDeleteList = (index) => {
    setGroceryLists(
      groceryLists.filter(
        (list) => groceryLists.indexOf(list) !== index
      )
    );
  };

  const handleNewItem = (listIndex) => {
    console.log('clicked');
    setActiveList(listIndex);
    setItemForm((prev) => !prev);
  };

  return (
    <div className="groceryPage">
      <h1>Groceries</h1>
      <div className="groceryLists">
        {' '}
        {groceryLists.map((list) => {
          return (
            <Card key={groceryLists.indexOf(list)}>
              <Card.Content>
                <Card.Header>
                  <h4>{list.name}</h4>
                </Card.Header>
                <button
                  onClick={() =>
                    handleDeleteList(groceryLists.indexOf(list))
                  }
                >
                  Delete list
                </button>
                <Card.Description>
                  <List>
                    {list.items.map((item) => {
                      return (
                        <List.Item key={list.items.indexOf(item)}>
                          {item}
                        </List.Item>
                      );
                    })}
                    <List.Item
                      onClick={() =>
                        handleNewItem(groceryLists.indexOf(list))
                      }
                    >
                      <strong>
                        {itemForm &&
                        groceryLists.indexOf(list) === activeList
                          ? 'Cancel'
                          : 'Add new Item'}
                      </strong>
                    </List.Item>
                    <List.Item>
                      {
                        <NewGroceryItem
                          listIndex={groceryLists.indexOf(list)}
                          itemForm={itemForm}
                          activeList={activeList}
                          list={list}
                          groceryLists={groceryLists}
                          setGroceryLists={setGroceryLists}
                        />
                      }
                    </List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
