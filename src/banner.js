import React , {useState,useEffect}from 'react'
import axios from "./axios"

function banner() {
const [Movie,setMovie] = useState([])\

useEffect(()=>{
    async function fetchData(){
        const  request = await axios.get(request.fetchNetflixOriginal)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
        )
        return request;
    }
fetchData();

},[])

    return (
        <div>
            
        </div>
    )
}

export default banner
