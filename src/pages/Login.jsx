import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useUserSrote from "../stores/userStore";
import axios from "axios";

function Login() {
  const [formLogin, SetFormLogin] = useState({
    username: "Gon14",
    password: "password14",
  });

  const setUser = useUserSrote((state) => state.setUser);
  const setToken = useUserSrote((state) => state.setToken);
  const navigate = useNavigate();

  const hdChange = (e) => {
    const { name, value } = e.target;
    SetFormLogin((prv) => ({ ...prv, [name]: value }));
  };

  const hdSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://drive-accessible-pictures-send.trycloudflare.com/auth/login",
      formLogin,
    );

    const { username, passwors, accessToken } = res.data;
    setUser({ username, passwors });
    setToken(accessToken);
    navigate("/todos");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex  flex-col w-120 border bg-blue-100 rounded-2xl ">
        <form
          action=""
          onClick={hdSubmit}
          className=" flex flex-col p-20  gap-4 "
        >
          <p className="font-bold text-3xl">Please Login</p>
          <label htmlFor="">USERNAME :</label>
          <input
            type="text"
            name="username"
            onClick={hdChange}
            value={formLogin.username}
            className="border   bg-white"
          ></input>

          <label htmlFor="">PASSWORD :</label>
          <input
            type="password"
            name="password"
            onClick={hdChange}
            value={formLogin.password}
            className="border bg-white"
          ></input>

          <button className="border bg-white">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
