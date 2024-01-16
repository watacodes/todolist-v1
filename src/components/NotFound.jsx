import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setInterval(() => {
      navigate("/")
    }, 2000)
  })

  return (
    <h1>
      404
      <br />
      We could not find anything :/
    </h1>
  )
}
