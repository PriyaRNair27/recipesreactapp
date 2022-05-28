
import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewrecipes = () => {
    var [viewlist,setviewlist]=useState([])
    axios.get("http://localhost:4000/api/recipeview").then(
      (Response)=>{
        console.log(Response.data)
        setviewlist(Response.data.data)
      }
    )
    const deleteApiCall=(id)=>{
        const data={"_id":id}
       console.log(data)
       axios.post("http://localhost:4000/api/recipedelete",data).then((response)=>
       {
           if(response.data.status=="success")
           {
               alert("success")
           }
           else
           {
               alert("error")
           }
       })
      
    }
  return (
    <div>
        <Header/>
        <div className="container">
          <div className="row">

<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <div className="row ">
        {viewlist.map((value,key)=>
        {
            return <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                <div class="card" >
 <center> <img style={{width:250,height:250}} src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/></center>
  <div class="card-body">
    <p class="card-title"><b>recipe title: </b>{value.recipetitle}</p>
    <p class="card-text"><b>category: </b>{value.category}</p>
    <p class="card-text"><b>description: </b>{value.description}</p>
    <p class="card-text"><b>preparedby: </b>{value.preparedby}</p>
    <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>
  </div>
</div>
</div>
        })}
        </div>
        </div>
        </div>
    
        </div>
    </div>
  )
}

export default Viewrecipes