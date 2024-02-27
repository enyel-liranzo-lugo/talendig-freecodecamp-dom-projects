// eslint-disable-next-line react/prop-types
export function RgbColorCard({ name, color, changeColor }) {
  return (
    <div className="flex flex-col items-center">
      <label className="text-2xl font-semibold" htmlFor="red">
        {name}
      </label>
      <input onChange={changeColor} type="range" name="red" id="red" min={0} max={255} step={1} />
      <p>Value: <span>{color}</span></p>
    </div>
  )
}