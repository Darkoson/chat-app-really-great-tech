import { combineReducers, createStore } from "redux";
import { UserReducer } from "./reducers/user-reducer";
import { DeviceReducer } from "./reducers/device-reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    device: DeviceReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
