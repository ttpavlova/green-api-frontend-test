import type { StateCreator } from "zustand";
import type { Credentials } from "../types/types";

export interface AuthSlice extends Credentials {
  isAuth: boolean;
  logIn: (
    idInstance: Credentials["idInstance"],
    apiTokenInstance: Credentials["apiTokenInstance"],
  ) => void;
  logOut: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  idInstance: "",
  apiTokenInstance: "",
  isAuth: false,
  logIn: (idInstance, apiTokenInstance) =>
    set(() => ({ idInstance, apiTokenInstance, isAuth: true })),
  logOut: () =>
    set(() => ({ idInstance: "", apiTokenInstance: "", isAuth: false })),
});
