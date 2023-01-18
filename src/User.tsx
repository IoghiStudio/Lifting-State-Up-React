import React, {useEffect, useState} from 'react';
import { UserType } from './App';

type Props = {
  user: UserType;
  deleteUser: () => void;
  renameUser: (userId: number, name: string) => void;
}

export const User: React.FC<Props> = ({
  user,
  deleteUser,
  renameUser,
}) => {
  const [username, setUsername] = useState(user.name);

  useEffect(() => {
    setUsername(user.name)
  }, [user.name]);

  return (
    <>
      {user.name} - {user.age}

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (username) {
            renameUser(user.id, username);
            setUsername('');
          } 
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />

        <button
          type="submit"
        >
          Save
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          deleteUser();
        }}
      >
        X
      </button>
    </>
  )
}