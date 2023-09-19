// export async function uploadSvgFile(url, fieldName) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error('Failed to fetch SVG');
//     }

//     const svgData = await response.text();

//     console.log(svgData);

//     const blob = new Blob([svgData], { type: 'image/svg+xml' });
//     const file = new File([blob], `${fieldName}.svg`, {
//       type: 'image/svg+xml',
//     });

//     // formData 변수에는 업로드할 데이터가 포함됩니다.
//     console.log(file);
//   } catch (error) {
//     console.error('Error uploading SVG:', error);
//   }
// }
import avatar0 from '@/assets/base_images/avatar0.png';
import avatar1 from '@/assets/base_images/avatar1.png';
import avatar2 from '@/assets/base_images/avatar2.png';
import avatar3 from '@/assets/base_images/avatar3.png';
import avatar4 from '@/assets/base_images/avatar4.png';
import avatar5 from '@/assets/base_images/avatar5.png';
import avatar6 from '@/assets/base_images/avatar6.png';
import avatar7 from '@/assets/base_images/avatar7.png';
import avatar8 from '@/assets/base_images/avatar8.png';
import avatar9 from '@/assets/base_images/avatar9.png';
import avatar10 from '/src/assets/base_images/avatar0.png'
import { generateRandomNumber } from './randomNumber';

const avatar = [
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
];

// export const uploadSvgFile = () => {
//   const randomNum = generateRandomNumber();

//   const baseImage = avatar[randomNum];

//   console.log(baseImage);
//   // console.log(svgData);

//   const blob = new Blob([baseImage], { type: 'image/png' });
//   console.log(blob);
//   // console.log(blob);
//   const baseImageFile = new File([blob], `avatar${randomNum}.png`, {
//     type: 'image/png',
//   });

//   console.log(baseImageFile);

//   // console.log(file);
//   return { baseImage, baseImageFile };
//   // formData 변수에는 업로드할 데이터가 포함됩니다.
// };


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
    '/src/assets/base_images/avatar9.png'
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
          type: 'image/png'
        });

        resolve({ baseImage: baseImage.src, baseImageFile });
      }, 'image/png');
    };
  });
};