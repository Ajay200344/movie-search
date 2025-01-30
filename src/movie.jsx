import React from "react";
import { useState, useEffect } from "react";
import './movie.css'

function Search(props){
      const [data, setdata]= useState("");
      const [loading, setLoading]= useState(true);

     
      
      useEffect(() => {
         fetch(`http://www.omdbapi.com/?t=${props.get}}&apikey=5327c9cd`)
            .then((response)=>{
                  if(!response.ok){
                        setLoading(false);
                        return <h2>failed to fetch data</h2>
                  }
                  return response.json();
            })
            .then((movie)=>{
                        setdata(movie);
                        setLoading(false);
            })
      }, [props.get]);
       
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





