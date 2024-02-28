import './App.css'

export default function App() {

  return (
    <div className='bg-white p-8 font-bold rounded-lg'>
      <div className='flex flex-col gap-y-5'>
        <h1 className='text-slate-900'>Chornometer</h1>
        <span className=' text-4xl text-slate-900'>
          00:00:00
        </span>

        <div className='flex flex-row gap-x-4 mx-auto'>
          <button className='w-28'>
            Start
          </button>
          <button className='w-28'>Restart</button>
        </div>
      </div>
    </div>
  )
}