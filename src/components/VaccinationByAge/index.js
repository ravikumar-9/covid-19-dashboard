// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  console.log(props)
  const {vaccinationByAgeList} = props

  return (
    <>
      <h1 className="by-gender-text">Vaccination by age</h1>
      <div className="pie-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByAgeList}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name={vaccinationByAgeList[0].age} fill="#f54394" />
              <Cell name={vaccinationByAgeList[1].age} fill="#2cc6c6" />

              <Cell name={vaccinationByAgeList[2].age} fill="#2d87bb" />
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

export default VaccinationByAge
