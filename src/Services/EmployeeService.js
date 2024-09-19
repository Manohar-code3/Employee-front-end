import  axios  from "axios";

const REST_API="http://localhost:8080/api/employee"

export const ListEmployee= () =>   axios.get(REST_API);

export const CreateEmployee = (employee) => axios.post(REST_API,employee);

export const getEmployee = (employeeid) => axios.get(REST_API + "/" +employeeid);
export const updateEmployee =(employeeid,employee) => axios.put(REST_API+"/"+employeeid, employee);

export const deleteEmployee =(employeeid) => axios.delete(REST_API+"/"+employeeid);


