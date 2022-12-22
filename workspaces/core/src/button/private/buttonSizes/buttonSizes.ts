import mergeClassnames from '../../../utils/mergeClassnames';
import lgPadding from './lgPadding';
import mdPadding from './mdPadding';
import smPadding from './smPadding';
import xlPadding from './xlPadding';
import xsPadding from './xsPadding';
import type { ButtonSettingsProps } from '../types/ButtonProps';

const buttonSizes = ({
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonSettingsProps): string => {
  if (size === 'xs') {
    return mergeClassnames(
      xsPadding({ icon, iconLeft, iconRight, iconOnly }),
      'h-6 gap-1 text-moon-12 rounded-moon-i-xs'
    );
  }
  if (size === 'sm') {
    return mergeClassnames(
      smPadding({ icon, iconLeft, iconRight, iconOnly }),
      'h-8 gap-1 text-moon-14 rounded-moon-i-sm'
    );
  }
  if (size === 'lg') {
    return mergeClassnames(
      lgPadding({ icon, iconLeft, iconRight, iconOnly }),
      'h-12 gap-2 text-moon-16 rounded-moon-i-sm'
    );
  }
  if (size === 'xl') {
    return mergeClassnames(
      xlPadding({ icon, iconLeft, iconRight, iconOnly }),
      'h-14 gap-2 text-moon-16 rounded-moon-i-md'
    );
  }
  return mergeClassnames(
    mdPadding({ icon, iconLeft, iconRight, iconOnly }),
    'h-10 gap-2 text-moon-14 rounded-moon-i-sm'
  );
};

export default buttonSizes;