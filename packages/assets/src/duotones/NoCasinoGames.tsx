import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = ({ secondaryColor, ...rest }: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity={0.1}
      d="M106.633 104.835H37.3521C33.7851 104.835 30.9141 101.935 30.9141 98.397V43.587C30.9141 40.02 33.8141 37.149 37.3521 37.149H106.633C110.2 37.149 113.071 40.049 113.071 43.587V98.397C113.071 101.964 110.2 104.835 106.633 104.835Z"
      fill="currentColor"
    />
    <path
      d="M64.641 104.132H45.682V61.509C45.682 56.3041 49.8951 52.091 55.1 52.091H119.712C124.917 52.091 129.13 56.3041 129.13 61.509V91.785C129.13 92.1179 128.861 92.387 128.528 92.387C128.195 92.387 127.926 92.1178 127.926 91.785V61.509C127.926 56.9699 124.251 53.295 119.712 53.295H55.1C50.5609 53.295 46.886 56.9699 46.886 61.509V102.428V102.928H47.386H64.641C64.9739 102.928 65.243 103.197 65.243 103.53C65.243 103.842 64.9654 104.132 64.641 104.132Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M40.5491 116.406V102.928H64.0321H64.3156L64.4612 102.685L66.5196 99.245H107.967C108.3 99.245 108.569 99.5141 108.569 99.847C108.569 100.18 108.3 100.449 107.967 100.449H67.4831H67.1996L67.0541 100.692L64.9957 104.132H42.2531H41.7531V104.632V116.406C41.7531 118.596 43.543 120.386 45.7331 120.386H101.355C101.688 120.386 101.957 120.655 101.957 120.988C101.957 121.321 101.688 121.59 101.355 121.59H45.7331C42.8773 121.59 40.5491 119.262 40.5491 116.406Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M133.777 94.069C133.636 94.069 133.492 94.0173 133.337 93.8852C133.108 93.645 133.112 93.2736 133.348 93.0375C134.601 91.7845 135.292 90.1206 135.292 88.363V53.157C135.292 52.8241 135.561 52.555 135.894 52.555C136.227 52.555 136.496 52.8241 136.496 53.157V88.363C136.496 90.4333 135.68 92.3944 134.207 93.8674L134.56 94.221L134.207 93.8674C134.06 94.0137 133.895 94.069 133.777 94.069Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M135.894 79.076H128.702C128.369 79.076 128.1 78.8068 128.1 78.474C128.1 78.1411 128.369 77.872 128.702 77.872H135.894C136.227 77.872 136.496 78.1411 136.496 78.474C136.496 78.8068 136.227 79.076 135.894 79.076Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M64.641 104.132H54.585V63.887C54.585 62.1621 55.9852 60.762 57.71 60.762H117.073C118.798 60.762 120.198 62.1621 120.198 63.887V92.568C120.198 92.9009 119.929 93.17 119.596 93.17C119.263 93.17 118.994 92.9009 118.994 92.568V63.887C118.994 62.8278 118.132 61.966 117.073 61.966H57.71C56.6509 61.966 55.789 62.8278 55.789 63.887V102.428V102.928H56.289H64.641C64.9739 102.928 65.243 103.197 65.243 103.53C65.243 103.842 64.9654 104.132 64.641 104.132Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M76.502 100.449C76.1692 100.449 75.9 100.18 75.9 99.847V61.364C75.9 61.0311 76.1692 60.762 76.502 60.762C76.8349 60.762 77.104 61.0311 77.104 61.364V99.847C77.104 100.18 76.8349 100.449 76.502 100.449Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M98.339 100.449C98.0062 100.449 97.7371 100.18 97.7371 99.847V61.364C97.7371 61.0311 98.0062 60.762 98.339 60.762C98.6719 60.762 98.941 61.0311 98.941 61.364V99.847C98.941 100.18 98.6719 100.449 98.339 100.449Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M100.601 114.746H74.4141C72.5754 114.746 70.9411 112.893 70.9411 110.403C70.9411 107.913 72.5754 106.06 74.4141 106.06H102.08C102.413 106.06 102.682 106.329 102.682 106.662C102.682 106.995 102.413 107.264 102.08 107.264H74.4141C73.7103 107.264 73.1326 107.709 72.7552 108.273C72.3727 108.844 72.1451 109.602 72.1451 110.403C72.1451 111.194 72.3828 111.952 72.7665 112.523C73.142 113.082 73.7181 113.542 74.4141 113.542H100.601C100.934 113.542 101.203 113.811 101.203 114.144C101.203 114.477 100.934 114.746 100.601 114.746Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M105.524 129.253V129.265L105.525 129.277C105.539 129.587 105.289 129.855 104.951 129.855H68.411C68.0782 129.855 67.809 129.586 67.809 129.253C67.809 128.92 68.0782 128.651 68.411 128.651H104.922C105.255 128.651 105.524 128.92 105.524 129.253Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M63.8002 129.855H58.1162C57.7833 129.855 57.5142 129.586 57.5142 129.253C57.5142 128.92 57.7833 128.651 58.1162 128.651H63.8002C64.133 128.651 64.4022 128.92 64.4022 129.253C64.4022 129.586 64.133 129.855 63.8002 129.855Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M76.5021 75.77H55.2161C54.8833 75.77 54.6141 75.5009 54.6141 75.168C54.6141 74.8351 54.8833 74.566 55.2161 74.566H76.5021C76.835 74.566 77.1041 74.8351 77.1041 75.168C77.1041 75.5009 76.835 75.77 76.5021 75.77Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M119.625 75.77H98.3391C98.0062 75.77 97.7371 75.5009 97.7371 75.168C97.7371 74.8351 98.0062 74.566 98.3391 74.566H119.625C119.958 74.566 120.227 74.8351 120.227 75.168C120.227 75.5009 119.958 75.77 119.625 75.77Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M98.339 91.169H76.502C76.1692 91.169 75.9 90.8999 75.9 90.567C75.9 90.2341 76.1692 89.965 76.502 89.965H98.339C98.6719 89.965 98.941 90.2341 98.941 90.567C98.941 90.8999 98.6719 91.169 98.339 91.169Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M65.134 96.686C64.989 96.686 64.873 96.657 64.728 96.599C64.148 96.367 63.887 95.729 64.09 95.178L68.121 84.883H62.292C61.683 84.883 61.19 84.39 61.19 83.781C61.19 83.172 61.683 82.679 62.292 82.679H68.556C69.194 82.679 69.774 82.998 70.122 83.52C70.47 84.042 70.557 84.709 70.325 85.289L66.178 95.99C66.004 96.425 65.598 96.686 65.134 96.686Z"
      fill="currentColor"
    />
    <path
      d="M108.286 96.686C108.141 96.686 108.025 96.657 107.88 96.599C107.3 96.367 107.039 95.729 107.242 95.178L111.273 84.883H105.444C104.835 84.883 104.342 84.39 104.342 83.781C104.342 83.172 104.835 82.679 105.444 82.679H111.708C112.346 82.679 112.926 82.998 113.274 83.52C113.622 84.042 113.709 84.709 113.477 85.289L109.301 95.99C109.127 96.425 108.721 96.686 108.286 96.686Z"
      fill="currentColor"
    />
    <path
      d="M86.6521 83.549C86.5071 83.549 86.3911 83.52 86.2461 83.462C85.6661 83.23 85.4051 82.592 85.6081 82.041L89.6391 71.746H83.8101C83.2011 71.746 82.7081 71.253 82.7081 70.644C82.7081 70.035 83.2011 69.542 83.8101 69.542H90.0741C90.7121 69.542 91.2921 69.861 91.6401 70.383C91.9881 70.905 92.0751 71.572 91.8431 72.152L87.6671 82.853C87.4931 83.259 87.0871 83.549 86.6521 83.549Z"
      fill="currentColor"
    />
    <path
      d="M125.251 134.792C120.234 134.792 115.217 132.878 111.389 129.05C103.762 121.423 103.762 108.982 111.389 101.326C119.016 93.699 131.457 93.699 139.113 101.326C142.825 105.038 144.855 109.939 144.855 115.188C144.855 120.437 142.825 125.338 139.113 129.05C135.285 132.878 130.268 134.792 125.251 134.792ZM125.251 97.817C120.785 97.817 116.348 99.499 112.955 102.892C106.169 109.678 106.169 120.698 112.955 127.484C119.741 134.27 130.761 134.27 137.547 127.484C144.333 120.698 144.333 109.678 137.547 102.892C134.154 99.528 129.688 97.817 125.251 97.817Z"
      fill="currentColor"
    />
    <path
      d="M112.172 129.398C111.882 129.398 111.621 129.282 111.389 129.079C110.954 128.644 110.954 127.948 111.389 127.513L137.547 101.355C137.982 100.92 138.678 100.92 139.113 101.355C139.548 101.79 139.548 102.486 139.113 102.921L112.955 129.05C112.723 129.282 112.462 129.398 112.172 129.398Z"
      fill="currentColor"
    />
    <path
      d="M135.894 53.07C131.979 53.07 128.789 49.88 128.789 45.965C128.789 42.05 131.979 38.86 135.894 38.86C139.809 38.86 142.999 42.05 142.999 45.965C142.999 49.88 139.809 53.07 135.894 53.07ZM135.894 41.064C133.197 41.064 130.993 43.268 130.993 45.965C130.993 48.662 133.197 50.866 135.894 50.866C138.591 50.866 140.795 48.662 140.795 45.965C140.795 43.239 138.591 41.064 135.894 41.064Z"
      fill="currentColor"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const Component = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);

const NoCasinoGames: React.FC<any> = props => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

NoCasinoGames.defaultProps = {
  verticalAlign: 'middle',
};
export default NoCasinoGames;
