import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchrecipes = () => {
    const [data,setdata]=useState([{"category":"","description":"","preparedby":""}])
    const [recipetitle,setrecipetitle]=useState("")
    const subdata=()=>{
        const data={"recipetitle":recipetitle}
        console.log(data)
        
        axios.post("http://localhost:4000/api/recipesearch",data).then((response)=>{
            
            setdata(response.data.data)

        })
    }
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
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">RECIPE TITLE</label>
                    <input onChange={(e)=>{setrecipetitle(e.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-danger">SEARCH</button>
                </div>
            </div>

            {data.map((value,key)=>
    {
        return<div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    CATEGORY:
                <input type="text" value={value.category} className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                DESCRIPTION:
                <input type="text" value={value.description} className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                PREPARED BY:
                <input type="text" value={value.preparedby} className="form-control"/>
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <button   onClick={()=>{deleteApiCall(value._id)}} className="bt btn-success">DELETE</button>

    </div>
                
              
                
                </div>

                  

    })}
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Searchrecipes