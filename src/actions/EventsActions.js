//action creator - function that reutnrs action ( action obj creator function)


//adding event
export const addEvent = ( event, adventure ) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    }

    return dispatch => {
        fetch('/api/v1/adventures/${adventure.id}/events', data)
        .then(res => res.json())
        .then(event => {
            let result = {event, adventure}
            dispatch({
                type: 'CREATE_EVENT',
                payload: result
            })
        })
    }
}

// deleting event 

export const deleteEvent = ( event, adventure ) => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'applciation/json'
        }
    }

    return dispatch => {
        fetch('/api/v1/${adventure.id}/events/${event.id', data)
        .then(rep => res.json())
        .then(task => {
            let result = {event, adventure}
            dispatch({
                type: 'DELETE_EVENT',
                payload: result
            })
        })
    }
}


