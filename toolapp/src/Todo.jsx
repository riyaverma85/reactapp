import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { addTask,removeTask } from "./todoSlice";
import { useState } from "react";
const Todo=()=>{
    const data=useSelector((state)=>state.todo.task)
    const dispatch=useDispatch();
    const [txt,setTxt]=useState("")
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.work}</td>
                <td>
                  <span onClick={()=>{dispatch(removeTask({id:key.id}))}}>remove</span>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <div className='taskbox'>
          Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
        <button onClick={()=>{dispatch(addTask({work:txt}))}}>Add</button><br/><br/>
        </div>
    <Table striped bordered hover size="sm" variant='light'>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Todo;