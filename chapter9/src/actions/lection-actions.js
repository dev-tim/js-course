
function selectLection(lection) {
    return {
      type: "SELECT_CURRENT_LECTION",
      lection: lection
    }
}

function fetchLectionList() {
    return {
      type: "FETCH_LECTION_LIST",
    }
}

function fetchLectionListSuccess(lections) {
    debugger;
    return {
      type: "FETCH_LECTION_LIST_SUCCESS",
      lections: lections
    }
}

function fetchLectionListFailure(error) {
    return {
      type: "FETCH_LECTION_LIST_FAILURE",
      error: error
    }
}

function fetchLectionListAsync(){
  //  debugger;
    return function(dispatch){
        dispatch(fetchLectionList())
        fetch('/api/lections', {
            method: 'get'
        }).then(function(response) {
      
            response.json().then(actualData => {
                dispatch(fetchLectionListSuccess(actualData));
            }).catch(jsonParsingError => {
                dispatch(fetchLectionListFailure(jsonParsingError));    
            })
        }).catch(function(error) {
            debugger;
            dispatch(fetchLectionListFailure(error));
        })
    }
}

export default {
    selectLection,
    fetchLectionListAsync
}