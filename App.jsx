// import React from "react"
// import Nav from "./Normal function/Nav"
// import Arrow from "./Arrow function/Arrow"
// import Class from "./Class based component/Class"

// const App=()=>{

//     return(
//         <>
//         <Class/>
//         <Nav/>
//         <Arrow/>
//         <div>App</div>
//         </>
//     )
// }

//CONDITIONAL RENDRING
// import React from "react"
// import Course from './conditionalrendring/Course'

// const App=()=>{
//     return(
//         < Course courseDetails={{
//             coursename:"java fullstack",
//             courseavail:true,
//             courseduration:"3 months"
//         }}/>
//     )

// }

// export default App

//1------>STATES USING CONSTRUCTOR
//  import React ,{Component}from "react";
//  class App extends Component{
//      constructor()
//  {
//      super()
//      this.state={username:"Nirmala",
//                 subject:"react",
//                 password:"123"
//             }
// }
//  render()
//  {
//      return(
//          <>
//          <h1>{this.state.username}</h1>
//             <h1>{this.state.subject}</h1>
//             <h1>{this.state.password}</h1>

        
//          </>
//      )
//  }
//  }
 
//  export default App

//---->2) STATE OBJECT

// import React,{Component} from "react"
// class App extends Component{
//     state={
//         username:"nirmala"
//     }
//     render()
//     {
//         return(
//             <>
//             <h1>{this.state.username}</h1>
//             </>
//         )
//     }
// }
// export default App


//-----3)string array inside states

import React,{Component} from "react";
class App extends Component{
    state={
        subject:"React JS",
        skills:["HTML","CSS","JS"]
    }
    render()
    {
        return(
            <>
            <h1>{this.state.subject}</h1>
            <ul>
                {this.state.skills.map((x)=>{
                    return<li>{x}</li>
                })}
            </ul>
            </>
        )
    }
}
export default App