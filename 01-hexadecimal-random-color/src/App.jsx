import { useState } from "react"
import { GenerateColorCard } from "./components/GenerateColorCard";

const changeColor = () => {
  let colorCharacters = "0123456789ABCDEF"
  let initialHexColor = "#"

  for (let i = 0; i < 6; i++) {
    let aleatoryIndex = Math.floor(Math.random() * 16)
    initialHexColor += colorCharacters[aleatoryIndex]
  }

  return initialHexColor;
}

export default function App() {

  const [currentColor, setCurrentColor] = useState("#242424")

  const generateHexadecimalColor = () => {
    setCurrentColor(changeColor())
  }

  document.body.style.backgroundColor = currentColor;

  return (
    <GenerateColorCard
      setFunction={generateHexadecimalColor}
      currentColor={currentColor}
    />
  )
}