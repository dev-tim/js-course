const initialState = {
  selectedLection: null,
  lectionList: [],
  isPending: false
}

export default function lectionReducer(state = initialState, action) {
    switch (action.type) {
        case "SELECT_CURRENT_LECTION":
            debugger;
          return Object.assign({}, state, {
            selectedLection: action.lection
          })
        case "FETCH_LECTION_LIST":
          debugger;
          return Object.assign({}, state, {
            isPending: true
          })  
        case "FETCH_LECTION_LIST_SUCCESS":
          debugger;
          return Object.assign({}, state, {
            isPending: false,
            lectionList: action.lections
          })    
        default:
          return state
      }
}