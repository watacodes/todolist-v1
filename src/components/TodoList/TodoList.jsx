import { Todo } from "./Todo"
import styles from "./TodoList.module.css"

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul className={styles.todos}>
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
