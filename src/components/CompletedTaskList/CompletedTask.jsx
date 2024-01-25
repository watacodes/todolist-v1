import styles from "./CompletedTask.module.css"

export const CompletedTask = ({ task }) => {
  const date = new Date(task.id).toISOString()
  console.log(date)
  return <div className={styles.task}>{task.task}</div>
}
