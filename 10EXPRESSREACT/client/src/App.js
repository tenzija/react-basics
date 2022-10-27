import React,{Component} from "react";
import axios from 'axios'

class App extends Component{
  
  componentDidMount(){
    axios.get('/api/users')
    .then( response => {
      console.log(response.data)
    })
  }
  
  render(){
    return (
      <>
        Hello
      </>
    )}
}

export default App;
