export const getPbImageURL = (item, fileName = 'image') =>
  `https://geppetto.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
