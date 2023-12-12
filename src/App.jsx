import logo from './assets/logoPoke.png'
import './App.css'
import {useState, useEffect} from 'react'

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

useEffect(()=>{
fetch(data.url)
.then((res)=> res.json())
.then((result) => setDetails(result))
},[])

if(details === null){
  return <div>-</div>
}

return <div className='bg-slate-300 p-5 rounded flex flex-col gap-2' >
  <img className='w-44 bg-slate-600 rounded-xl' src={details.sprites.front_default} alt="" />
  {details.name.toUpperCase()}
  <button className='bg-orange-500 rounded hover:bg-orange-600'>DETALHES</button>
</div>
}

export default App
  

  
  



 




 
            
            
          
            
            

