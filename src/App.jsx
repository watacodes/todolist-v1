// import { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CompletedTasks from "./pages/CompletedTasks"
import ItemNotFound from "./components/NotFound"

export default function App() {
  console.log("App loading...")
  return (
    <BrowserRouter basename="/todolist-v1/">
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="*" element={<ItemNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
