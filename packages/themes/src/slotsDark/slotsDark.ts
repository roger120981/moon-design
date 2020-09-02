import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const color = {
  piccolo: {
    120: '#0048FF',
    100: '#1A5BFF',
    80: '#3D71F5',
  },
  hit: {
    120: '#7C8192',
    100: '#898D9A',
    80: '#9598A3',
  },
  goten: {
    100: '#FFFFFF',
  },
  goku: {
    100: '#232323',
    80: '#303030',
    40: '#4A4A4A',
    10: '#636363',
  },
  gohan: {
    100: '#1D1D1D',
    80: '#292929',
    40: '#363636',
    10: '#4F4F4F',
  },
  beerus: {
    100: '#333333',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#9E9E9E',
  },
};

const slotsDark: Theme = {
  ...sharedTokens,
  brand: 'Slots.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    ...color,
  },
  colorScheme: 'dark',
};

export default slotsDark;
