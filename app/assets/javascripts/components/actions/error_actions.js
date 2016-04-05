import * as types from './action_types.js'

export function addErrors(errors) {
  return {
    type: types.ADD_ERRORS,
    errors
  }
}

export function clearErrors() {
  return {
    type: types.CLEAR_ERRORS
  }
}

export function addErrorsOnTimer(errors) {
  return (dispatch) => {
    let $errorsBox = $('#errorsBox')

    dispatch(addErrors(errors))
    $errorsBox.fadeIn(100)
    setTimeout(() => {
      $errorsBox.fadeOut(300, () => {
        dispatch(clearErrors())
      })
    }, 3000)
  }
}
