import React from "react";
import { useState } from "react";
import { useTodoData } from "../stores/todoData";
import { useEffect } from "react";
import axios from "axios";

export default function Todos() {
  const [newtasks, setNewTasks] = useState();

  const user = useTodoData((state) => state.user);
  const loading = useTodoData((state) => state.loading);
  const error = useTodoData((state) => state.error);
  const fetchUser = useTodoData((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-50">{error}</p>;

  const hdInputChange = (e) => {
    setNewTasks(e.target.value);
  };

  const addTask = async (e) => {
    const ADD_TASK = `https://drive-accessible-pictures-send.trycloudflare.com/todos/14`;

    try {
      console.log(newtasks);
      const res = await axios.post(ADD_TASK, { content: newtasks });
      setNewTasks("");
      fetchUser();
    } catch (err) {}
  };

  const RemoveTask = async (id) => {
    await axios.delete(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/14/${id}`,
    );
    fetchUser();
  };

  return (
    <div className="flex justify-center min-h-screen ">
      <div className="flex justify-center  flex-col border gap-4 w-100 h-120  bg-white rounded-2xl p-11">
        <p className="text-center text-3xl">TO DO LIST</p>
        <br />
        <div className="flex justify-center">
          <form action=""></form>
          <input
            type="text"
            className="border bg-white"
            placeholder="Enter a Task..."
            value={newtasks}
            onChange={hdInputChange}
          />
          <button onClick={addTask} className="border  bg-blue-300 bg- w-20">
            Add
          </button>
        </div>

        <div className="flex ">
          <ul className="w-100">
            {user?.map((list) => (
              <li id={list.id} className="  flex justify-between ">
                <div>
                  <input type="checkbox" />
                  <span>{list.content}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      edit(list.id);
                    }}
                    className="border bg-blue-300 w-10 rounded-1xl "
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      RemoveTask(list.id);
                    }}
                    className="border bg-blue-300 w-10 rounded-1xl"
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
