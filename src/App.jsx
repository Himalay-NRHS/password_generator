import { useState, useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


let [length, setLength] = useState(7)
let [password, setPassword] = useState("")
let [chars, setChars] = useState(false)
let[numbers, setNumbers] = useState(false)



const generatePassword = useCallback(() => {
  let password = "";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if(chars){
    str+="!@#$%^&*()_+-=[]{}|;':,./<>?";
  }
  if(numbers){
    str+="0123456789";
  }
  for (let i = 1; i < length; i++) {
    password += str[Math.floor(Math.random() * str.length+1)];
  }
 setPassword(password);
},[length,chars,numbers])
useEffect(()=>{generatePassword();console.log(password)},[length,chars,numbers])

  return (
  <>
<div className="bg-black w-full h-full text-white flex flex-col justify-center items-center">
  <div className="flex bg-slate-400 w-2/3 h-2/5 rounded-xl flex-col items-center">
    <div className="flex items-center justify-center w-2/3 mt-10">
      <div className="bg-white w-3/4 h-14 rounded-xl text-black text-center text-xl py-3 ">{password}</div>
      <button className="bg-blue-500 text-white h-[52px] px-4 rounded-xl ml-4">
        Copy
      </button>
    </div>  
    <div className="w-auto h-auto">
      <div className="flex">
      <input type="range" className="w-full h-full mt-1" min="7" max="100" value={length} onChange={(e)=>setLength(e.target.value)}/>
      <label className="ml-6">length:{length}</label>
</div>
</div>  
    <div className="w-auto h-auto">
      <div className="flex">
      <input type="checkbox" className="w-full h-full mt-1" min="7" max="100" defaultChecked={chars} value={chars} onChange={ ()=>{setChars(!chars)}} />
      <label className="ml-6">include_characters</label>
</div>
</div>  
    <div className="w-auto h-auto">
      <div className="flex">
      <input type="checkbox" className="w-full h-full mt-1" min="7" max="100" value={numbers} defaultChecked={numbers} onChange={ ()=>{setNumbers(!numbers); }} />
      <label className="ml-6">include_numbers</label>
</div>

    </div>
  </div>
</div>

  
  
  
  </>
  )
}

export default App
