import { useState } from "react";
function App(){
  const[name,setName]=useState("");
  return(
    <div>
      <form>
      <label>Name:</label>
      <input 
      placeholder="Enter name"
      onChange={(e)=>setName(e.target.value)}/>
      <p>{name}</p>
      </form>
    </div>
  );
}
export default App;