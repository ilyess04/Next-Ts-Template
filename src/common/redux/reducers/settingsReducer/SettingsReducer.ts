import { createSlice } from "@reduxjs/toolkit";
import { ISettingsReducer } from "@/common/interfaces";
import { INIT_SETTINGS_STATE } from "@/common/consts";

const SettingsReducer = createSlice({
  name: "settings",
  initialState: INIT_SETTINGS_STATE,
  reducers: {
    setLang(state: ISettingsReducer, action) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = SettingsReducer.actions;

export default SettingsReducer.reducer;
