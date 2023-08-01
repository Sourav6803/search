import "./Search.css"
import { BiSearch } from 'react-icons/bi'
import logo from "./export.jpg"

import React, { useEffect, useRef, useState } from 'react'
import UserData from "./UserData"


const Search = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [ivalue, setValue] = useState("")
  const type = useRef()


  useEffect(() => {

    filter && fetch(`http://localhost:9900/filterImportData?${ivalue}=${filter}`)
      .then(res => res.json())
      .then(da => {
        console.log(da.responce)
        setData(da.responce)
      })
      .catch(err => console.log(err))
  }, [filter])


  return (

    <>

      {/* <nav className="container-fluid navbar-expand-lg navbar-light m-3" style={{ backgroundColor: "", height: "60px" }}>


        <div className="d-flex  justify-content-end align-items-center " >
          <ul className=" ">
            <li className="active ">
              <a className="nav-link" href="#">Import Export Data <span className="sr-only"></span></a>
            </li>
            <li className="">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="">
              <a className="nav-link" href="#">Login</a>
            </li>

          </ul>
        </div>
      </nav> */}




      <div className="search_div " style={{ height: "35vh", backgroundImage: `url(${logo})` }}>
        <div className="mt-3">
          <h1 className="d-flex align-items-center justify-content-center  text-white" >Search Import Export Data Of India</h1>
        </div>
        <div className="radioBtn d-flex align-items-center justify-content-center ">
           
            <input className=" fs-1 text-white " type="radio" value="HSN_Code" name="data" onChange={e => setValue(e.target.value)} />HSN_Code
            <input className="fs-1 text-white"  type="radio" value="Supplier_Name" name="data" onChange={e => setValue(e.target.value)} />Supplier_Name
          
        </div>
        <div className='search'>
          {/* <select className="bg-warning text-white text-bold m-0 p-0" style={{ height: "8vh", width: "6vw", borderRadius: "10px" }} ref={type}>
            <option value="HSN_Code">HSN_Code</option>
            <option value="Supplier_Name">Supplier_Name</option>
          </select> */}
          <input className="search fs-1S" type='text' placeholder='Enter HSN Code/Supplier_Name' onChange={e => setFilter(e.target.value)} />
          <button type="submit" value='search' style={{ height: "9vh", width: "6vw", borderRadius: "10px" }} className="bg-warning text-white fs-1 m-0 p-0">Search</button>
        </div>
      </div>

      <div className=" mt-3 d-flex align-items-center justify-content-center ">
        <div className=" box_data  " style={{ height: "30vh", borderRadius: "20px" }}>
          <div className="m-3">
            <h1>Detailed Import Data of {data.length}</h1>
          </div>
          <div className="row" >
            <div className="col small d-flex align-items-center justify-content-center " style={{ height: "20vh", borderRadius: "20px" }}>
              <div className="">
                <h1 className="d-flex justify-content-center  ">5,150</h1>
                <h4>Import Shipment Records found</h4>
              </div>
            </div>
            <div className="col small d-flex align-items-center justify-content-center" style={{ height: "20vh", borderRadius: "20px" }}>
              <div className="">
                <h2>Detailed Analysis & Trends of:</h2>
                <h2 className="d-flex justify-content-center">456</h2>
                <div className="bg-primary text-white">
                  <h2 className="d-flex align-items-center justify-content-center">Click to view</h2>
                </div>
              </div>
            </div>
            <div className="col small  d-flex align-items-center justify-content-center" style={{ height: "20vh", borderRadius: "20px" }}>
              <div>
                <h2>Customs Import Duty of:</h2>
                <h2 className="d-flex justify-content-center">34456</h2>
                <div className="bg-primary text-white">
                  <h2 className="d-flex align-items-center justify-content-center w-100">Click to view</h2>
                </div>
              </div>
            </div>
            <div className="col small d-flex align-items-center justify-content-center " style={{ height: "20vh", borderRadius: "20px" }}>
              <div>
                <h2>Trademarks on this page</h2>
                <div className="bg-primary text-white">
                  <h2 className="d-flex align-items-center justify-content-center">Click to view</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {
        data.length && <div className="result">
          <table>

            <thead>
              <tr>
                <th scope="col">Bill_of_Entry_Date</th>
                <th scope="col">Importer_Name</th>
                <th scope="col">HSN_Code</th>
                <th scope="col">Product_Description</th>
                <th scope="col">Supplier_Name</th>
                <th scope="col">Supplier_Country</th>
                <th scope="col">Unit_Rate_in_FC</th>
                <th scope="col">Total_Rate_in_FC</th>
                <th scope="col">Unit</th>
                <th scope="col">Currency</th>
              </tr>
            </thead>


            <tbody>
              <UserData data={data} />
            </tbody>

          </table>
        </div>
      }

    </>
  )

}

export default Search
