// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'Success',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    updated7DaysDataList: '',
    vaccinationByGenderList: '',
    vaccinationByAgeList: '',
  }

  componentDidMount() {
    this.getCowinVaccinationDetails()
  }

  getCowinVaccinationDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = ' https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()

      console.log(data)

      const updated7DaysData = data.last_7_days_vaccination

      const updatedGenderByData = data.vaccination_by_gender

      const updatedAgeByData = data.vaccination_by_age

      this.setState({updated7DaysDataList: updated7DaysData})
      this.setState({vaccinationByGenderList: updatedGenderByData})
      this.setState({vaccinationByAgeList: updatedAgeByData})

      this.setState({apiStatus: apiStatusConstants.success})
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {
      updated7DaysDataList,
      vaccinationByGenderList,
      vaccinationByAgeList,
    } = this.state
    return (
      <>
        <div className="coverage-dashboard-container">
          <VaccinationCoverage vaccinationDetails={updated7DaysDataList} />
        </div>
        <div className="vaccination-gender-container">
          <VaccinationByGender
            vaccinationByGenderList={vaccinationByGenderList}
          />
        </div>
        <div className="vaccination-gender-container">
          <VaccinationByAge vaccinationByAgeList={vaccinationByAgeList} />
        </div>
      </>
    )
  }

  renderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
      className="failure-img"
    />
  (

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  (

  renderSwitchCases = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      case apiStatusConstants.inProgress:
        return this.renderLoaderView()

      default:
        return null
    }
  }

  render() {
    const {
      apiStatus,
      updated7DaysDataList,
      vaccinationByGenderList,
      vaccinationByAgeList,
    } = this.state

    console.log(apiStatus)
    console.log(updated7DaysDataList)
    console.log(vaccinationByGenderList)
    console.log(vaccinationByAgeList)

    return (
      <div className="bg-container">
        <div className="dashboards-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <p className="website-name">Co-WIN</p>
          </div>
          <h1 className="vaccination-heading">CoWIN Vaccination in India</h1>
          {this.renderSwitchCases()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
