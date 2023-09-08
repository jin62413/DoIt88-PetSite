import useFetchData from './useFetchData';

const endpoint = `${import.meta.env.VITE_PB_API}/collections/contents/records`;

function useContentsList() {
  return useFetchData(endpoint);
}

export default useContentsList;
