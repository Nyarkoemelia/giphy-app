import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from './Loader'

function GetGiph() {
    const [data , setData]=useState([])
    const[isLoading, setIsLoading]= useState(false)
    useEffect(()=>{
     const fetchData= async()=>{
         setIsLoading(true)
         const results = await axios("https://api.giphy.com/v1/gifs/trending", {
            params: {
              api_key: "iavb4Np5rT7R2ZPsOWPR4pO4irE7ncZc",
              limit: 100
            }
        },)
        console.log(results)
        setData(results.data.data)
        setIsLoading(false)
       }
       fetchData()
    },[])
    const renderGifs=()=>{
        if(isLoading){
            return <Loader/>
        }
        return data.map(el=>{
            return(
            <div key={el.id} className="gifs">
            <img src={el.images.fixed_height.url}/>
            </div>
        )

        })
        }
    return (
        <div className="container">{renderGifs()}
            
        </div>
    )
}

export default GetGiph
