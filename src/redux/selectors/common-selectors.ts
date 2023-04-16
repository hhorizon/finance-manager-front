import { RootState } from "../store";

export const isAddModalOpenSelector = (state: RootState) =>
  state.common.isAddModalOpen;
