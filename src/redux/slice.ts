import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../services/constants";

const initialState: AppState = {
    accessToken: '',
    loading: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        saveAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        }
    }
});

export const { saveAccessToken, startLoading, stopLoading } = appSlice.actions;
export default appSlice.reducer;