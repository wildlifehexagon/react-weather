import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import rootReducer from "../reducers/rootReducer"

const enhancer = composeWithDevTools(applyMiddleware(thunk))

const configureStore = () => {
  const store = createStore(rootReducer, enhancer)
  return store
}

export default configureStore
