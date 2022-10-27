import React,{Component} from "react";
import axios from 'axios'

class App extends Component{
  
  state = {
    cars:[]
  }

  componentDidMount(){
    this.getCars()
  }
  
  onSubmitCar(){
    axios.post('/api/addcar',{
      brand: 'Nissan',
      model: 'Gomex',
      year: 2002,
      availability: true
    })
    .then( response => {
      console.log(response.data)
    })
  }

  getCars = () => {
    axios.get('/api/getcars')
    .then( response => {
      this.setState({cars:response.data})
    })
  }

  onCarRemove = () => {
    axios.post('/api/removeCar', {
      brand:'Nissan'
    })
    .then( response => {
      this.getCars()
    })
  }

  onCarUpdate = () => {
    axios.post('/api/updateCar', {
      id:'635aa5014cfc8927a843b159',
      brand:'BMW'
    })
    .then( response => {
      this.getCars()
    })
  }
  
  render(){
    return (
      <>
        <div>
          <button
            onClick={() => this.onSubmitCar()}
          >
            Add Car
          </button>
          <button
            onClick={() => this.onCarRemove()}
          >
            Remove Car
          </button>
          <button
            onClick={() => this.onCarUpdate()}
          >
            Update Car
          </button>
          <hr/>
          { this.state.cars.map((car)=>(
            <div> - {car.brand}</div>
          ))

          }
        </div>
      </>
    )}
}

export default App;
