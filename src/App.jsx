import './App.css'
import Heder from './components/Heder'
import ListEmpC from './components/ListEmpC'
import Footercomponent from './components/Footercomponent'
import Employeecomponent from './components/Employeecomponent'
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Heder/>
        <Routes>
          <Route path='/'  element={<ListEmpC/>}></Route>
          <Route path='/employees'  element={<ListEmpC/>}></Route>
          <Route path='/add-employee'  element={<Employeecomponent/>}></Route>
          <Route path='/edit-employee/:id' element={<Employeecomponent/>}></Route>


          <Route path='/departments' element={<ListDepartmentComponent/>}></Route>
          <Route path='/add-department' element={<DepartmentComponent/>}></Route>
          <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>
  

        </Routes>
      
      
        <Footercomponent/>
      </BrowserRouter>
      
    </>
  )
}

export default App
