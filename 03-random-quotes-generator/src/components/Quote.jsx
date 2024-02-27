import { useEffect, useState } from "react"

export function Quote() {

  const [quote, setQuote] = useState(null)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data.content)
        setAuthor(data.author)
      })
      .catch(error => console.error(error))
  }, [])

  const handleClicktoGetQuote = async () => {
    const res = await fetch("https://api.quotable.io/random")
    const data = await res.json()
    setQuote(data.content)
    setAuthor(data.author)
  }

  return (
    <div className="flex flex-col mt-5 gap-y-5">
      <div className="h-auto flex flex-col gap-y-5">
        <p className="text-white italic max-w-[400px]">
          {quote}
        </p>
      </div>

      <span className="text-white italic text-right">
        - {author}
      </span>
      <button
        onClick={handleClicktoGetQuote}
        className="w-fit mx-auto font-semibold bg-white text-slate-950 px-2 py-2 rounded-lg mt-10 border-2 border-slate-900 hover:bg-slate-950 hover:text-white transition-colors hover:border-white"
      >
        Change Quote
      </button>
    </div>
  )
}