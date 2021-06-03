import states from '../States/states';

const initialState = { cats: [], currentCat: "" }

function updateCats(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case states.ADD_CAT:
            nextState = {
                ...state,
                cats: [
                    ...state.cats,
                    action.payload
                ]
            }

            return nextState;
        
        case states.SET_CATS:
            nextState = {
                ...state,
                cats: action.payload
            }

            return nextState;
        case states.SET_CURRENT_CAT:
            nextState = {
                ...state,
                currentCat: action.payload
            }

            return nextState;
    default:
        return state;
    }
}

export default updateCats;