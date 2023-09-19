import { generateRandomNumber } from './randomNumber';

export const uploadPngFile = () => {
  const randomNum = generateRandomNumber();

  const avatarPaths = [
    '/src/assets/base_images/avatar0.png',
    '/src/assets/base_images/avatar1.png',
    '/src/assets/base_images/avatar2.png',
    '/src/assets/base_images/avatar3.png',
    '/src/assets/base_images/avatar4.png',
    '/src/assets/base_images/avatar5.png',
    '/src/assets/base_images/avatar6.png',
    '/src/assets/base_images/avatar7.png',
    '/src/assets/base_images/avatar8.png',
    '/src/assets/base_images/avatar9.png',
  ];

  const baseImage = new Image();
  baseImage.src = avatarPaths[randomNum];

  return new Promise((resolve) => {
    baseImage.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;

      const context = canvas.getContext('2d');
      context.drawImage(baseImage, 0, 0);

      canvas.toBlob((blob) => {
        const baseImageFile = new File([blob], `avatar${randomNum}.png`, {
          type: 'image/png',
        });

        resolve({ baseImage: baseImage.src, baseImageFile });
      }, 'image/png');
    };
  });
};
