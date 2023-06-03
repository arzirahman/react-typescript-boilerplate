import { store } from "./store";
import { startLoading, stopLoading, saveAccessToken } from "./slice";

export const loading = (state: boolean) => {
    if(state) store.dispatch(startLoading());
    else store.dispatch(stopLoading());
}

export const setAccessToken = (token: string) => {
    store.dispatch(saveAccessToken(token));
}