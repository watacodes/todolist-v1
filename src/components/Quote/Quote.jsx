import { useEffect, useState } from "react"
import axios from "axios"

const QUOTE_API = "https://type.fit/api/quotes"
const randomIndex = Math.floor(Math.random() * 15)

export default function Quote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    axios
      .get(`${QUOTE_API}`)
      .then((response) => {
        const todaysQuote = response.data[randomIndex].text
        console.log(todaysQuote)
        setQuote(todaysQuote)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <blockquote className="quote">{quote}</blockquote>
    </>
  )
}
