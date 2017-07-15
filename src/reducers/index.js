import { combineReducers } from 'redux'

import libraries from './library'
import selection from './selection'

export default combineReducers({
  libraries,
  selectedLibraryId: selection
})
