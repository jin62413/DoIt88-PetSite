import {create} from 'zustand';

const useBirthDateStore = create((set) => ({
  year: '',
  month: '',
  day: '',
  isValid: true,
  errorMessage: '',

  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  setDay: (day) => set({ day }),
  setIsValid: (isValid) => set({ isValid }),
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
