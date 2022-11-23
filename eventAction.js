import { EVENT_ACTION } from './type'

export const eventAction = (events) => {
    return {
        type: EVENT_ACTION,
        payload: events
    }
}