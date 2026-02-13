import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex  flex-col w-120 border bg-blue-100 rounded-2xl ">
        <form
          action=""
          // onClick={hdSubmit}
          className=" flex flex-col p-20  gap-2 "
        >
          <p className="font-bold text-4xl">Register</p>
          <br />
          <label htmlFor="">USERNAME :</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            // onClick={hdChange}
            value={""}
            className="border   bg-white"
          ></input>

          <label htmlFor="">PASSWORD :</label>
          <input
            placeholder="password "
            type="password"
            name="password"
            // onClick={hdChange}

            className="border bg-white"
          ></input>

          <label htmlFor="">Email :</label>
          <input
            placeholder="sample@mail.com"
            type="email"
            name="text"
            // onClick={hdChange}

            className="border bg-white"
          ></input>

          <label htmlFor="">Phone :</label>
          <input
            placeholder="+66 08888888"
            type="number"
            name="phone"
            // onClick={hdChange}
            value={"#"}
            className="border bg-white"
          ></input>
          <br />

          <button className="border bg-white">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
