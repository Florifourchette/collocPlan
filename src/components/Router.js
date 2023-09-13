import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Scheduler from '../pages/Scheduler';
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import ShoppingList from '../pages/ShoppingList';
import UserCreation from '../pages/UserCreation';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/scheduler" element={<Scheduler />}></Route>
        <Route path="/profile" element={<UserPage />}></Route>
        <Route path="/grocery" element={<ShoppingList />}></Route>
        <Route
          path="/userCreation"
          element={<UserCreation />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Router;
