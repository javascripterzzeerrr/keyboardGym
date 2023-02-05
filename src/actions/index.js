import { createAction } from "@reduxjs/toolkit";


// actions for Field component
export const updateCurrentText = createAction("UPDATE_CURRENT_TEXT");
export const changeCarriage = createAction("CHANGE_CARRIAGE");
export const changeWrongCounter = createAction("CHANGE_WRONG_COUNTER");
export const updatePressCounter = createAction("UPDATE_PRESS_COUNTER");
export const updateCntLetter = createAction("UPDATE_CNT_LETTER");