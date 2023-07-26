import React, { useEffect, useState } from 'react';
import shoppingList from '../samples/shoppingList';
import NewGroceryItem from '../components/NewGroceryItem';
import { Card, List } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
import NewListForm from '../components/NewListForm';

const ShoppingList = () => {
  const [groceryLists, setGroceryLists] = useState(shoppingList());
  const [itemForm, setItemForm] = useState(false);
  const [listForm, setListForm] = useState(false);
  const [activeList, setActiveList] = useState();
  const [groceryListsUpdated, setGroceryListsUpdated] =
    useState(false);
  const [newGroceryLists, setNewGroceryLists] =
    useState(groceryLists);

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

  const handleItemCrossed = (
    item,
    status,
    listID,
    itemIndex,
    items,
    list
  ) => {
    const updatedItem = { ...item, bought: !status };
    items = items.map((item) => {
      if (items.indexOf(item) === itemIndex) {
        return updatedItem;
      } else {
        return item;
      }
    });
    const updatedList = { ...list, items: items };
    const updatedGroceryList = groceryLists.map((list) => {
      if (list.id === listID) {
        return updatedList;
      } else {
        return list;
      }
    });
    setGroceryLists(updatedGroceryList);
  };

  useEffect(() => {
    if (groceryListsUpdated) {
      setGroceryLists(groceryLists);
      setGroceryListsUpdated(false);
    }
  }, [groceryListsUpdated, newGroceryLists, groceryLists]);

  return (
    <div className="groceryPage">
      <h1>Groceries</h1>

      {listForm ? (
        <>
          <button onClick={() => setListForm((prev) => !prev)}>
            Cancel
          </button>
          <NewListForm
            setGroceryLists={setGroceryLists}
            groceryLists={groceryLists}
          />
        </>
      ) : (
        <>
          <button onClick={() => setListForm((prev) => !prev)}>
            Create new list
          </button>
        </>
      )}
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
                              handleItemCrossed(
                                item,
                                item.bought,
                                list.id,
                                index,
                                list.items,
                                list
                              )
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
