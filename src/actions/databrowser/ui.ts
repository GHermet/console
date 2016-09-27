import Constants from '../../constants/databrowser/ui'
import * as Immutable from 'immutable'
import {ReduxAction} from '../../types/reducers'

export function hideNewRow(): ReduxAction {
  return {
    type: Constants.HIDE_NEW_ROW,
  }
}

export function toggleNewRow(): ReduxAction {
  return {
    type: Constants.TOGGLE_NEW_ROW,
  }
}

export function resetUI(): ReduxAction {
  return {
    type: Constants.RESET_UI,
  }
}

export function setNodeSelection(ids: Immutable.List<string>): ReduxAction {
  return {
    type: Constants.SET_NODE_SELECTION,
    payload: { ids },
  }
}

export function clearNodeSelection(): ReduxAction {
  return {
    type: Constants.CLEAR_NODE_SELECTION,
  }
}

export function toggleNodeSelection(id: string) {
  return {
    type: Constants.TOGGLE_NODE_SELECTION,
    payload: { id },
  }
}

export function toggleFilter(): ReduxAction {
  return {
    type: Constants.TOGGLE_FILTER,
  }
}