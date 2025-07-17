import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])

  async function getData(){
    try {
      fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs")
      .then((res)=> res.json())
      .then((data)=> setData(data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getData()
  }, [])
  
  return (
    <div className='w-screen h-screen bg-gray-800'>
      <div className='w-full h-full p-4 flex flex-col items-center overflow-y-scroll overflow-x-hidden'>
        {
          data.map((item)=>{
            return(
              <div className='cursor-pointer hover:bg-gray-950 hover:text-white transition-all mt-5 border-b-10 border-r-10 border-gray-600 shadow-2xl w-full lg:w-200 bg-gray-400 flex justify-center items-left flex-col gap-2 p-2 rounded-xl'>
                <p className='font-bold text-xl font-sans tracking-wide Upper'>{item.Name}</p>
                <p className='font-semibold text-xl font-sans tracking-tight '>{item.Description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
