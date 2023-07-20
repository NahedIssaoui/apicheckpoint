import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })

  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
