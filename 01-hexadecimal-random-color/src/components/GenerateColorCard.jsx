// eslint-disable-next-line react/prop-types
export function GenerateColorCard({ currentColor, setFunction }) {
  return (
    <section className={`flex flex-col text-center gap-y-5 font-semibold bg-white text-slate-800 p-5 border-2 border-black rounded-lg w-[350px] md:w-auto`}>
      <h1 className="text-3xl font-bold">Random Hexadecimal Color Generator</h1>
      <p className="flex flex-col text-xl">Current Color: <span className="my-3 text-3xl">{currentColor}</span></p>

      <button onClick={setFunction} className="border-2 bg-white w-fit mx-auto text-black p-2 rounded-lg border-slate-950 hover:bg-slate-700 hover:text-white transition-colors">
        Change Color
      </button>
    </section>
  )
}