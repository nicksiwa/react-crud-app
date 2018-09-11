import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'post',
    'user',
    'sidebar',
    'confirmDialog',
    'formDialog',
    'message',
    'loadData',
    'form',
    'formState'
  ]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default function configStore () {
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
