import React,{useState} from "react";

export function Homepage() {

    const [choreDesc, setChoreDesc] = useState('starting');
    const [name, setName] = useState();
    const [date, setDate] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
    }

    function onchange(e){
        setChoreDesc(e.target.value);
    }

    return (
        <form onSubmit={e => { handleSubmit(e) }}>
            <label>Chore Description</label>
            <br />
            <input
                name='choreDesc'
                type='text'
                value={choreDesc}
                onChange={onchange}
            />
            <br />
            <label>Name</label>
            <br />
            <input
                name='userName'
                type='text'
            />
            <br />
            <label>Date</label>
            <br />
            <input
                name='dt'
                type='date'
            />
            <br />
            <input
                className='submitButton'
                type='submit'
                value='Log Chore'
            />
        </form>
    )
}