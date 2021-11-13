import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Home() {
    const [arr, setArr] = useState([])
    const apiHandle=axios.create({
        
        baseURL:'https://api.covidtracking.com/v1/states/current.json'
    })
    const getData=()=>{
        apiHandle.get('/').then((response)=>{
            for(let i=0;i<56;i++){
                console.log(response.data[i].state)
                arr.push(response.data[i].state)
                setArr(arr)

            }
            console.log(arr)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Navbar />
            <h2>Select State to Check Covid Status</h2>
            <div className="container my-4 p-3" style={{ textAlign: 'center', border: '2px solid white' }}>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Select State                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        {arr.map((e,i)=><li><a className="dropdown-item " key={i}>{e}</a></li>)}
                         
                    </ul>
                </div>
            </div>

        </>
    )
}
