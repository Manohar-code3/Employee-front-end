import { useEffect, useState } from "react"
import { DeleteDepartment, ListDepartment } from "../Services/DepartmentService"
import { Link ,useNavigate} from "react-router-dom"



const ListDepartmentComponent = () => {
   const  navigator=useNavigate()
    

    const [departments,setdepartment]=useState([])
    useEffect( ()=>{
        getalldep()
        
    },[])
    function getalldep()
    {
        ListDepartment().then((response) => {
            console.log(response.data)
            setdepartment(response.data)
        }).catch(error => {
            console.error(error)

        })
    }

    function updateDepartment(id)
    {
        navigator(`/edit-department/${id}`)
    }
    function deleteDepartment(id)
    {
        DeleteDepartment(id).then(() =>{
            
            getalldep()
        }).catch(error =>{
            console.error(error)
        })
    }
   
  return (
    <div className="container">
        <h2 className="text-center">List of Department</h2>
        <Link to='/add-department' className="btn btn-primary mb-2">Add Department</Link>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Department Name</th>
                    <th>Department Descrption</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map( department =>
                    <tr key={department.id}>
                        <td>{department.id}</td>
                        <td>{department.dep_name}</td>
                        <td>{department.description}</td>
                        <td>
                            <button onClick={() =>updateDepartment(department.id) } className="btn btn-info">Update</button>
                            <button onClick={()=>deleteDepartment(department.id)} className="btn btn-danger" style={{marginLeft: '10px'}}>Delete</button>
                        </td>
                        
                    </tr>
                    )
                }
            </tbody>
    


        </table>

    </div>
  )
}

export default ListDepartmentComponent