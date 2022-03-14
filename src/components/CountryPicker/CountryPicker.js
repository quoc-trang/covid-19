import { FormControl, NativeSelect } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { countries } from '../../api'

const CountryPicker = ({ handleChangeCountry }) => {
  const [fetchCountries, setFetchCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchCountries(await countries())
    }
    fetchCountries()
  }, [setFetchCountries])
  console.log(fetchCountries)

  return (
    <FormControl
      sx={(theme) => ({
        width: '30%',
        [theme.breakpoints.down('sm')]: {
          width: '60%',
        },
        marginTop: 5,
      })}
    >
      <NativeSelect onChange={(e) => handleChangeCountry(e.target.value)}>
        <option value=''>Global</option>
        {fetchCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
