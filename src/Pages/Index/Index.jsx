import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import TemperatureChart from '../../Components/TemperatureChart/TemperatureChart'
import TemperatureInfo from '../../Components/TemperatureInfo/TemperatureInfo'

export default function Index() {
  return (
    <>
      <Navbar />
    <div className='pl-6 pr-6 flex justify-between gap-x-10 my-10 child:bg-stoneCard-111 child:rounded-3xl'>
      <TemperatureChart />
      <TemperatureInfo />
    </div>
    </>
  )
}

