import { createReducer } from "@reduxjs/toolkit";

import {
  updateCurrentText,
  changeCarriage,
  changeWrongCounter,
  updatePressCounter,
  updateCntLetter
} from "../actions/index";

const initialState = {
  currentText: "",
  carriage: 0,
  wrongCounter: 0,
  pressCounter: 0,
  cntLetter: "L"
};

const field = createReducer(initialState, builder => {
  builder
        .addCase(updateCurrentText, (state, action) => {
          state.currentText = action.payload
        })
        .addCase(changeCarriage, state => {
          state.carriage = state.carriage + 1
        })
        .addCase(changeWrongCounter, state => {
          state.wrongCounter = state.wrongCounter + 1
        })
        .addCase(updatePressCounter, state => {
          state.pressCounter = state.pressCounter + 1
        })
        .addCase(updateCntLetter, (state, action) => {
          state.cntLetter = action.payload
        })
        .addDefaultCase(() => {});
});

export default field;