import { create } from "zustand";
import axios from "axios";

export const useTodoData = create((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/14",
      );
      set({ user: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data.message || err.message || "Fetch failed",
        loading: false,
      });
    }
  },
}));
