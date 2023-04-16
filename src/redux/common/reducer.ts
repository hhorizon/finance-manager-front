import { createReducer } from "@reduxjs/toolkit";
import { openAddModal, closeAddModal } from "./actions";
// import { MovieWithFavorite, FirebaseStatus } from "../../types";

interface CommonState {
  isAddModalOpen: boolean;
}

const initialState: CommonState = {
  isAddModalOpen: false,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openAddModal, (state, { payload }) => {
      state.isAddModalOpen = true;
    })
    .addCase(closeAddModal, (state, { payload }) => {
      state.isAddModalOpen = false;
    });
});

export default commonReducer;
