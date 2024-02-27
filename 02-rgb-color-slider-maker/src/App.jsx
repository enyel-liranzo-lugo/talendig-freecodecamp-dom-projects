export default function App() {

  return (
    <section className="flex flex-col bg-white text-slate-900 p-5 rounded-xl text-center">

      <h1 className="text-3xl font-bold mb-5">RBG Color Slider Maker</h1>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="red">R - Red</label>
          <input type="range" name="red" id="red" min={0} max={255} step={1} />
          <p>Value: <span>Red</span></p>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="green">G - Green</label>
          <input type="range" name="green" id="green" min={0} max={255} step={1} />
          <p>Value: <span>Red</span></p>
        </div>

        <div className="flex flex-col items-center">
          <label className="text-2xl font-semibold" htmlFor="blue">B - Blue</label>
          <input type="range" name="blue" id="blue" min={0} max={255} step={1} />
          <p>Value: <span>Red</span></p>
        </div>
      </div>
    </section>
  )
}
