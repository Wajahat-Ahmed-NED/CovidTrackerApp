import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
export default function Home() {
    const [arr, setArr] = useState([])

    // const apiHandle = axios.create({

    //     baseURL: 'https://api.covidtracking.com/v1/states/current.json'
    // })
    const getData = () => {
        // apiHandle.get("/").then((e)=>{
        //     console.log(e.data)
        const api = 'https://api.covidtracking.com/v1/states/current.json';
        axios.get(api).then((res) => {
            console.log(res.data);
            
            for(let i=0;i<56;i++){
                console.log(res.data[i].state)
                arr.push(res.data[i].state)
                setArr(arr)
                

            }
            console.log(arr)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })
        
    }
    useEffect(() => {
        getData() 
        
    },[])
    console.log(arr)
    const navigate=useNavigate()

    const move=(item)=>{
        console.log(item)
        // document.write(`<h1>${item}</h1>`)

        let obj = {
            val: item,
          };
          navigate("/display", { state: obj });
          
    }
    const [hospitalized, setHospitalized] = useState()
    const [deaths, setDeaths] = useState()
    const [recovered, setRecovered] = useState()
    const [positive, setPositive] = useState()
    const [negative, setnegative] = useState()
    const fined=()=>{
        let a={
            name:'wajaht',
            age:23
        }
        console.log(Object.keys(a))
        for (let i=0;i<56;i++){
            console.log(res.data[i].hospitalize)
                hospitalized+=res.data[i].hospitalize
                setHospitalized(hospitalized)

                deaths+=res.data[i].hospitalize
                setDeaths(deaths)

                recovered+=res.data[i].hospitalize
                setRecovered(recovered)
                positive+=res.data[i].hospitalize
                setPositive(positive)
                negative+=res.data[i].hospitalize
                setnegative(negative)
        }
    }
    fined()
    return (
        <>
            <Navbar />
            <h2>Select State to Check Covid Status</h2>
            <div className="container my-4 p-3" style={{ textAlign: 'center', border: '2px solid white' }}>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Select State                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        {

                        
                        arr.map((e, i) => {return <li key={i} style={{backgroundColor:'black'}}
                        ><a className="dropdown-item " onClick={()=>{move(arr[i])}
                        
                        } >{e}</a></li>})
                        }

                    </ul>
                </div>
            </div>
            

                        
        </>
    )
}
