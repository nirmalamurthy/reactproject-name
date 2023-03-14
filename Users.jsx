import React from "react";

const Users=(props)=>{
    let data=props.data
    return(
        <div>
            <table border="4px"  style={{textAlign:"center"}} > 
                <tr>
                    <th>Name</th>
                    <th>College</th>
                    <th>Branch</th>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Contact</th>
                    <th>Image</th>
                </tr>
                {data.map((x)=>{
                    return<tr>
                        <td>{x.name}</td>
                        <td>{x.clg}</td>
                        <td>{x.branch}</td>
                        <td>{x.course}</td>
                        <td>{x.duration}</td>
                        <td>
                            <ol>
                                {x.contact.map((x)=>{
                                    return<li>{x}</li>})}
                                
                                
                            </ol>
                        </td>
                        <td><img src={x.image} alt="" style={{height:"80px", width:"80px"}}></img></td>





                    </tr>
                })
                }









           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
    
           
           
           
            </table>
        </div>
    )

}
export default Users