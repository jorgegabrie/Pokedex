import logo from './assets/logoPoke.png'
import './App.css'
import {useState, useEffect} from 'react'
import { FaWindowClose } from "react-icons/fa";

function App() {

  const [poke, setPoke] = useState([])
  useEffect(()=>{
    getPokemons()
    
  },[])

  const getPokemons = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res)=>res.json())
    .then(response=> setPoke(response.results))
    
}
return (
  <main>
    <header className='w-full h-52 flex justify-center bg-slate-950'>
      
      <img src={logo} alt="" className='w-96 h-52'/>
    </header>
    <main className='flex justify-center flex-col items-center'>
      <input type="text" placeholder='Digite um pokemon' className='w-52 bg-gray-400 placeholder-black mt-4 p-3 rounded-md	' />
      
      <section className='flex items-center justify-center gap-7 flex-wrap mt-10'>
        {poke.map((iten)=>(
          <Pokemon data={iten}/>
          )
        )}
      </section>
    </main>
  </main>
)
}

const Pokemon = ({data}) =>{
  const [details, setDetails] = useState(null)
  const [btn, setBtn] = useState(false)

  const handleButton = ()=>{
    setBtn(!btn)
    console.log(btn)
}

  useEffect(()=>{
    fetch(data.url)
    .then((res)=> res.json())
    .then((result) => setDetails(result))
  },[])

  if(details === null){
    return <div>-</div>
  }
// 
  return (
  <div className={"bg-slate-300 p-5 rounded flex flex-col gap-2 items-center"} >
    <img className='w-44 bg-slate-600 rounded-xl' src={details.sprites.front_default} alt="" />
    <p className='font-bold'>{details.name.toUpperCase()}  </p><span>type: {details.types[0].type.name}</span>
    <button className='bg-orange-500 rounded hover:bg-orange-600' onClick={handleButton}>DETALHES</button>
    {btn && (
      <div className='w-6/12 h-7/12 flex   top-16 right-1/4 left-1/4 bg-gray-500 fixed p-10 gap-7'>
        <FaWindowClose className='absolute -top-5 -right-5 text-5xl' onClick={handleButton}/>
        <img className='w-80  bg-slate-600 rounded-xl ' src={details.sprites.front_default} alt="" />
        <div className='flex flex-col gap-3'>
            <p className='font-bold text-5xl'>{details.name.toUpperCase()}</p>
            <span className='text-3xl'>type: {details.types[0].type.name}</span>
            <p className='text-3x1'>EXP: {details.base_experience}</p>
        </div>
        
      </div>
    )}
  </div>
  
  )
}
export default App
  

    

  
  



 




 
            
            
          
            
            

