import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    modal: false,
  },
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});

const { openModal, closeModal } = slice.actions;

export { openModal, closeModal };

export default slice.reducer;
