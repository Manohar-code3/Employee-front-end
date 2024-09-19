import  { useEffect, useState } from 'react'
import { deleteEmployee, ListEmployee } from '../Services/EmployeeService'
import {  useNavigate } from 'react-router-dom'

const ListEmpC = () => 
    {
    const navigate =useNavigate();
    const [employees,setemployee]= useState([])
    function getallemployees()
    {
        ListEmployee().then((response)=>{
            setemployee(response.data);

        })
        .catch(error =>  {
            console.error(error);
        })
    }
    useEffect(() =>{
        getallemployees()
        
    },[]
)

  function addemployee()
  {
    navigate('/add-employee')
    
  }  
  function editEmployee(id) {
    navigate(`/edit-employee/${id}`)
    
  }
  function deleteE(id)
  {
    
    deleteEmployee(id).then(()=>
        {
            getallemployees()
        }).catch(error =>{
            console.error(error)
        })

  }
  
   
  return (

    <div className="container">
        <h1 className="text-center">List of employee details</h1>
        <button type="button" className="btn btn-primary" onClick={addemployee}>Add Employee</button>
        
        <br />
        <br/>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() =>editEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() =>deleteE(employee.id)}  style={{marginLeft: '10px'}}>Delete</button>

                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmpC