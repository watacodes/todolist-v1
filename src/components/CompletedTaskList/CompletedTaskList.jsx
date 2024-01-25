import { CompletedTask } from "./CompletedTask"

export const CompletedTaskList = ({ completedTasks }) => {
  console.log("completed task list here:", completedTasks)
  return (
    <>
      <ul>
        <li>
          {completedTasks.map((task, idx) => (
            <CompletedTask task={task} key={idx} />
          ))}
        </li>
      </ul>
    </>
  )
}
