// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  console.log(props)
  const {vaccinationByGenderList} = props

  return (
    <>
      <h1 className="by-gender-text">Vaccination by gender</h1>
      <div className="pie-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByGenderList}
              startAngle={0}
              endAngle={180}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="Others" fill="#2cc6c6" />

              <Cell name="Female" fill="#2d87bb" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default VaccinationByGender
