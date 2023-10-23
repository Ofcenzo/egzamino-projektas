import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center ">
      
        <table className="table">
        <thead>
         <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>Age</th>
          </tr> 
        </thead>
        <tbody>
        {
          users.map(user => {
           <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
           </tr> 
        })
      }
        </tbody>
    </table>
    </div>
  );
}

export default App;