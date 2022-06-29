import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces";
import { AppState } from "../config";

// Define a type for the slice state
interface ContactsState {
  selectedId: number | null;
  blockedIds: number[];
  entries: User[];
}
 
// Define the initial state
const initialState: ContactsState = {
  selectedId: null,
  blockedIds: [],
  entries: [],
};

export const contactsSlice = createSlice({
  name: "contacts",

  initialState,

  reducers: {
    updateSelectedContactId: (state, { payload }: PayloadAction<number>) => {
      state.selectedId = payload;
    },

    setContacts: (state, { payload }: PayloadAction<User[]>) => {
      state.entries = payload;
    },

    blockContact: (state, { payload }: PayloadAction<number>) => {
      if (!state.blockedIds.includes(payload)) {
        state.blockedIds.push(payload)
      }
    },
    unblockContact: (state, { payload }: PayloadAction<number>) => {
     state.blockedIds = state.blockedIds.filter((id) => id !== payload);
    },
  },
});

export const { setContacts, updateSelectedContactId, blockContact , unblockContact } =
  contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
const contactState = (state: AppState) => state.contacts;

export const selectContacts = createSelector(
  contactState,
  (state) => state.entries
);
export const selectActiveContactId = createSelector(
  contactState,
  (state) => state.selectedId
);

export const selectActiveContact = createSelector(contactState, (state) => {
  let id = state.selectedId;
  return state.entries.find((contact) => contact.id === id);
});

export const selectBlockedIds = (state: AppState) => {
  return contactState(state).blockedIds;
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
