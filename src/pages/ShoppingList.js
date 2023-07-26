import React, { useEffect, useState } from 'react';
import shoppingList from '../samples/shoppingList';
import NewGroceryItem from '../components/NewGroceryItem';
import { Card, List } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';

const ShoppingList = () => {
  const [groceryLists, setGroceryLists] = useState(shoppingList());
  const [itemForm, setItemForm] = useState(false);
  const [activeList, setActiveList] = useState();
  const [groceryListsUpdated, setGroceryListsUpdated] =
    useState(false);
  const [newGroceryLists, setNewGroceryLists] =
    useState(groceryLists);
  console.log(groceryLists);

  const handleDeleteList = (index) => {
    setGroceryLists(
      groceryLists.filter(
        (list) => groceryLists.indexOf(list) !== index
      )
    );
  };

  const handleNewItem = (listIndex) => {
    setActiveList(listIndex);
    setItemForm((prev) => !prev);
  };

  const handleItemCrossed = (item, status) => {
    console.log({ ...item, bought: !status });
  };

  useEffect(() => {
    // console.log(newGroceryLists);
    // console.log(groceryListsUpdated);
    // console.log(groceryLists);
    if (groceryListsUpdated) {
      setGroceryLists(groceryLists);
      setGroceryListsUpdated(false);
    }
    // console.log(groceryLists);
  }, [groceryListsUpdated, newGroceryLists, groceryLists]);

  return (
    <div className="groceryPage">
      <h1>Groceries</h1>
      <div className="groceryLists">
        {' '}
        {groceryLists.map((list) => {
          return (
            <Card key={list.id}>
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
                    {list.items.map((item, index) => {
                      console.log(item);
                      return (
                        <List.Item
                          key={index}
                          className={
                            item.bought
                              ? 'itemCrossed'
                              : 'itemNotCrossed'
                          }
                        >
                          <Form.Check
                            id={`checkbox`}
                            defaultChecked={
                              item.bought ? true : false
                            }
                            onChange={() =>
                              handleItemCrossed(item, item.bought)
                            }
                          />
                          {item.name}
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
                          setNewGroceryLists={setNewGroceryLists}
                          setGroceryListsUpdated={
                            setGroceryListsUpdated
                          }
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
