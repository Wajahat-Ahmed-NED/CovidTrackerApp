import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { useLocation} from 'react-router'
import './display.css'
import Navbar from './Navbar'

export default function Display() {
    // const location=useLocation()
    const location = useLocation();
    const peramData=location.state?location.state:{}
    // console.log(location.state.val?location.state.val:"No Data Found");
    const [val, setVal] = useState("")
    const getData = () => {
        const api = 'https://api.covidtracking.com/v1/states/current.json';
        axios.get(api).then((res) => {
            console.log(res.data);

            let a=peramData.val?peramData.val:"Not Found"
            
            for (let i = 0; i < 56; i++) {

                if (res.data[i].state === a) {
                    console.log(res.data[i])

                    setVal(JSON.stringify(res.data[i]))
                }



            }

        })
    }
    useEffect(() => {
        getData()
    }, []) 
    return (
        <>
            <Navbar />
            <h1>Displaying Data</h1>
            <div className="container">
                <textarea className="container mx-auto my-auto" cols="100" rows="20" value={val?val:"Data Not Found"}></textarea>
            </div>
        </>
    )
}
