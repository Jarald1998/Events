import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventAction } from '../redux/eventAction'
const Crud = () => {
    const [inputEvent, setInputEvent] = useState('');
    const eventlist = useSelector((state) => state.event.events);
    const dispatch = useDispatch();
    const handleInput = (param) => {
        setInputEvent(param.target.value)
    }
    const handleAdd = () => {
        const eventAdded = eventlist.concat(inputEvent);
        dispatch(eventAction({...eventlist, events: eventAdded}))
        setInputEvent('')
    }

    const handleDelete = () => {
        const eventAdded = eventlist.filter(event => event !== inputEvent);
        dispatch(eventAction({...eventlist, events: eventAdded}))
        setInputEvent('')
    }

    return (
        <div>
            <input value={inputEvent} onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <button>Mark As Completed</button>
        </div>
    );
}


export default Crud;