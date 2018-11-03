const initialState = {
  selectedLection: null,
}

export default function lectionReducer(state = initialState, action) {
    switch (action.type) {
        case "SELECT_CURRENT_LECTION":
            debugger;
          return Object.assign({}, state, {
            selectedLection: action.lection
          })
        default:
          return state
      }
}