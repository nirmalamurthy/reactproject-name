//----1)SAMPLE CODE
// import React, { Component } from 'react'

// export default class App extends Component {
// constructor()
// {
//     super()
//     this.state={
//         username:"Nirmala",
//         count:0
//     }
// }
// handelChange=()=>
// {
//     this.setState({username:"Rakshi"})
// }
// handelNumberChange=()=>
// {
//     this.setState({count:1})
// }



//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handelChange}>CLICK TO CHANGE</button>
//         <button onClick={this.handelNumberChange}>CLICK THE NUMBER</button>
//       </div>
//     )
//   }
// }


//-------2)COUNTER APPLICATION FOR NUM INCREMENT ,DECREMENT,RESET

// import React, { Component } from 'react'
// import "./global.css"

// export default class App extends Component {
// constructor()
// {
//     super()
//     this.state={
//         count:0
//     }
// }

// handleIncrement=()=>
// {
//     this.setState({count:this.state.count+1})
// }
// handleDecrement=()=>
// {
//     this.setState({count:this.state.count-1})
// }
// handleReset=()=>
// {
//     this.setState({count:0})
// }
// render()
// {
//     return(
//         <div className='mainBlock'>
            
//             <div className='subBlock'>
//             <h1>{this.state.count}</h1>
            
//             <h1>{this.state.handleIncrement}</h1>
//             <h1>{this.state.handleDecrement}</h1>
//             <h1>{this.state.handleReset}</h1>
//             <button onClick={this.handleIncrement}>+INCREMENT</button>
//             <button onClick={this.handleDecrement}>-DECREMENT</button>
//             <button onClick={this.handleReset}>RESET</button>
//             </div>
//         </div>
//     )
// }

  
// }

//-----3)HOOKS

// import React ,{useState}from 'react'


// const App = () => {
//     let [username,setusername]=useState("nirmala")
//     let[count,setcount]=useState(0)

//     let handlename=()=>{
//         setusername("chumi")
//     }

//     let handlecount=()=>{
//         setcount(1)
//     }
//   return (
//     <div>
//         <h1>{username}</h1>
//         <h1>{count}</h1>
//         <button onClick={handlename}>change name</button>
//         <button onClick={handlecount}>change num</button>
//     </div>
//   )
// }

// export default App


// -----4)COUNTER APPLICATION BY HOOKS CONCEPT

import React,{useState} from "react"
import "./global.css"


const App=()=>{
    let[count,setcount]=useState(0)

    let handleincrement=()=>
    {
        setcount(count+1)
    }
let handledecrement=()=>
{
    setcount(count-1)
}
let handlereset=()=>
{
    setcount(0)
}

    return(
        <div className="mainBlock">
            <h1>{count}</h1>
            <div className="subBlock">
            <button onClick={handleincrement}>+INCREMENT</button>
            <button onClick={handledecrement}>-DECREMENT</button>
            <button onClick={handlereset}>RESET</button>
            </div>
        </div>
    )
}
export default App