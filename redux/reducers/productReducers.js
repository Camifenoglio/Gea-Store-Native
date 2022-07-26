const initialState = {
    products: [],
    oneProduct: {},
    filterPerCategory: [],
    favoriteProducts: [],
    filterPerName:[]
}

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                filterPerCategory: action.payload,
                filterPerName:action.payload
            } 
        case 'GET_ONE_PRODUCT':
            return {
                ...state,
                oneProduct: action.payload,
            }
        case 'FILTER_PER_CATEGORY':
            let filter = state.products.filter(product => product.category.includes(action.payload.toLowerCase()))
            return {
                ...state,
                filterPerCategory: filter
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favoriteProducts: [...state.favoriteProducts, action.payload],
            }
        case 'FILTER_PRODUCTS':
            return {
                ...state,
                filterPerName: state.products.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase().trim()))
            }
        default:
            return state
    }
}

export default productReducers;