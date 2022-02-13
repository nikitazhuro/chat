import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers)

export const myStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof myStore.getState>
export type AppDispatch = typeof myStore.dispatch