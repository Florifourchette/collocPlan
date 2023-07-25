import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Scheduler from '../pages/Scheduler';
import Home from '../pages/Home';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/scheduler" element={<Scheduler />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
