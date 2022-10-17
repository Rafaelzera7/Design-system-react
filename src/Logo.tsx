import {SVGAttributes} from 'react'

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props:LogoProps) {
  return (
    <svg
      width={106}
      height={120}
      viewBox="0 0 106 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_53)" fill="#81D8F7">
        <path d="M105.31 60.01c0-6.976-8.737-13.587-22.131-17.687 3.091-13.653 1.717-24.514-4.336-27.992-1.395-.816-3.027-1.202-4.808-1.202v4.787c.987 0 1.781.193 2.447.558 2.92 1.674 4.186 8.05 3.198 16.25-.236 2.018-.622 4.143-1.095 6.31-4.207-1.03-8.8-1.824-13.63-2.339-2.898-3.971-5.903-7.578-8.93-10.733 6.998-6.504 13.566-10.067 18.031-10.067v-4.787c-5.903 0-13.63 4.207-21.444 11.505-7.813-7.255-15.541-11.42-21.444-11.42v4.787c4.443 0 11.033 3.542 18.031 10.003a101.394 101.394 0 00-8.865 10.712c-4.851.515-9.445 1.31-13.652 2.361a64.769 64.769 0 01-1.116-6.225c-1.01-8.2.236-14.575 3.133-16.271.644-.386 1.482-.558 2.469-.558v-4.787c-1.803 0-3.434.386-4.851 1.202-6.032 3.478-7.384 14.318-4.272 27.927C8.694 46.466 0 53.056 0 60.011c0 6.976 8.736 13.588 22.131 17.688-3.091 13.652-1.717 24.514 4.336 27.991 1.395.816 3.027 1.202 4.83 1.202 5.903 0 13.63-4.207 21.444-11.505 7.813 7.255 15.54 11.42 21.444 11.42 1.803 0 3.434-.387 4.851-1.203 6.032-3.477 7.384-14.317 4.272-27.927 13.308-4.1 22.002-10.711 22.002-17.666zM77.362 45.694c-.794 2.769-1.782 5.624-2.898 8.479a101.54 101.54 0 00-2.812-5.152 116.124 116.124 0 00-3.091-5.023 96.86 96.86 0 018.8 1.696zM67.53 68.554c-1.675 2.898-3.392 5.646-5.174 8.2-3.198.28-6.44.43-9.702.43-3.241 0-6.483-.15-9.66-.408a118.374 118.374 0 01-5.194-8.157 111.833 111.833 0 01-4.465-8.544 111.958 111.958 0 014.443-8.565c1.675-2.898 3.392-5.645 5.174-8.2 3.198-.279 6.44-.43 9.702-.43 3.241 0 6.483.151 9.66.409 1.781 2.554 3.52 5.28 5.194 8.157a111.833 111.833 0 014.465 8.543 120.206 120.206 0 01-4.443 8.565zm6.933-2.79a92.005 92.005 0 012.962 8.543 96.313 96.313 0 01-8.844 1.717 118.46 118.46 0 003.092-5.087c.987-1.717 1.91-3.456 2.79-5.173zM52.698 88.668a88.486 88.486 0 01-5.968-6.87c1.932.087 3.907.15 5.904.15 2.017 0 4.014-.042 5.967-.15a83.771 83.771 0 01-5.903 6.87zm-15.97-12.644a96.835 96.835 0 01-8.801-1.695c.794-2.77 1.781-5.625 2.898-8.48.88 1.718 1.803 3.435 2.811 5.152a142.035 142.035 0 003.092 5.023zm15.863-44.67a88.486 88.486 0 015.967 6.869c-1.932-.086-3.907-.15-5.903-.15-2.018 0-4.014.042-5.967.15a83.79 83.79 0 015.903-6.87zM36.706 43.997a118.564 118.564 0 00-5.882 10.24 92.014 92.014 0 01-2.962-8.544 104.268 104.268 0 018.844-1.696zM17.28 70.873C9.68 67.63 4.765 63.38 4.765 60.01s4.916-7.642 12.515-10.862c1.846-.794 3.864-1.503 5.946-2.168 1.223 4.207 2.833 8.586 4.83 13.073-1.975 4.465-3.564 8.822-4.766 13.008a65.203 65.203 0 01-6.01-2.19zm11.548 30.674c-2.92-1.674-4.186-8.05-3.198-16.25.236-2.017.622-4.142 1.095-6.31 4.207 1.03 8.8 1.824 13.63 2.34 2.898 3.97 5.903 7.577 8.93 10.732-6.998 6.505-13.566 10.068-18.031 10.068-.966-.022-1.782-.215-2.426-.58zM79.745 85.19c1.008 8.2-.237 14.576-3.135 16.271-.643.387-1.48.559-2.468.559-4.443 0-11.033-3.542-18.031-10.004 3.005-3.155 6.01-6.74 8.865-10.711 4.851-.515 9.445-1.31 13.652-2.361.494 2.168.88 4.25 1.117 6.246zm8.264-14.317c-1.846.794-3.864 1.502-5.946 2.168-1.224-4.208-2.834-8.587-4.83-13.073 1.975-4.465 3.563-8.823 4.765-13.009a68.07 68.07 0 016.032 2.19c7.599 3.241 12.515 7.492 12.515 10.862-.022 3.37-4.937 7.642-12.536 10.861z" />
        <path d="M52.633 69.82c5.418 0 9.81-4.391 9.81-9.81 0-5.417-4.392-9.81-9.81-9.81-5.417 0-9.81 4.393-9.81 9.81 0 5.419 4.393 9.81 9.81 9.81z" />
      </g>
      <defs>
        <clipPath id="clip0_1_53">
          <path fill="#fff" d="M0 0H105.31V120H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

