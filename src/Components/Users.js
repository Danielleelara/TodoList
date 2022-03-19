import React from "react";

export default function Users({ users }) {
  console.log("aqui", users);
  return (
    <div>
      {users.map((user) => ( 
        <ul>
          <li key={user.id}>
            {user.name}
          </li>
        </ul>
      ))}
    </div>
  );
}
