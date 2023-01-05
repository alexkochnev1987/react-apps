import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/card/CardList';
import Layout from './components/Layout';
import { User } from './components/registration/Form';
import { MyGlobalContext } from 'components/Context/SearchContext';
import Login from 'components/auth/Login';
import Registration from 'components/auth/Registration';
import Boards from 'components/dashboard/Boards';
import PageNotFound from 'components/PageNotFound';
import Auth from 'components/auth/auth';
import EditUser from 'components/auth/EditUser';
import IsAuth from 'components/HOC/IsAuth';
import ExerciseList from 'components/exercise/ExerciseList';

export const pages = ['cards', 'registration', 'login', 'dashboard', 'exercise'];
function App() {
  const [cards, setCards] = useState<User[]>([]);
  const addCard = (user: User) => {
    setCards([...cards, user]);
  };
  const [search, setSearch] = useState<string>('');

  return (
    <MyGlobalContext.Provider value={{ search, setSearch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="exercise" element={<ExerciseList />} />
            <Route path="dashboard" element={<Auth child={<Boards />} />} />
            <Route path="edit" element={<Auth child={<EditUser />} />} />
            <Route path="login" element={<IsAuth child={<Login />} />} />
            <Route path="registration" element={<IsAuth child={<Registration />} />} />
            <Route path="/cards" element={<CardList />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyGlobalContext.Provider>
  );
}

export default App;
