import { createReducer } from "@reduxjs/toolkit";
import { authUser } from "./authActions";

const auth = createReducer([], {
  [authUser]: (_, { payload }) => payload,
});

export { auth };
