import "./App.css";
import Student from "./components/Student";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result";
import Attendance from "./components/Attendance";

function App(){
  return(
  <div className="container1">
    <Header/>
    <div className="container">
      <Student/>
      <hr/>
      <Attendance/>
      <hr/>
      <Result/>
    </div>
    <Footer/>
  </div>
  );
}
export default App;