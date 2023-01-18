import React, { useState } from "react";

type Props = {
  addUser: (name: string, age: number) => void;
}

export const Form: React.FC<Props> = ({
  addUser
}) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (username) {
          addUser(username, age);
          setUsername('');
          setAge(0);
        }
      }}
    >
      <label htmlFor="username">
        Username:
      </label>

      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <br />

      <label htmlFor="age">
        Age:
      </label>

      <input 
        type="number"
        id="age"
        value={age}
        onChange={(event) => {
          setAge(+event.target.value); 
        }}
      />

      <br />

      <button
        type="submit"
      >
        Add User
      </button>
    </form>
  )
}