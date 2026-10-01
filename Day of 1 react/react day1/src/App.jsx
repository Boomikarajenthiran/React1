

import {Component} from "react"
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
// import './App.css'
class App extends Component{
  render(){
    return(
      <>

      <Header/>
      <Body/>
      <About/>
      <Contact/>
      <Footer/>

      </>
    
    )
  }
}
export default App