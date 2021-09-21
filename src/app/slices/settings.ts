import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SettingsState {
  darkModeSetting: boolean;
  useHDSetting: boolean;
}

const initialState: SettingsState = {
  darkModeSetting: false,
  useHDSetting: false,
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (
      state,
      action: PayloadAction<{ darkModeSetting: boolean; useHDSetting: boolean }>
    ) => {
      state.darkModeSetting = action.payload.darkModeSetting;
      state.useHDSetting = action.payload.useHDSetting;
    },
  },
});
export const { updateSettings } = settingsSlice.actions;
export const selectSettings = (state: RootState) => state.settings;
export default settingsSlice.reducer;
