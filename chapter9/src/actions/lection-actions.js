function selectLection(lection) {
    return {
      type: "SELECT_CURRENT_LECTION",
      lection: lection
    }
}

export default {
    selectLection
}