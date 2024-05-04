import { create } from "zustand";

import { InfoValues } from "@/app/page";
import { PlanValues } from "@/app/plan/form";

interface StoreState {
  info: null | InfoValues;
  plan: PlanValues;
  addons: string[];
  isConfirmed: boolean;
  updateInfo: (data: InfoValues) => void;
  updatePlan: (data: Partial<PlanValues>) => void;
  updateAddons: (data: string[]) => void;
  confirm: () => void;
}

const defaultValues = {
  info: null,
  plan: { id: "0", type: "0" },
  addons: ["0", "1"],
  isConfirmed: false,
};

export const useAppStore = create<StoreState>((set) => ({
  ...defaultValues,
  updateInfo: (data: InfoValues) => set(() => ({ info: data })),
  updatePlan: (data: Partial<PlanValues>) =>
    set((state) => ({ plan: { ...state.plan, ...data } })),
  updateAddons: (data: string[]) => set(() => ({ addons: data })),
  confirm: () => set({ isConfirmed: true }),
}));
