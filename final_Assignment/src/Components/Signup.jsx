import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signupFailuer,
  signupfsuccess,
  signupLoading,
} from "../Redux/Signup/Action";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [username, SetUsername] = useState("");
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [mobile, Setmobile] = useState("");
  const [description, Setdescription] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const signuphandlechnage = () => {
    const userdetails = {
      username,
      name,
      email,
      mobile,
      description,
      password,
    };
    dispatch(signupLoading());
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(userdetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(signupfsuccess());
        console.log(res.message);
        // alert("done")
        navigate("/login");
      })
      .catch((err) => dispatch(signupFailuer()));
  };
  return (
    <>
      <h4>Signup form</h4>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => Setname(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => Setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter mobile"
        value={mobile}
        onChange={(e) => Setmobile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => Setdescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <button onClick={signuphandlechnage}>Signup</button>
    </>
  );
};
