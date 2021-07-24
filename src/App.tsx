import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActionCreators } from './state/action-creators';
import { State } from './state/reducers';
import { User } from './core/models/User';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const { addUser, removeUser } = bindActionCreators(userActionCreators, dispatch);
  const users = useSelector((state: State) => state.users);

  const _addUser = (firstName: string, lastName: string): void => {
    const user: User = {
      firstName,
      lastName,
      identifier: Math.random().toString(36).substring(7)
    }

    addUser(user);

    setFirstName('');
    setLastName('')
  }

  return (
    <div className="App">
      <h1>Users:</h1>
      <ul>
        {
          users.map((u: User) => 
            <li>
              <p>{u.firstName} {u.lastName}</p>
              <button onClick={() => removeUser(u)}>Remove User</button>
            </li>)
        }
      </ul>
      <div>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button onClick={(e) => _addUser(firstName, lastName)}>Add User</button>
      </div>
    </div>
  );
}

export default App;
