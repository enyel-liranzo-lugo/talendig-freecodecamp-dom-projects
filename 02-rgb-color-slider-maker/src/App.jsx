import { useState } from "react"

export default function App() {

  const [red, setRed] = useState(23)
  const [green, setGreen] = useState(41)
  const [blue, setBlue] = useState(56)

  const bodyColoy = `rgb(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = bodyColoy

  const changeRedValue = (e) => {
    setRed(parseInt(e.target.value))
  }

  const changeGreenValue = (e) => {
    setGreen(parseInt(e.target.value))
  }

  const changeBlueValue = (e) => {
    setBlue(parseInt(e.target.value))
  }

  return (
    <section className="flex flex-col bg-white text-slate-900 p-5 rounded-xl text-center">

      <h1 className="text-3xl font-bold mb-5">RBG Color Slider Maker</h1>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="red">R - Red</label>
          <input onChange={changeRedValue} type="range" name="red" id="red" min={0} max={255} step={1} />
          <p>Value: <span>{red}</span></p>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="green">G - Green</label>
          <input onChange={changeGreenValue} type="range" name="green" id="green" min={0} max={255} step={1} />
          <p>Value: <span>{green}</span></p>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="blue">B - Blue</label>
          <input onChange={changeBlueValue} type="range" name="blue" id="blue" min={0} max={255} step={1} />
          <p>Value: <span>{blue}</span></p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-semibold">Color in RGB: <span>rgb({red}, {green}, {blue})</span></p>
      </div>
    </section>
  )
}
