const initialState= {

    user: null ,
    userSign:{
        view: false,
        message:"",
        success:false

    }
}

const usersReducers = (state= initialState, action) => {
    switch(action.type){
        case 'USER' : return {
            ...state,
            user:action.payload
        }

        case 'message' : return {
            ...state,
            userSign:action.payload
        }
        default: return state
    }

} 




export default usersReducers