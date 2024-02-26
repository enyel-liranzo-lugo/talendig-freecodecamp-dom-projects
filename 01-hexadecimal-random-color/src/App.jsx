export default function App() {

  return (
    <section className="flex flex-col text-center gap-y-5 font-semibold">
      <h1 className="text-3xl">Random Hexadecimal Color Generator</h1>
      <p className="text-xl">Current Color: <span className="">#ffffff</span></p>

      <button className="bg-white w-fit mx-auto text-black p-2 rounded-lg border-slate-950 hover:bg-slate-700 hover:text-white transition-colors">
        Change Color!
      </button>
    </section>
  )
}