import React from 'react';
import { UserType } from '../App';
import { User } from '../User';

type Props = {
  users: UserType[];
  deleteUser: (userId: number) => void;
  renameUser: (userId: number, name: string) => void;
}

export const UserList: React.FC<Props> = ({
  users,
  deleteUser,
  renameUser
}) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <User
          user={user}
          deleteUser={() => deleteUser(user.id)}
          renameUser={renameUser}
        />
      </li>
    ))}
  </ul>
);
