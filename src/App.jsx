// import { useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Stats from "./components/Stats/Stats"

export default function App() {
  console.log("App loading...")
  return (
    <BrowserRouter basename="/todolist-v1/">
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<div> no item found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
