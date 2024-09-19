import { useEffect, useState } from "react";
import { createDepartment, getDepartmentId, updateDep } from "../Services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');
    const {id}=useParams()
    const navigate = useNavigate();
    
    
    
    function saveOrUpdateDepartment(e) {
        e.preventDefault();
        const department = { dep_name: departmentName, description: departmentDescription };
        console.log(department);
        if(id)
            {
                updateDep(department,id).then((response) => 
                {
                    console.log(response.data)
                    navigate("/departments")
                }).catch(error =>{
                    console.error(error)
                })
            }
            else{
                createDepartment(department).then((response) => {
                    console.log(response.data);
                    navigate('/departments');
                }).catch(error => {
                    console.error(error);
                });
            }
       
    }
    useEffect(()=>{
        getDepartmentId(id).then((response) =>{
            setDepartmentName(response.data.departmentName)
            setDepartmentDescription(response.data.departmentDescription)

        }).catch(error => {
            console.error(error)
        })
            


    },[id])
    
    function pagetittle(){
        if (id)
        {
            return <h2 className="text-center"> UPdate Department</h2>
        }
    
        else
        {
            return <h2 className="text-center"> ADD Department</h2>

        }

    }


    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {pagetittle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Department Name:</label>
                                <input
                                    type="text"
                                    name="departmentName"
                                    placeholder="Enter the Department Name"
                                    className="form-control"
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Department Description:</label>
                                <input
                                    type="text"
                                    name="departmentDescription"
                                    placeholder="Enter the Department Description"
                                    className="form-control"
                                    value={departmentDescription}
                                    onChange={(e) => setDepartmentDescription(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success mb-2" onClick={(e) => saveOrUpdateDepartment(e)}>Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentComponent;
