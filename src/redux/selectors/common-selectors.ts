import { RootState } from "../store";

export const isAddModalOpenSelector = (state: RootState) =>
  state.common.isAddModalOpen;

export const isDeleteModalOpenSelector = (state: RootState) =>
  state.common.isDeleteModalOpen;
