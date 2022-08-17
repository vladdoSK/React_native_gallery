export const ADD_IMAGES = "ADD_IMAGES"

const defaultState = {
    images: [],
}

export const reducer = (state=defaultState, action)=>{
    if(action.type == ADD_IMAGES)
    {
        return {...state, images: [...state.images, ...state.payload]}
    }
    return state
}


export const add_img = (payload) =>({type:ADD_IMAGES, payload});