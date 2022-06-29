import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contacts-slice";
import userReducer from "./slices/user-slice";

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
