import { createReducer } from "@reduxjs/toolkit";
import {
  openAddModal,
  closeAddModal,
  openDeleteModal,
  closeDeleteModal,
} from "../actions/common-actions";

interface CommonState {
  isAddModalOpen: boolean;
  isDeleteModalOpen: boolean;
}

const initialState: CommonState = {
  isAddModalOpen: false,
  isDeleteModalOpen: false,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openAddModal, (state) => {
      state.isAddModalOpen = true;
    })
    .addCase(closeAddModal, (state) => {
      state.isAddModalOpen = false;
    })
    .addCase(openDeleteModal, (state) => {
      state.isDeleteModalOpen = true;
    })
    .addCase(closeDeleteModal, (state) => {
      state.isDeleteModalOpen = false;
    });
});

export default commonReducer;
