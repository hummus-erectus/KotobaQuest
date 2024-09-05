import { create } from "zustand"

type FirstModalState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useFirstModal = create<FirstModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))