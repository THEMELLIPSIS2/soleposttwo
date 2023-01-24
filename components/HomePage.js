import { useState, useEffect } from "react"
import prisma from "../prisma/prismaClient"

export const Homepage = () => {

    let [recent,setRecent] = useState(null)
    let [featured,setFeatured] = useState(null)

    useEffect(()=> {
    },[])


    return (
       
        <div className='home'>
{console.log(recent)}hi
        </div>
    )
}