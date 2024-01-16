import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles["navbar__link"]}>
          <Link to="/">To-dos</Link>
        </li>
        <li className={styles["navbar__link"]}>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
