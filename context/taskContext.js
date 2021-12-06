import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);
export const TasksProvider = ({ children }) => {
  //URL de la apisecurity
  let url = "https://apiseg.bidassoa.pe/Public/api/Public";
  //Busqueda Kardex
  const [usKardex, setKardex] = useState([{}]);
  //Resultado Kardex
  const [items, setItems] = useState([]);

  

  return (
    <TaskContext.Provider
      value={{
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
