
import {get}from "../data/httpClient"
import { useEffect , useState } from "react"
import { getMovieImages } from "../utils/getMovieImage"
import { useParams } from "react-router-dom";

export function MovieDetails(){

    const {movieId} = useParams()
    const [movie,setMovie]= useState([]);
  
    useEffect(()=>{
        get("/movie/" + movieId).then((data) => {setMovie(data)

        })
    },[movieId]);
    
    const imageUrl =  getMovieImages(movie.poster_path,300)
   
    return(<div>
        <img src= {imageUrl} alt ={movie.title}/>
        
        <div>
            <p>
                <strong>Title:</strong>
                {movie.title}
            </p>
        </div>
       
    </div>)
}