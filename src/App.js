import React from "react";
import AddUser from "./Users/AddUser";
import ListOfUSers from "./Users/ListOfUsers";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (username, userage) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  console.log(usersList);
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <ListOfUSers users={usersList} />
    </div>
  );
}

export default App;
