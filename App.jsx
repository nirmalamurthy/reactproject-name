import React from "react"
import JSON from "./userdata.json"
import Course from "./Course"
import "./global.css"


const App=()=>{
    return(
        <div>
            <Course payload={JSON}/>
        </div>

    )
}
export default App

