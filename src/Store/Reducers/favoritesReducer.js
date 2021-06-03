import states from '../States/states';

const initialState = { favorites: [] }

function updateFavorites(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case states.ADD_FAVORITE:
            nextState = {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            }

            return nextState;
        
        case states.SET_FAVORITES:
            nextState = {
                ...state,
                favorites: action.payload
            }

            return nextState;
    default:
        return state;
    }
}

export default updateFavorites;