import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import post from './post'
import user from './user'

export default combineReducers({
  post,
  user,
  form: formReducer
})
