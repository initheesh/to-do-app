import Navbar from "./components/nav-bar/Navbar";
import LeftCard from "./components/to-do-card/LeftCard";
import "./App.css"
import { useState } from "react";
import RightCard from "./components/to-do-card/RightCard";

function App() {

  const [todos,setTodos] = useState([{
    title:"Nitheesh",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicingtatem laborum asperiores at illo nulla sed. Nobis doloremque, quam ex optio quidem officia libero molestias labore delectus alias! Esse."
  },{
    title:"Nitheesh",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicingtatem laborum asperiores at illo nulla sed. Nobis doloremque, quam ex optio quidem officia libero molestias labore delectus alias! Esse."
  }])

  return (
    <div className="container">
      
    <Navbar/>
    <div className="section">
      <div className="left-section"><LeftCard todos={todos} setTodos={setTodos}/></div>
      <div className="right-section">
        {
          todos.map((obj)=>{
            return(<RightCard title={obj.title} desc={obj.desc}/>)
          })
        }
      </div>
    </div>
    </div>
  );
}

export default App;
