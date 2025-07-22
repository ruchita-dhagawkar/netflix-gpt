// useUserStore.ts
import type { User } from "firebase/auth";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;

  movieList: string[];
  setMovieList: (movies: []) => void;

  backgroundMovie: string | null;
  setBackgroundMovie: (movie: string | null) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      movieList: [],
      setMovieList: (movies) => set({ movieList: movies }),
      backgroundMovie: null,
      setBackgroundMovie: (movie) => set({ backgroundMovie: movie }),
    }),
    { name: "UserStore" }
  )
);
