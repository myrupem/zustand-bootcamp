import { create } from "zustand";

const useInsultsStore = create((set) => ({
    insults : [],
    randomInsult : null,

    setInsults : (newInsults) => set(() => ({ insults : newInsults })),

    setRandomInsult: () => set((state) => {
        const randomInsult = state.insults.length > 0
          ? state.insults[Math.floor(Math.random() * state.insults.length)]
          : null;
        return { randomInsult };
      }),

    addNewInsult: (newInsult) => set((state) => ({
      insults: [...state.insults, newInsult]
    })),

    removeInsult : (id) => set((state) => ({ insults: state.insults.filter(insult => insult.id !== id)})),
}))

export default useInsultsStore