import { Button } from "../miscellaneous/Button"
import styles from "./SubmitForm.module.css"

export default function SubmitForm({ todo, setTodo, todoList, setTodoList }) {
  const handleSetTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      task: todo,
      id: Date.now(),
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
    <form action="" className={styles["submit-form"]} onSubmit={handleSetTodo}>
      <h1 className={styles["form__header"]}>
        What are you going to work on today?
      </h1>
      <div className={styles["form__input-row"]}>
        <label htmlFor="task" className={styles["form__label"]}></label>
        <input
          type="text"
          placeholder="Your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          id="task"
          className={styles["form__input"]}
        />
        <Button>Add task</Button>
      </div>
    </form>
  )
}
