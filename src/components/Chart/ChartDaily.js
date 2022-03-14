import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'
import { CategoryScale } from 'chart.js'

import Chart from 'chart.js/auto'
const ChartDaily = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([])
  Chart.register(CategoryScale)
  useEffect(() => {
    async function fetchDataAPI() {
      setDailyData(await fetchDailyData())
    }
    fetchDataAPI()
  }, [])

  const LineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5',
              fill: true,
            },
          ],
        }}
      />
    ) : null

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['lightblue', 'lightgreen', 'lightcoral'],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null
  return (
    <Container
      sx={(theme) => ({
        marginTop: 5,
      })}
    >
      {country ? BarChart : LineChart}
    </Container>
  )
}

export default ChartDaily
