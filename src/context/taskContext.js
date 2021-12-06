import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);
export const TasksProvider = ({ children }) => {
  //URL de la apisecurity
  let url = "https://apiseg.bidassoa.pe/Public/api/Public";
  const [tasks, setTasks] = useState([{ id: "", title: "", description: "" }]);
  //Busqueda Kardex
  const [usKardex, setKardex] = useState([{}]);
  //Resultado Kardex
  const [items, setItems] = useState([]);

  const createTask = (title, description) =>
    setTasks([...tasks, { title, description, id: uuid() }]);

  const updateTask = (id, updateTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updateTask } : task
      ),
    ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        setKardex,
        usKardex,
        items,
        setItems,
        url,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
