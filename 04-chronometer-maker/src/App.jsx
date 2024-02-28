import { useEffect, useState } from 'react'
import './App.css'

export default function App() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {

    if (started) {
      const timer = setInterval(() => {
        setSeconds(seconds + 1)
      }, 1000)

      if (seconds / 60 === 1) {
        setSeconds(0)
        setMinutes(minutes + 1)
      }

      if (minutes / 60 === 1) {
        setMinutes(0)
        setHours(hours + 1)
      }

      return () => clearInterval(timer)
    }

  }, [seconds, minutes, hours, started])

  const handlePause = () => {
    setStarted(!started)
  }

  const handleReset = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  let newSeconds = seconds < 10 ? `0${seconds}` : seconds
  let newMinutes = minutes < 10 ? `0${minutes}` : minutes
  let newHours = hours < 10 ? `0${hours}` : hours

  return (
    <div className='bg-white p-8 font-bold rounded-lg'>
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-slate-900'>Chornometer</h1>
        <span className=' text-4xl text-slate-900'>
          {`${newHours}:${newMinutes}:${newSeconds}`}
        </span>

        <div className='flex flex-row gap-x-4 mx-auto'>
          <button onClick={handlePause} className='w-28'>
            {started ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset} className='w-28'>
            Restart
          </button>
        </div>
      </div>
    </div>
  )
}