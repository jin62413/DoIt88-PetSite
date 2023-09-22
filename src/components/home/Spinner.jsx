function Spinner({ size = 100, message = '로딩 중...', ...restProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: 'auto' }}
      width={size}
      height={size}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      {...restProps}
    >
      <title>{message}</title>
      <circle cx="84" cy="50" r="10" fill="#6663f0">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="0.25s"
          keySplines="0 0.5 0.5 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="10;0"
        ></animate>
        <animate
          attributeName="fill"
          begin="0s"
          calcMode="discrete"
          dur="1s"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="#6663f0;#9bd7b9;#ffbac7;#ffdc60;#6663f0"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#6663f0">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="0s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#ffdc60">
        <animate
          attributeName="r"
          begin="-0.25s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.25s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#ffbac7">
        <animate
          attributeName="r"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#9bd7b9">
        <animate
          attributeName="r"
          begin="-0.75s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="0;0;10;10;10"
        ></animate>
        <animate
          attributeName="cx"
          begin="-0.75s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.25;0.5;0.75;1"
          repeatCount="indefinite"
          values="16;16;16;50;84"
        ></animate>
      </circle>
    </svg>
  );
}

export default Spinner;

// function Spinner({
//   size = 200,
//   message = '로딩 중...',
//   colors = ['#93dbe9', '#689cc5', '#5e6fa3'],
//   ...restProps
// }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       display="block"
//       preserveAspectRatio="xMidYMid"
//       viewBox="0 0 100 100"
//       {...restProps}
//     >
//       <title>{message}</title>
//       <circle cx="80" cy="50" r="5" fill={colors[0]}>
//         <animate
//           attributeName="cx"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="80;35.00000000000001"
//         ></animate>
//         <animate
//           attributeName="cy"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="50;75.98076211353316"
//         ></animate>
//         <animate
//           attributeName="fill"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="#93dbe9;#689cc5"
//         ></animate>
//       </circle>
//       <circle cx="35" cy="75.981" r="5" fill={colors[1]}>
//         <animate
//           attributeName="cx"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="35.00000000000001;34.999999999999986"
//         ></animate>
//         <animate
//           attributeName="cy"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="75.98076211353316;24.019237886466847"
//         ></animate>
//         <animate
//           attributeName="fill"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="#689cc5;#5e6fa3"
//         ></animate>
//       </circle>
//       <circle cx="35" cy="24.019" r="5" fill={colors[2]}>
//         <animate
//           attributeName="cx"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="34.999999999999986;80"
//         ></animate>
//         <animate
//           attributeName="cy"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="24.019237886466847;49.99999999999999"
//         ></animate>
//         <animate
//           attributeName="fill"
//           dur="1.282051282051282s"
//           keyTimes="0;1"
//           repeatCount="indefinite"
//           values="#5e6fa3;#93dbe9"
//         ></animate>
//       </circle>
//     </svg>
//   );
// }

// export default Spinner;
