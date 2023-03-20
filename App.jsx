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

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor()
//     {
//         super()
//         this.state={username:""}
//     }
//   render() {
//     return (
//       <>
//       <h1>{this.state.username}</h1>
//       <input type="text"  onChange={(e)=>{
//         this.setState({username:e.target.value})}}/>

//       </>
//     )
//   }
// }

//REFS CONCEPT in class based

//eg 1


// import React from "react"
// import { Component,createRef } from "react"

// export default class App extends Component {
// constructor()
// {
//   super()
//   this.state={name:"hello world"}
//   this.h1Ref=createRef()
// }
// componentDidMount()
// {
//   let h1=document.querySelector('h1')
//   console.log(h1,"dom way");
//   console.log(this.h1Ref.current,"react way")
// }

//   render() {
//     return (
//       <>
//       <h1 ref={this.h1Ref}>{this.state.name}</h1>
//       </>
//     )
//   }
// }

//EG ---2)

// import React, { Component } from 'react'
// import { createRef } from 'react'

// export default class App extends Component {
//   constructor()
//   {
//     super()
//     this.state={company:"Qspiders"}
//     this.spanRef=createRef()
//     this.btnRef=createRef()
//   }
//   render() {
//     return (
//       <div>
//         <span ref={this.spanRef}>{this.state.company}</span>
//         <br />
//         <button ref={this.btnRef} onClick={()=>
//         {
//           this.setState({company:"jspiders"})
//           this.spanRef.current.style.color="blue"
//           this.spanRef.current.style.border="5px dashed black"
//           this.spanRef.current.style.padding="5px"
//           this.spanRef.current.style.margin="20px"
//           this.btnRef.current.style.backgroundcolor="green"
//           this.btnRef.current.style.borderradius="20%"
//           this.btnRef.current.style.border="solid"

//         }}>CHANGE COMPANY</button>
//       </div>
//     )
//   }
// }


// EGS FOR REFS IN FUNCTION BASED  COMPONENT

// import React ,{useRef}from 'react'

// const App = () => {
//   let h1Ref=useRef()
//   let handlechange=()=>{
//     h1Ref.current.style.color="red"
//   }
//   return (
//     <div>
//       <h1 ref={h1Ref}> App Component</h1>
//       <button onClick={handlechange}>CHANGE</button>
//     </div>
//   )
// }

// export default App


// import React,{ useRef, useState } from 'react';
// import IMG from "./5.jpg"
// const App=()=>{
//   let [photo,setphoto]=useState(IMG)
//   let [loading,setloading]=useState(true)
//   let imgRef=useRef()
//   let handlechange=()=>{
//     if (loading==true)
//     {
//       setloading(!true)
//       imgRef.current.style.borderRadius="80%"
//       imgRef.current.style.border="5px solid purple"
//     }
//     else{
//       setloading(!false)
//       imgRef.current.style.borderradius="0"
//       imgRef.current.style.border="none"

//     }
//   }
//   return(
//     <div>
//       <img src={photo} alt="cartoon" ref={imgRef} height="350px" width="300px"/>
//       <button onClick={handlechange}>{loading ? "ON" : "OFF"}</button>
//     </div>
//   )
// }
// export default App

//EG 3)

// import React from 'react'
// import eye from './do.png'
// import { useState } from 'react'

// const App = () => {
//   let [password,setpassword]=useState(true)
//   let showpassword=()=>{
//     if (password==true)
//     {
//       setpassword(!true)
//     }
//     else{
//       setpassword(!false)
//     }
//   }
//   return (
//     <div>
//       <input type={password ? "text" : "password"}name="" id='' />
//       <br />
//       <img src={eye} alt="" height="20px"  width="20px" onClick={showpassword} />
//     </div>
//   )
// }

// export default App

//eg for playing and pausing the video

import React ,{useState,useRef}from 'react'
import VIDEO from "./movie.mp4.mp4"

const App = () => {
  let[video,setvideo]=useState(VIDEO)
  let[loading,setloading]=useState(false)
  let videoRef=useRef()
  let palyorpause=()=>{
    if(!loading)
    {
      setloading(true)
      videoRef.current.play()
    }
    else
    {
      setloading(false)
      videoRef.current.pause()
    }
  }
  return (
    <div>
      <video src={video} onClick={palyorpause} ref={videoRef}></video>
    </div>
  )
}

export default App