import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addrecipes = () => {
    var [recipetitle,setrecipetitle]=useState("")
    var [category,setcategory]=useState("")
    var [description,setdesription]=useState("")
    var [preparedby,setpreparedby]=useState("")
    const subdata=()=>{
        const data={"recipetitle":recipetitle,"category":category,"description":description,"preparedby":preparedby}
        console.log(data)
        axios.post("http://localhost:4000/api/recipeapp ",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("successfully added")

                }
                else 
                {
                    alert("failed to added")
                }
            }
        )
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
                    
                    <label for="" className="form-label">CATEGORY</label>
                    <select onChange={(e)=>{setcategory(e.target.value)}} name="" id="" className="form-control">
                        <option value="veg">veg</option>
                        <option value="non veg">non veg</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <labe className="form-label">DESCRIPTION</labe>
                     <textarea onChange={(e)=>{setdesription(e.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-control">PREPARED BY</label>
                    <input onChange={(e)=>{setpreparedby(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subdata} className="btn btn-danger">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addrecipes