import axios from "axios";
import React, { useEffect, useState } from "react";
import { backEndUrl } from "../constants/common";
import {Link} from 'react-router-dom'
import './css/todo-list.css'


const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed?"completed":''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed?"completed":''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed?"completed":''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={'/edit/'+props.todo.todo_description}>Edit</Link>
        </td>
    </tr>
)

export function TodosList(){

    const [data,setData] = useState([]);

    useEffect(
        ()=>{
            const load = async ()=>{
                try{

                    const res = await axios.get(backEndUrl+'/todos');
                    setData(res.data);
            
                }catch(err){
                    console.log(err);
                }
            }
            load();
        },[]
    )

    function todoList() {
        
        return data.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
        
    }

    return (
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList()}
                </tbody>
            </table>
        </div>
    );
}