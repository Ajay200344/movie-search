import React from "react";
import './input.css'

function Input({onSearch}){
    
    function myfun(){
        
        const a=document.getElementById("input").value;
        onSearch(a);
    }
    return(
        <div className="contain">
             <input type="text" className="box" id="input" placeholder="Search for a movie..." />
             <button className="b1" onClick={myfun}>Search</button>
        </div>
    )
}
export default Input;

