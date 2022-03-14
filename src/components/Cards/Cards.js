import { CardContent, Grid, Typography, Card } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup'
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading..'
  }
  return (
    <div>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card sx={{ padding: 4, borderBottom: '1rem solid lightblue' }}>
            <CardContent>
              <Typography>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=','
                />
              </Typography>
              <Typography>{lastUpdate}</Typography>

              <Typography>Number of active cases of COVID-19</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card sx={{ padding: 4, borderBottom: '1rem solid lightgreen' }}>
            <CardContent>
              <Typography>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=','
                />
              </Typography>
              <Typography>{lastUpdate}</Typography>

              <Typography>Number of recoveries from COVID-19</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card sx={{ padding: 4, borderBottom: '1rem solid lightcoral' }}>
            <CardContent>
              <Typography>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=','
                />
              </Typography>
              <Typography>{lastUpdate}</Typography>

              <Typography>Number of deaths caused by COVID-19</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
