import { create } from 'zustand';

const imageStore = (set) => ({
  selectedImageURL: null,
  selectedImageFile: null,

  setSelectedImageURL: (selectedImageURL) => set({ selectedImageURL }),
  setSelectedImageFile: (selectedImageFile) => set({ selectedImageFile }),
});

const useImage = create(imageStore);

export default useImage;
