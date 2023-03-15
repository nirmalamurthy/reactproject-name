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

import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {
constructor()
{
    super()
    this.state={
        count:0
    }
}

handleIncrement=()=>
{
    this.setState({count:this.state.count+1})
}
handleDecrement=()=>
{
    this.setState({count:this.state.count-1})
}
handleReset=()=>
{
    this.setState({count:0})
}
render()
{
    return(
        <div className='mainBlock'>
            
            <div className='subBlock'>
            <h1>{this.state.count}</h1>
            
            <h1>{this.state.handleIncrement}</h1>
            <h1>{this.state.handleDecrement}</h1>
            <h1>{this.state.handleReset}</h1>
            <button onClick={this.handleIncrement}>+INCREMENT</button>
            <button onClick={this.handleDecrement}>-DECREMENT</button>
            <button onClick={this.handleReset}>RESET</button>
            </div>
        </div>
    )
}

  
}
