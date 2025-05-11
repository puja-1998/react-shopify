import React, {useEffect} from "react";
import "../CSS/Users.css";
import Navbar from "./Navbar";
import Radio from "./Radio";
import {useSelector,useDispatch} from "react-redux"
import { setuserData } from "../Redux-Toolkit/Slices/userData";
import {setconstUserData}  from "../Redux-Toolkit/Slices/constUserData";

function Users() {
  const data=useSelector(state=>state.userData)
  const dispatch=useDispatch()
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=20")
    .then(res=>res.json())
    .then(data=>{dispatch(setuserData(data.results));dispatch(setconstUserData(data.results))})
    .catch(e=>console.log(e))
  },[])
  return (
    <>
      <Navbar />
      <div className="users">
        <h2>User Deatils</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum
          aspernatur atque consequatur assumenda fuga libero a! Iusto ullam
          aliquam sunt quos minima facere ex quibusdam voluptatum eligendi
          autem, quisquam adipisci aliquid cumque a assumenda aut dolorem, porro
          ipsa explicabo! Ab in ullam provident distinctio accusamus dolorum nam
          aspernatur quia rem iure, corporis sit consectetur sequi blanditiis
          nemo explicabo, quas maxime molestias sunt. Rerum repellat excepturi
          illo eius minus commodi, atque laudantium quis necessitatibus suscipit
          omnis aut delectus. Excepturi totam a adipisci sequi quis, numquam
          ullam voluptatibus quibusdam repudiandae quae at ratione odit quasi
          omnis tempore ea maiores corporis assumenda.
        </p>
        <Radio/>
        <table frame="box" rules="all" className="table" >
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th >EMAIL</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item=>{
              return (<tr key={item.login.uuid}>
                <td><img src={item.picture.medium} alt={item.login.uuid} width="100px" height="100px" loading="lazy" /></td>
                <td>{item.name.first}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
