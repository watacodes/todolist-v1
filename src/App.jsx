// import { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CompletedTasks from "./pages/CompletedTasks"
import NavBar from "./components/NavBar/NavBar"
import NotFound from "./components/NotFound"

export default function App() {
  console.log("App loading...")
  return (
    <BrowserRouter basename="/todolist-v1/">
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/completed" element={<CompletedTasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
