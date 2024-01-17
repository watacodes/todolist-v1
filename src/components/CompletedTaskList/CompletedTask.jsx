import styles from "./CompletedTask.module.css"

export const CompletedTask = ({ taskName }) => {
  return <div className={styles.task}>{taskName}</div>
}
