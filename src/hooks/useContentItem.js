import useFetchData from './useFetchData';

const getEndpoint = (contentId) =>
  `${import.meta.env.VITE_PB_API}/collections/contents/records/${contentId}`;

function useContentItem(contentId) {
  return useFetchData(getEndpoint(contentId));
}

export default useContentItem;
