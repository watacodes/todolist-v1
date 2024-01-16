import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { TodoListProvider } from "./contexts/TodoListProvider.jsx"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>
)
