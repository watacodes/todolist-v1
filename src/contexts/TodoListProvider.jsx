/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

const TodoListContext = createContext()

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const initialItems = localStorage.getItem("todos")
    return initialItems ? JSON.parse(initialItems) : []
  })

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  )
}

export const useTodoListContext = () => useContext(TodoListContext)
