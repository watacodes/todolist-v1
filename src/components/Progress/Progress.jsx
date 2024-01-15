import { useEffect, useState } from "react"

export default function Progress({ todoList }) {
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
