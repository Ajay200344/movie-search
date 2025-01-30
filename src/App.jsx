
//import './App.css'
import Search from './movie'
import Input from './input'
import { useState } from 'react'
function App() {
  const head={
    textAlign:"center",
    textDecoration:"underLine"
  }  
  const[query, setQuery]=useState("");
    
  return (
    <>
    <h1 style={head}>Movie Search</h1>
      <Input onSearch={setQuery} />
      {query === "" ? <div> </div> : <Search get={query} />}
    </>
  )
}

export default App
