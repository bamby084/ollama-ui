import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IModelStore {
  selectedModel: string | null;
  setSelectedModel: (modelName: string) => void;
}

export const useModelStore = create<IModelStore>()(
  persist(
    (set) => ({
      selectedModel: null,
      setSelectedModel: (modelName: string) => set({ selectedModel: modelName }),
    }),
    {
      name: 'model-storage',
      partialize: (state) => ({ selectedModel: state.selectedModel }),
    }
  )
);