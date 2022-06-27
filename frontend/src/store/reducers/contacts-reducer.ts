import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { AppState } from "../config";

// Define a type for the slice state
interface ContactsState {
  selectedId: number | null;
  entries: User[];
}

// Define the initial state
const initialState: ContactsState = {
  selectedId: null,
  entries: [],
};

export const contactsSlice = createSlice({
  name: "contacts",

  initialState,

  reducers: {
    updateSelectedContactId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },

    setContacts: (state, action: PayloadAction<User[]>) => {
      const newEntities: any = [];
      action.payload.forEach((contact: User) => {
        newEntities[contact.id] = contact;
      });
      state.entries = newEntities;
    },
    addContact: (state, action: PayloadAction<User>) => {
      state.entries[action.payload.id] = action.payload;
    },

    deleteContactById: (state, action: PayloadAction<number>) => {
      delete state.entries[action.payload];
    },
  },
});

export const {
  addContact,
  setContacts,
  deleteContactById,
  updateSelectedContactId,
} = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
const contactState = (state: AppState) => state.contacts;

export const selectContacts = createSelector(contactState, (state) =>
  Object.values(state.entries)
);
export const selectActiveContactId = createSelector(
  contactState,
  (state) => state.selectedId
);

export const selectActiveContact = createSelector(contactState, (state) => {
  let id = state.selectedId;
  return id ? state.entries[id] : null;
});

export const selectContactById = (state: AppState, id: number) => {
  return contactState(state).entries[id];
};

export default contactsSlice.reducer;

// import { createAction, createReducer } from "@reduxjs/toolkit";
// import { User, Users } from "../../interfaces";

// const selectedContact = createAction<User>("CONTACT_SELECTED");
// const updateContactList = createAction<User[]>("CONTACT_LIST_UPDATE");

// export const selectedContactReducer = createReducer({}, (builder) => {
//   builder.addCase(selectedContact, (state, action) => action.payload);
// });

// export const contactsReducer = createReducer({}, (builder) => {
//   builder.addCase(updateContactList, (state, action) => action.payload);
// });
