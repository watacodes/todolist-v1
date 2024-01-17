import { CompletedTaskList } from "../components/CompletedTaskList/CompletedTaskList"
import { useTodoListContext } from "../contexts/TodoListProvider"

export default function CompletedTasks() {
  console.log("Rendering stats...")
  const { todoList } = useTodoListContext()
  console.log(todoList)
  const completedTasks = todoList.filter((task) => task.isCompleted)

  return (
    <>
      <h2>Completed Tasks</h2>
      {completedTasks ? (
        <>
          <p>
            You have completed {completedTasks.length} tasks so far. Well done!
          </p>
          <div>
            <CompletedTaskList completedTasks={completedTasks} />
          </div>
        </>
      ) : (
        <p>Completed tasks to achieve your goal!</p>
      )}
    </>
  )
}
