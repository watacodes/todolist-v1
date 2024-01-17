/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

const TodoListContext = createContext()

export const TodoListProvider = ({ children }) => {
  const storedTodos = localStorage.getItem("todos")
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : []
  const [todoList, setTodoList] = useState(initialTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  )
}

export const useTodoListContext = () => useContext(TodoListContext)
