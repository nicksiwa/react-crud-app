import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import post from './post'
import user from './user'
import sidebar from './sidebar'

export default combineReducers({
  post,
  user,
  sidebar,
  form: formReducer
})
