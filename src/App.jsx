import { useEffect, useState } from "react"
import "./App.css"

export default function App() {
  const [todo, setTodo] = useState("")

  const [todoList, setTodoList] = useState(() => {
    const initialItems = localStorage.getItem("todos")
    return initialItems ? JSON.parse(initialItems) : []
  })

  return (
    <div className="app">
      <Header />
      <SubmitForm
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Stats todoList={todoList} />

      {todoList.length ? (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <NoItem />
      )}
    </div>
  )
}

function Header() {
  return <h1 className="header">Minimalistic Todo List</h1>
}

function SubmitForm({ todo, setTodo, todoList, setTodoList }) {
  const handleSetTodo = (e) => {
    e.preventDefault()

    const newTodo = {
      task: todo,
      isCompleted: false,
    }

    setTodoList(() => {
      const newTodoList = [...todoList, newTodo]
      localStorage.setItem("todos", JSON.stringify(newTodoList))
      return newTodoList
    })

    setTodo("")
  }

  return (
    <form action="" className="submit-form" onSubmit={handleSetTodo}>
      <h1 className="form__header">What are you going to work on today?</h1>
      <div className="form__input-row">
        <label htmlFor="task" className="form__label"></label>
        <input
          type="text"
          placeholder="Your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          id="task"
          className="form__input"
        />
        <button className="btn">Add Task</button>
      </div>
    </form>
  )
}

function Stats({ todoList }) {
  const totalTasks = todoList.length
  const [count, setCount] = useState(0)

  useEffect(() => {
    const completedTasks = todoList.filter((todo) => todo.isCompleted)
    console.log(completedTasks, todoList)
    setCount(completedTasks.length)
  }, [todoList])

  return (
    <div>
      {count === 0 ? (
        <p>You have {totalTasks} tasks to complete. Good luck!</p>
      ) : (
        <p>
          {count}/{totalTasks} completed! (
          {Math.floor((count / totalTasks) * 100)}
          %)
        </p>
      )}
    </div>
  )
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="todos">
      <li>
        {todoList.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </li>
    </ul>
  )
}

function Todo({ todo, todoList, setTodoList }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  const handleClick = () => {
    setIsChecked(!isChecked)
    const newTodoList = todoList.map((item) => {
      if (item.task === todo.task) {
        return { ...item, isCompleted: !isChecked }
      } else {
        return item
      }
    })
    setTodoList(newTodoList)
  }

  return (
    <div className="todo">
      <p className={`${isChecked ? "checked" : ""}`}>{todo.task}</p>
      <p>
        Completed?
        <input
          type="checkbox"
          className="todo__checkbox"
          onClick={handleClick}
        />
      </p>
    </div>
  )
}

function NoItem() {
  return <h2>No tasks added yet!</h2>
}
