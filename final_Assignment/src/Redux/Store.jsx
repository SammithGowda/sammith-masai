import { signupreducer } from "./Signup/Reducer";
import { loginreducer } from "./Login/Reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const root = combineReducers({
  signup: signupreducer,
  login: loginreducer,
});
// export const Store = createStore(root);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
export const Store = createStore(root, enhancer);
