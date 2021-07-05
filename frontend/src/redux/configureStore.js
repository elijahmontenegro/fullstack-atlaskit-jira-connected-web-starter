  
import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const isDeveloping = process.env.NODE_ENV !== 'production';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      (isDeveloping && window.devToolsExtension) ? window.devToolsExtension() : f => f
    )
  )
}