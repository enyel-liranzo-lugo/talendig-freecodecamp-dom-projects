import { useState } from "react"
import { RgbColorCard } from "./components/RgbColorCard"

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
        <RgbColorCard
          name={"R - Red"}
          color={red}
          changeColor={changeRedValue}
        />

        <RgbColorCard
          name={"G - Green"}
          color={green}
          changeColor={changeGreenValue}
        />

        <RgbColorCard
          name={"B - Blue"}
          color={blue}
          changeColor={changeBlueValue}
        />
      </div>

      <div className="mt-5">
        <p className="font-semibold">Color in RGB: <span>rgb({red}, {green}, {blue})</span></p>
      </div>
    </section>
  )
}
