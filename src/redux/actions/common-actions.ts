import { createAction } from "@reduxjs/toolkit";

export const openAddModal = createAction("common/openAddModal");

export const closeAddModal = createAction("common/closeAddModal");

export const openDeleteModal = createAction("common/openDeleteModal");

export const closeDeleteModal = createAction("common/closeDeleteModal");
