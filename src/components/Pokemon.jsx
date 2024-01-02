import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export const Pokemon = ({data}) =>{
    const [details, setDetails] = useState(null)
    const [btn, setBtn] = useState(false)
    const [isFavorit, setIsFavorit] = useState(false)
  
    const handleFavorit = () =>{
      setIsFavorit(!isFavorit)
      console.log(isFavorit)
    }
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
      
      <button className='text-3xl' onClick={handleFavorit}>{isFavorit ? <MdFavorite/> : <MdFavoriteBorder/>} </button>
      <img className='w-44 bg-slate-600 rounded-xl' src={details.sprites.front_default} alt="" />
      <p className='font-bold'>{details.name.toUpperCase()}  </p><span>type: {details.types[0].type.name}</span>
      <button className='bg-orange-500 rounded hover:bg-orange-600' onClick={handleButton}>DETALHES</button>
      
      {btn && (
        <div className='w-6/12 h-7/12 flex   top-16 right-1/4 left-1/4 bg-gray-500 fixed p-10 gap-7'>
          <FaWindowClose className='absolute -top-5 -right-5 text-5xl bg-slate-300 rounded-xl cursor-pointer' onClick={handleButton}/>
          <img className='w-80  bg-slate-600 rounded-xl ' src={details.sprites.front_default} alt="" />
          <div className='flex flex-col gap-3'>
              <p className='font-bold text-5xl'>{details.name.toUpperCase()}</p>
              <span className='text-3xl'>type: {details.types[0].type.name}</span>
              <p className='text-3x1'>EXP: {details.base_experience}</p>
              <p className="text-2xl">Altura: {details.height} - PESO: {details.weight}</p>
          </div>
          
        </div>
      )}
    </div>
    
    )
}