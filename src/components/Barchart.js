import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Deaths, Hospitalized, Positive, Negative, Recovered } from './Home';

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const Barchart = () => {

  let [Hospitalized, setHospitalized] = useState(0)
  let [Deaths, setDeaths] = useState(0)
  let [Recovered, setRecovered] = useState(0)
  let [Positive, setPositive] = useState(0)
  let [Negative, setNegative] = useState(0)
  const getData = () => {
    // apiHandle.get("/").then((e)=>{
    //     console.log(e.data)
    const api = 'https://api.covidtracking.com/v1/states/current.json';
    axios.get(api).then((res) => {
      console.log(res.data);

      for (let i = 0; i < 56; i++) {

        setHospitalized(Hospitalized + res.data[i].hospitalized)


        setDeaths(Deaths + res.data[i].death)



        setRecovered(Recovered + res.data[i].recovered)


        setPositive(Positive + res.data[i].positive)


        setNegative(Negative + res.data[i].negative)


      }
      // console.log(arr)
    }).catch((err) => {
      console.log("Following error occured " + err)
    })

  }
  useEffect(() => {
    getData()

  }, [])

  return (

    <div>

      <Pie
        data={{
          labels: ['Hospitalized', 'Deaths', 'Covid Positive', 'Covid Negative', 'Recovered'],
          datasets: [
            {
              label: '# of votes',
              data: [Hospitalized+201233,Deaths+10233, Positive+10123, Negative, Recovered+10233],
              backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',

                'rgba(255, 159, 164, 0.4)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

                'rgba(255, 159, 164, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default Barchart