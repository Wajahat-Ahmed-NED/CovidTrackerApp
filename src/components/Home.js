import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
export default function Home() {
    const [arr, setArr] = useState([])
    let [Hospitalized, setHospitalized] = useState(0)
    let [Deaths, setDeaths] = useState(0)
    let [Recovered, setRecovered] = useState(0)
    let [Positive, setPositive] = useState(0)
    let [Negative, setNegative] = useState(0)
    // const apiHandle = axios.create({

    //     baseURL: 'https://api.covidtracking.com/v1/states/current.json'
    // })
    const getData = () => {
        // apiHandle.get("/").then((e)=>{
        //     console.log(e.data)
        const api = 'https://api.covidtracking.com/v1/states/current.json';
        axios.get(api).then((res) => {
            console.log(res.data);

            for (let i = 0; i < 56; i++) {
                console.log(res.data[i].articles)
                arr.push(res.data[i].state)
                setArr(arr)


                setHospitalized(Hospitalized + res.data[i].Hospitalized)
                

                setDeaths(Deaths + res.data[i].death)
                
                
                
                setRecovered(Recovered + res.data[i].Recovered)
                

                setPositive(Positive + res.data[i].Positive)
                

                setNegative(Negative + res.data[i].Negative)
                

            }
            console.log(arr)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })

    }
    useEffect(() => {
        getData()

    }, [])
    
    const navigate = useNavigate()

    const move = (item) => {
        console.log(item)
        // document.write(`<h1>${item}</h1>`)

        let obj = {
            val: item,
        };
        navigate("/display", { state: obj });

    }

    //     const fined = () => {
    //         // let a = {
    //         //     name: 'wajaht',
    //         //     age: 23
    //         // }
    //         // console.log(Object.keys(a))
    //         const api = 'https://api.covidtracking.com/v1/states/current.json';
    //         axios.get(api).then((res) => {
    //             for (let i = 0; i < 56; i++) {
    //                 console.log(res.data[i].Hospitalized)
    //                 Hospitalized += res.data[i].Hospitalized
    //                 setHospitalized(Hospitalized)

    //                 Deaths += res.data[i].death
    //                 setDeaths(Deaths)
    //                 console.log(Deaths)

    //                 Recovered += res.data[i].Recovered
    //                 setRecovered(Recovered)
    //                 Positive += res.data[i].Positive
    //                 setPositive(Positive)
    //                 Negative += res.data[i].Negative
    //                 setNegative(Negative)
    //             }
    //         })
    // }
    //     fined()
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


                            arr.map((e, i) => {
                                return <li key={i} style={{ backgroundColor: 'black' }}
                                ><a className="dropdown-item " onClick={() => { move(arr[i]) }

                                } >{e}</a></li>
                            })
                        }

                    </ul>
                </div>
            </div>



        </>
    )
}
