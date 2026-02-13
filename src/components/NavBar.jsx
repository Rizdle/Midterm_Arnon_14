import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className=" bg-blue-400 h-10 flex text-3xl text-white ">
      <div className={"bg-blue-600 w-30  flex justify-center"}>
        <NavLink to="/">Lonig</NavLink>
      </div>
      <div className={"bg-blue-600 w-30  flex justify-center"}>
        <NavLink to="register">register</NavLink>
      </div>
      <div className={"bg-blue-600 w-30   flex justify-center"}>
        <NavLink to="todos">Todos</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
