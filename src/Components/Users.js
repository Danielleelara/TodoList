import React from "react";
import { Link } from "react-router-dom";

export default function Users({ users }) {
  console.log("aqui", users);
  return (
    <div>
      {users.map((user) => ( 
        <ul key={user.id}>
          <li>
            <Link key={user.id} to={`/${user.id}/tasks`}>
              {user.name}
            </Link>
          </li>
        </ul>


      ))}
    </div>
  );
}
