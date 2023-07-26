const shoppingList = () => {
  return [
    {
      id: 1,
      name: 'shopping list 1',
      items: [
        { name: 'item 1', bought: false },
        { name: 'item 2', bought: true },
        { name: 'item 3', bought: true },
      ],
    },
    {
      id: 2,
      name: 'shopping list 2',
      items: [
        { name: 'item 4', bought: true },
        { name: 'item 5', bought: true },
        { name: 'item 6', bought: false },
      ],
    },
  ];
};

export default shoppingList;
