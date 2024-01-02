import logo from './assets/logoPoke.png'
import './App.css'
import {useState, useEffect} from 'react'
import { Pokemon } from './components/Pokemon'
import { FaSearch } from "react-icons/fa";
function App() {

  const [poke, setPoke] = useState([])
  const [search, setSearch] = useState("")

  const handleChange = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }

 
  useEffect(()=>{
    getPokemons()
  },[])
// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
  const getPokemons = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((res)=>res.json())
    .then(response=> setPoke(response.results))
}


return (
  <main>
    <header className='w-full h-52 flex justify-center bg-slate-950'>
      
      <img src={logo} alt="" className='w-96 h-52'/>
    </header>
    <main className='flex justify-center flex-col items-center'>
      <div className='flex gap-12 justify-center items-center'>
          <div className='flex gap-4 w-6/12 flex-wrap mt-4'>
            <button className='p-3 rounded-xl bg-red-500 '>Fogo</button>
            <button className='p-3 rounded-xl bg-blue-500 '>Agua</button>
            <button className='p-3 rounded-xl bg-amber-700 '>terra</button>
            <button className='p-3 rounded-xl bg-green-500 '>Grama</button>
            <button className='p-3 rounded-xl bg-cyan-800 '>Lutador</button>
            <button className='p-3 rounded-xl bg-slate-600 '>Fantasma</button>
            <button className='p-3 rounded-xl bg-yellow-500 '>Eletrico</button>


          </div>
        <form className='gap-2 flex'>
          <input type="text" placeholder='Digite um pokemon' className='w-52 bg-gray-400 placeholder-black mt-4 p-3 rounded-md' onChange={handleChange} />
          <button type="submit" className='w-12 items-center justify-center flex bg-gray-400 placeholder-black mt-4 p-3 rounded-md'>
                        <FaSearch/>
          </button>
        </form>
      </div>
      
      <section className='flex items-center justify-center gap-7 flex-wrap mt-10'>
        {poke.filter((iten)=> iten.name.toLocaleLowerCase().includes(search)).map((iten, index)=>(
          <Pokemon key={index}data={iten}/>
          )
        )}
      </section>
    </main>
  </main>
)
}

export default App
  

    

  
  



 




 
            
            
          
            
            

