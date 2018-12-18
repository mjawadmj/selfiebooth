import { createStore,applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer,{},applyMiddleware(ReduxThunk))
export const persistor = persistStore(store)