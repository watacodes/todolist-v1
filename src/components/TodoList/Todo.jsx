import { useState } from "react"
import styles from "./Todo.module.css"

export function Todo({ todo, todoList, setTodoList }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  const handleClick = () => {
    setIsChecked(!isChecked)
    const newTodoList = todoList.map((item) => {
      if (item.task === todo.task && item.id === todo.id) {
        return { ...item, isCompleted: !isChecked }
      } else {
        return item
      }
    })
    setTodoList(newTodoList)
  }

  return (
    <div className={styles.todo}>
      <p className={`${isChecked ? `${styles.checked}` : ""}`}>{todo.task}</p>
      <p>
        Completed?
        <input
          type="checkbox"
          className={styles["todo__checkbox"]}
          onClick={handleClick}
        />
      </p>
    </div>
  )
}
