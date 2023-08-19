import React, { useState } from "react";
import axios from 'axios';
import { backEndUrl } from "../constants/common";


export function CreateTodo() {

    const [data1, setData] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    });


    function onChangeTodoDescription(event) {
        data1.todo_description = event.target.value;
        console.log(data1)
        setData({ ...data1 })
    }

    function onChangeTodoResponsible(e) {
        data1.todo_responsible = e.target.value;
        console.log(data1)
        setData({ ...data1 })

    }

    function onChangeTodoPriority(e) {
        data1.todo_priority = e.target.value;
        console.log(data1)
        setData({ ...data1 })
    }

    function onsubmit(e) {
        e.preventDefault();
        console.log(data1)
        axios.post(backEndUrl + '/todos' + '/add', data1).then((res) => {
            console.log(res.data);
         })

    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Create New Todo</h3>
            <form >
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={data1.todo_description}
                        onChange={onChangeTodoDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={data1.todo_responsible}
                        onChange={onChangeTodoResponsible}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={data1.todo_priority === 'Low'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={data1.todo_priority === 'Medium'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={data1.todo_priority === 'High'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" onClick={onsubmit} />
                </div>
            </form>
        </div>
    );

}

