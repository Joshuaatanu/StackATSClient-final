import { create } from "zustand";

export const useToken = create((set) => ({
    token: "",
    setToken: () => set((tokenValue: string) => ({ token: tokenValue })),
    clearToken: () => set({ token: "" }),
}))