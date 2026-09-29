import type { StateCreator } from "zustand";
import type { Credentials } from "../types/types";

export interface AuthSlice extends Credentials {
  isAuth: boolean;
  signIn: (
    idInstance: Credentials["idInstance"],
    apiTokenInstance: Credentials["apiTokenInstance"],
  ) => void;
  signOut: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  idInstance: "",
  apiTokenInstance: "",
  isAuth: false,
  signIn: (idInstance, apiTokenInstance) =>
    set(() => ({ idInstance, apiTokenInstance, isAuth: true })),
  signOut: () =>
    set(() => ({ idInstance: "", apiTokenInstance: "", isAuth: false })),
});
