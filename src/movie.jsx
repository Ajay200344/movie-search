import React from "react";
import { useState, useEffect } from "react";
import './movie.css'

function Search(props){
      const [data, setdata]= useState("");
      const [loading, setLoading]= useState(true);
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
     
      
      useEffect(() => {
            setLoading(true);
            setdata("");
         fetch(`https://www.omdbapi.com/?t=${props.get}&apikey=${API_KEY}`)
            .then((response)=>{
                  if(!response.ok){
                        
                        return <h2>failed to fetch data</h2>
                  }
                  return response.json();
            })
            .then((movie)=>{
                        setdata(movie);
                        setLoading(false);
            })
      }, [props.get]);
       console.log(data);
      if(loading){ 
            return<h2>Loading...</h2>;       
      }
      
      if (data.Response=="False" ) {
            return <h2>No data available</h2>;
          }else{
        
          return (
            
            <div className="main">
              <img src={data.Poster} alt={data.Title} />
              <div className="inner">
              <h2 className="c">Title: {data.Title}</h2>
              <h3 className="c">Genre: {data.Genre}</h3>
              <h3 className="c">Director: {data.Director}</h3>
              <h3 className="c">Actors: {data.Actors}</h3>
              <p className="c">{data.Plot}</p>
              </div>
            </div>
          );
      }
}

export default Search; 





