import React, { useState } from 'react'

const Search = ({setQuery}) => {
    const [inp,setInp]= useState("")
    const handlsubmit=(e)=>{
        e.preventDefault()
        setQuery(inp)
        setInp("")

    }
  return (
    <div style={{ marginTop:"20px"}}>
        <form onSubmit={handlsubmit} >
            <input type="text" placeholder='Add city name' onChange={(e)=>setInp(e.target.value) } value={inp} />
        </form>
    </div>
  )
}

export default Search