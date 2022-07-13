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

    setBlockedIds: (state, { payload }: PayloadAction<number[]>) => {
      state.blockedIds = payload;
    },

    blockContact: (state, { payload }: PayloadAction<number>) => {
      if (!state.blockedIds.includes(payload)) {
        state.blockedIds.push(payload);
      }
    },
    unblockContact: (state, { payload }: PayloadAction<number>) => {
      state.blockedIds = state.blockedIds.filter((id) => id !== payload);
    },
  },
});

export const {
  setContacts,
  updateSelectedContactId,
  blockContact,
  unblockContact,
  setBlockedIds,
} = contactsSlice.actions;

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
