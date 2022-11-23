import { EVENT_ACTION } from "./type"

const initialState = {
events: ['fashion event']
}

const eventReducer = (state =initialState, action) => {
    switch(action.type){
        case EVENT_ACTION: return{
            ...state,
            events: action.payload.events
}
default: return state
    }
}

export default eventReducer;