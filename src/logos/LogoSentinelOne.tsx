/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/explicit-function-return-type */
import type { SVGProps } from 'react';

function SvgLogoSentinelOne(properties: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill='none'
      height={130}
      width={78}
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      {...properties}
    >
      <filter
        id='logo-sentinel-one_svg__a'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
        height={36}
        width={76}
        x={1}
        y={94}
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_2808_171227' stdDeviation={3} />
      </filter>
      <path
        clipRule='evenodd'
        d='M32.122 0h12.936v77.347H32.122zm16.07 96 12.926-8.01V21.026A32.251 32.251 0 0 0 48.192 15.3zm-32.17-7.97 12.936 8.01v-80.7a32.23 32.23 0 0 0-12.936 5.686zm48.23-84.355v82.913l6.008-3.724a15.32 15.32 0 0 0 6.898-13.017V30.688c.03-11.294-12.906-27.013-12.906-27.013zM.002 69.817A15.29 15.29 0 0 0 6.9 82.833l6.008 3.725V3.675S.002 19.395.002 30.688z'
        fill='#000'
        fillRule='evenodd'
      />
      <g filter='url(#logo-sentinel-one_svg__a)' opacity={0.1}>
        <path
          d='M39 124c17.673 0 32-5.373 32-12s-14.327-12-32-12-32 5.373-32 12 14.327 12 32 12z'
          fill='#000'
        />
      </g>
    </svg>
  );
}

export default SvgLogoSentinelOne;
