import React, { useEffect, useState } from "react";
import { getUsers } from "../../../services/Users/userService";
import { UserList } from "./UserList";

export const UserAdminContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Users = getUsers();
    Users.then((res) => {
      console.log(res.data);
      setUsers(res.data);
    }).catch((err) => {
      console.error("Error:", err);
      setError(err);
    });
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};
