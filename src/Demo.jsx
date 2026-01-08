// this page use for demo api calling 
import axios from 'axios';
import React, { useEffect } from 'react'
const url = "https://dummyjson.com/products?limit=0";
export function Demo() {
    async function fetchData() {
        try {
            const res = await axios.get(url)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    })
  return (  
      <div>hello</div>
  )
}

