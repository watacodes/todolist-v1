import { useState } from "react"
import Header from "../components/Header/Header"
import Quote from "../components/Quote/Quote"
import SubmitForm from "../components/SubmitForm/SubmitForm"
import TodoList from "../components/TodoList/TodoList"
import Progress from "../components/Progress/Progress"

export default function Homepage() {
  console.log("Rendering homepage...")
  const [todo, setTodo] = useState("")

  const [todoList, setTodoList] = useState(() => {
    const initialItems = localStorage.getItem("todos")
    return initialItems ? JSON.parse(initialItems) : []
  })

  return (
    <>
      <Header />
      <Quote />
      <SubmitForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Progress todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}
