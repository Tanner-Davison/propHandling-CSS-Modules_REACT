import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [age, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || age.trim().length === 0) {
      setEnteredUsername("");
      setEnteredAge("");
      return setError({
        title: "invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    }
    if (+age < 1) {
      return setError({
        title: "Invalid Age",
        message: "Please enter a valid age (non-empty value)",
      });
    }
    props.onAddUser(enteredUsername, age);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageEventHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageEventHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
