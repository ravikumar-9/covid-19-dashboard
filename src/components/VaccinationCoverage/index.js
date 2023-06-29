// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  console.log(props)

  const {vaccinationDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="vaccine-coverage-text">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={vaccinationDetails}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="Vaccine_date"
            tick={{
              stroke: '#1c1c2b',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: '#1c1c2b',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="dose_1" fill="#5a8dee" barSize="30%" />
          <Bar dataKey="dose_2" name="dose_2" fill="#f54394" barSize="30%" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationCoverage
