import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 60"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd">
      <circle cx={41.75} cy={21.75} r={21.75} />
      <path d="M33.154 12.435h-18.22a.871.871 0 0 1 0-1.742h18.22a.87.87 0 1 1 0 1.742zm0 7.359h-18.22a.871.871 0 0 1 0-1.742h18.22a.87.87 0 1 1 0 1.742zm0 7.359h-18.22a.871.871 0 0 1 0-1.742h18.22a.871.871 0 0 1 0 1.742zM5.777 1.742a4.039 4.039 0 0 0-4.035 4.035v26.292a4.039 4.039 0 0 0 4.035 4.035h26.656c.32 0 .616.177.767.46l2.986 5.578 2.984-5.578a.87.87 0 0 1 .768-.46h2.374a4.039 4.039 0 0 0 4.035-4.035V5.777a4.039 4.039 0 0 0-4.035-4.035H5.777zm30.409 43.117a.871.871 0 0 1-.769-.46l-3.506-6.553H5.777A5.784 5.784 0 0 1 0 32.069V5.777A5.784 5.784 0 0 1 5.777 0h36.535a5.784 5.784 0 0 1 5.777 5.777v26.292a5.784 5.784 0 0 1-5.777 5.777H40.46l-3.507 6.553a.87.87 0 0 1-.767.46zM23.815 60a.871.871 0 0 1-.768-.46l-3.507-6.554h-1.852a5.784 5.784 0 0 1-5.777-5.776v-4.103a.871.871 0 0 1 1.742 0v4.103a4.04 4.04 0 0 0 4.035 4.035h2.374c.32 0 .616.176.768.46l2.671 4.992.314.586 2.984-5.578a.871.871 0 0 1 .769-.46h26.655a4.04 4.04 0 0 0 4.035-4.035V20.917a4.04 4.04 0 0 0-4.035-4.035h-.873a.87.87 0 1 1 0-1.741h.873A5.784 5.784 0 0 1 60 20.917V47.21a5.784 5.784 0 0 1-5.777 5.776H28.09l-3.507 6.554a.87.87 0 0 1-.767.46z" />
    </g>
  </svg>
);

export const IconLargeMessage = styled(Svg)(
  ({
    backgroundColor,
    circleColor,
  }: {
    backgroundColor?: string;
    circleColor?: string;
  }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
