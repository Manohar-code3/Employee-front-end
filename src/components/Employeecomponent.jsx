// import React from 'react'
import {  useEffect, useState } from "react"
import { CreateEmployee, getEmployee, updateEmployee } from "../Services/EmployeeService"
import { useNavigate,useParams } from "react-router-dom"
import {  ListDepartment } from "../Services/DepartmentService"

const Employeecomponent = () => 
{
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [departmentid,setdepartmentid]=useState('')
    const [departments,setdepartment]=useState([])

    const navigator =useNavigate()
    const {id}=useParams()

    useEffect(()=>{
        ListDepartment().then((response) => {
            setdepartment(response.data)
        }).catch(error =>{
            console.error(error)
        })
    },[])

    const [error,seterror]=useState({
        firstname:'',
        lastname:'',
        email:'',
        department:''
    })
    useEffect(() =>{
        if(id)
        {
            getEmployee(id).then((response) =>
            {
                setfirstname(response.data.firstname)
                setlastname(response.data.lastname)
                setemail(response.data.email)
                setdepartmentid(response.data.departmentid)
            }).catch(error =>{
                console.error(error)
            })
        }
    },[id])

    function saveOrUpdateEmployee(e)
    {
        e.preventDefault()
        if(validateform())
        {
            const employee={firstname,lastname,email,departmentid}
            console.log(employee)
            if(id)
            {
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data)
                    navigator("/employees")
                }).catch(error =>{
                    console.error(error)
                })
                    
            }
            else{
                CreateEmployee(employee).then((response)=>{
                        console.log(response.data)
                        navigator("/employees")
                    }).catch(error =>{
                        console.error(error)
                    })
            }

        }
        
    }

    function validateform()
    {
        let valid=true;
        const errorcopy={... error}

        if(firstname.trim())
        {
            errorcopy.firstname=''
        
        }
        else{
            errorcopy.firstname='firstname is required'
            valid=false;
        }
        if(lastname.trim())
        {
            errorcopy.lastname=''
        }
        else{
            errorcopy.lastname='lastname is required'
            valid=false;
        }
        if(email.trim())
        {
            errorcopy.email=''
        }
        else{
            errorcopy.email='email is required'
            valid=false;
        }

        if(departmentid){
            errorcopy.department = ''
        }
        else {
            errorcopy.department = 'Select Department'
            valid = false
        }
        seterror(errorcopy);
        return valid;
    }
    

    function handleFirstName(e)
    {
        setfirstname(e.target.value)
    }
    function handlelastName(e)
    {
        setlastname(e.target.value)
    }
    function handleemail(e)
    {
        setemail(e.target.value)
    }
    function page()
    {
        if(id)
        {
            return <h2 className="text-center" >Update employee</h2>  
        }
        else{
            return <h2 className="text-center" >Add employee</h2>
        }
    }
    return (
    <div className="container">
        <br /><br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {/* <h2 className="text-center" >Add employee</h2> */}
                {page()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">FirstName</label>
                            <input  
                                type="text"
                                placeholder="enter firstname"
                                name="firstname"
                                value={firstname}
                                className={`form-control ${ error.firstname ? 'is-invalid' : ''}`}
                                onChange={handleFirstName}

                            ></input>
                            {error.firstname && <div className='invalid-feedback'>{error.firstname}</div> }
                        
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">LastName</label>
                            <input  
                                type="text"
                                placeholder="enter lastname"
                                name="lastname"
                                value={lastname}
                                className={`form-control ${ error.lastname ? 'is-invalid' : ''}`}
                                onChange={handlelastName}

                            ></input>
                            {error.lastname && <div className="invalid-feedback">{error.lastname}</div> }

                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">email</label>
                            <input  
                                type="email"
                                placeholder="enter email"
                                name="email"
                                value={email}
                                className={`form-control ${ error.email ? 'is-invalid' : ''}`}
                                onChange={handleemail}

                            ></input>
                            {error.email && <div className="invalid-feedback">{error.email}</div> }

                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">select department</label>
                           <select
                               className={`form-control ${ error.department ? 'is-invalid' : ''}`}
                                value={departmentid}
                                onChange={(e) => setdepartmentid(e.target.value)} 
                            >
                                <option value='select department'>Select Department</option>
                                {
                                    departments.map(department =>
                                        <option key={department.id} value={department.id}>{department.dep_name}</option>
                                    )
                                }
                            </select>
                            {error.department && <div className="invalid-feedback">{error.department}</div> }

                        </div>
                        <button className='btn btn-success ' onClick={ saveOrUpdateEmployee} >Submit</button>

                    </form>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Employeecomponent