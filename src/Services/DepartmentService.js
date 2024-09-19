import axios from "axios";
const REST_API="http://localhost:8080/api/departments"


export  const ListDepartment = () => axios.get(REST_API);

export const createDepartment = (department) => axios.post(REST_API,department);

export const getDepartmentId=(departmentID) => axios.get(REST_API+"/"+departmentID);

export const updateDep =(department,departmentId) => axios.put(REST_API+"/"+departmentId,department)

export const DeleteDepartment =(departmentID) =>axios.delete(REST_API+"/"+departmentID)