import React from "react";
import { Link } from "react-router-dom";
import styles from './Users.module.css'

export default function Users({ users }) {
 
  return (
    <div>
      {users.map((user) => ( 
        <ul key={user.id}>
          <li>
            <Link className={styles.users} key={user.id} to={`/${user.id}/tasks`}>
              {user.name}
            </Link>
          </li>
        </ul>


      ))}
    </div>
  );
}
