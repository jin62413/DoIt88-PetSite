import {create} from 'zustand';

const useImageStore = create((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
}));

export default useImageStore;