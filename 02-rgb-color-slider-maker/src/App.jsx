export default function App() {

  return (
    <section>

      <h1>RBG Color Slider Maker</h1>

      <div>
        <label htmlFor="red">R - Red</label>
        <input type="range" name="red" id="red" min={0} max={255} value={23} />
      </div>
      <div>
        <label htmlFor="green">G - Green</label>
        <input type="range" name="green" id="green" min={0} max={255} value={23} />
      </div>
      <div>
        <label htmlFor="blue">B - Blue</label>
        <input type="range" name="blue" id="blue" min={0} max={255} value={23} />
      </div>
    </section>
  )
}
