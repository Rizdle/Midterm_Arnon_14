import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className=" bg-blue-400 h-10 flex text-3xl text-white ">
      <div className={" flex justify-center hover:bg-blue-600 w-30 "}>
        <NavLink to="/">Login</NavLink>
      </div>
      <div className={"  flex justify-center hover:bg-blue-600 w-30"}>
        <NavLink to="register">Register</NavLink>
      </div>
      <div className={"flex justify-center hover:bg-blue-600 w-30"}>
        <NavLink to="todos">ToDoS</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
