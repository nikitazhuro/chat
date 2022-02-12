import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({

})

export const myStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof myStore.getState>
export type AppDispatch = typeof myStore.dispatch