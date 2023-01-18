import React, { useState } from 'react';
import './App.scss';
import { Form } from '../Form';
import { UserList } from '../UserList';

const usersFromServer = [
  {
    id: 1,
    name: 'Nicusor',
    age: 21,
  },
  {
    id: 2,
    name: 'Denisa',
    age: 19,
  },
];

export type UserType = {
  id: number;
  name: string;
  age: number;
}

export const App: React.FC = () => {
  const [users, setUsers] = useState(usersFromServer);

  const addUser = (name: string, age: number) => {
    setUsers(state => {
      const newUser = {
        id: state.length + 1,
        name,
        age,
      }

      return [...state, newUser];
    })
  }

  const deleteUser = (userId: number) => {
    setUsers(state => (
      state.filter(user => user.id !== userId)
    ));
  };

  const renameUser = (userId: number, name: string) => {
    setUsers(state => (
      state.map(user => {
        if (userId !== user.id) {
          return user;
        }

        return {
          id: user.id,
          name,
          age: user.age,
        };
      })
    ))
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          renameUser(1,'lala')
        }}
      >
        rename first user
      </button>
      <Form addUser={addUser} />

      <UserList
        users={users} 
        deleteUser={deleteUser} 
        renameUser={renameUser}
      />
    </div>
  );
}
