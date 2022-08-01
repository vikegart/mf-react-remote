import './App.css';
import React from 'react';

import { FilterUser } from "./components/filterUser";
import { UserList } from "./components/userList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <FilterUser />
        </div>
        <div className="row">
          <UserList />
        </div>
      </header>
    </div>
  );
}

export default App;
