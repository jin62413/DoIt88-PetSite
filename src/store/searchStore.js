import { create } from 'zustand';

const searchStore = (set) => ({
  searchText: '',
  data: '',
  isLoading: false,
  setSearchText: (searchText) => set({ searchText }),
  setData: (data) => set({ data }),
  setIsLoading: (isLoading) => set({ isLoading }),
});

const useSearch = create(searchStore);

export default useSearch;
