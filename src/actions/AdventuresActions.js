//Fetching adventures

export const fetchAdventures = () => {
    return dispatch => {
        dispatch({type: 'LOADING_ADVENTURES'})
       return fetch(`/adventures`)
        .then(res => res.json())
        .then(adventures => dispatch({type: 'ADVENTURES_LOADED', payload: adventures})) 
    }
}


// fetching  adventures's id

export const fetchAdventure = id => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADVENTURES'})
        return fetch(`/adventures`)
        .then(res => res.json())
        .then(adventure => dispatch({type: 'ADVENTURE_LOADED', payload: adventure}))
    }
}


// adding adventure

export const addAdventure = adventureForm => {
    let data = {
        method: 'POST',
        Headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adventureForm)
    }
    return dispatch => {
        fetch(`/adventures`, data)
        .then(res => res.json())
        .then(adventure => dispatch({
            type: 'CREATE_ADVENTURE',
            payload: adventure
        }))
    }
}


// deleting adventure

export const deleteAdventure = adventure_id =>{
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Contet-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`/${adventure_id}`, data)
        .then(res => res.json())
        .then(adventure => dispatch({
            type: 'DELETE_ADVENTURE',
            payload: adventure
        }))
    }
}

