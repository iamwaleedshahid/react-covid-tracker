import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'


const Chart = () => {
   const [dailyData, setDailyData] = useState({})

   useEffect(() => {
      (async () => {
         setDailyData(await fetchDailyData())
      })();
   }, []);

    return (
        <div>

        </div>
    )
}


export default Chart;