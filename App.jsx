//----1) FAKER CONCEPT TO GENERATE  RANDOM PICS etc

// import React from 'react'
// import{faker} from '@faker-js/faker'
// import { useState } from 'react'

// const App = () => {
//     let [img , setImg] =useState(faker.image.avatar())
//     let handleChange=()=>{
//         setImg(faker.image.avatar())
//     }



//   return (
//     <div>
//         <img src={img} alt=""/>
//         <button onClick={handleChange}>change</button>
//     </div>
//   )
// }

// export default App


//----2) TOAST CONCEPT TO GENERATE POP UP MSGS

// import React from 'react'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const App = () => {

//     let handleSubmit=()=>{
//         toast.success("logged in successfully")
       
//     }
    
//   return (
//     <div>
//         <ToastContainer/>
//         <button onClick={handleSubmit}>CLICK FOR MSG</button>
//     </div>
//   )
// }

// export default App


//----3)EVENTS

// 1.egs for nonsynthetic event

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor()
//     {
//         super()
//         this.state={username:"APPU"}
//     }
//     componentDidMount()
//     {
//         let btn=document.querySelector('button')
//         btn.addEventListener('click',()=>{
//             this.setState({username:this.state.username="KING OF MANY HEARTS"})
//         })
//     }
// render() {
//     return (
//         <>
//       <div>{this.state.username}</div>
//       <button>CHANGE</button>
//       </>
//     )
//   }
// }
  


//  ----2)

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor()
//     {
//         super()
//         this.state={username:""}
//     }
//     componentDidMount()
//     {
//         let input=document.querySelector('input')
//         input.addEventListener("keypress",(e)=>{
//             this.setState({username:e.target.value})
//         })
//     }
//   render() {
//     return (
//       <>
//       <h1>{this.state.username}</h1>
//       <input type="text"/>
//       </>
//     )
//   }
// }



// egs for SYNTHETIC EVENT

import React, { Component } from 'react'

export default class App extends Component {
    constructor()
    {
        super()
        this.state={username:""}
    }
  render() {
    return (
      <>
      <h1>{this.state.username}</h1>
      <input type="text"  onChange={(e)=>{
        this.setState({username:e.target.value})}}/>

      </>
    )
  }
}
