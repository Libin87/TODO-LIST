import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backEndUrl } from "../constants/common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditTodo(props){

    const navigate = useNavigate();

    const params = useParams();

    const [data,setData] = useState({});

    function onChangeTodoDescription(e){
        data.todo_description = e.target.value;
        setData({...data})
    }

    function onChangeTodoResponsible(e){
        data.todo_responsible = e.target.value;
        setData({...data})
    }

    function onChangeTodoPriority(e){
        data.todo_priority = e.target.value;
        setData({...data})
    }

    function onChangeTodoCompleted(e){
        console.log(e.target.value)
        if(e.target.value === 'true'){
            data.todo_completed = true
        }else{
            data.todo_completed=false
        }
        setData({...data})
    }

    useEffect(()=>{
        console.log('in the life cycle')
        axios.get(backEndUrl+'/todos/'+params.id).then(
            (res) => {
                console.log(res.data)
                setData(res.data)
            }
        );
    },[]);

    function onSubmit(e){
        e.preventDefault();
        axios.post(backEndUrl+'/todos/update/'+params.id,data).then((res)=>{
            navigate('/');
        })
    }

    return (
        <div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={data.todo_description}
                            onChange={onChangeTodoDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={data.todo_responsible}
                            onChange={onChangeTodoResponsible}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={data.todo_priority==='Low'} 
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={data.todo_priority==='Medium'} 
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={data.todo_priority==='High'} 
                                onChange={onChangeTodoPriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            value={data.todo_completed?false:true}
                            onClick={onChangeTodoCompleted}
                            checked={data.todo_completed}
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>

                <br />

                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}