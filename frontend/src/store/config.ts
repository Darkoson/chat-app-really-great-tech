import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts-reducer";
import userReducer from "./reducers/user-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export type AppState = ReturnType<typeof rootReducer>;

// const configureStore = () => {
//   return createStore(rootReducer);
// };

//export default configureStore;
