import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Cards from './components/Cards/Cards'
import ChartDaily from './components/Chart/ChartDaily'
import { fetchData } from './api'
const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
})

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function fetchDataAPI() {
      let response = await fetchData()
      setData(response)
    }
    fetchDataAPI()
  }, [])

  const handleChangeCountry = async (country) => {
    let response = await fetchData(country)
    setData(response)
    setCountry(country)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography align='center' variant='h1'>
            Covid19
          </Typography>
          <Cards data={data} />
          <CountryPicker handleChangeCountry={handleChangeCountry} />
          <ChartDaily data={data} country={country} />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
