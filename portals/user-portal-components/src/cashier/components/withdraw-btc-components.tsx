/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { NavLinkProps } from 'react-router-dom';
import { IconArrowLeft } from '@heathmont/sportsbet-icons';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import styled from '@emotion/styled';
import { Link, LinkProps } from '@heathmont/sportsbet-components';

import {
  userPortalContainerFlush,
  userPortalContainerInner,
  userPortalContainer,
} from '../../shared/container';

jsx;

export const WalletBackIconArrowLeft = () => (
  <IconArrowLeft
    css={{
      color: colors.neutral[20],
      paddingRight: spacing(),
      fontSize: '2rem',
    }}
  />
);

/* ESLint doesn't like this line being disabled */
/* eslint-disable */
export const WalletBackNav: React.FC<NavLinkProps & { as: any }> = ({
  /* eslint-enable */
  children,
  to,
  as,
}) => {
  return (
    <Link
      as={as}
      to={to}
      css={{
        ...userPortalContainerInner,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: colors.neutral[10],
        '&:hover': {
          color: colors.brand,
        },
      }}
    >
      {children}
    </Link>
  );
};

export const CashierHeader = styled.div({
  ...userPortalContainerFlush,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
});

export const WithdrawBTCLayout = styled.div({
  ...userPortalContainer,
  ...userPortalContainerInner,
  paddingTop: spacing('medium'),
  paddingBottom: spacing('medium'),
  [mq(breakpoints.medium)]: {
    paddingTop: spacing('xlarge'),
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridColumnGap: spacing('xlarge'),
    gridTemplateAreas: `
      "main    sidebar"
      `,
  },
});

export const WithdrawBTCMainArea = styled.div({
  gridArea: 'main',
});

export const CashierHorizontalBanner = styled.div({
  borderRadius: border.radius.small,
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: colors.neutral[70],
  padding: rem(12),
});

export const CashierHorizontalBannerText = styled.p({
  marginTop: 0,
  color: colors.neutral[20],
});

export const CashierHorizontalBannerIcon = styled.div({
  marginLeft: 'auto',
  fontSize: rem(16),
  lineHeight: rem(16),
});

export const WithdrawBTCFormWrapper = styled.div({
  marginTop: spacing('large'),
});

export const WithdrawBTCFormAmountRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
});

export const WithdrawBTCFormAmountRowInputWrapper = styled.div({
  flex: 'auto',
});

export const WithdrawBTCFormAmountRowCurrency = styled.div({
  color: colors.neutral[20],
  backgroundColor: colors.neutral[70],
  padding: spacing(),
  border: `${border.width * 2}px solid ${colors.neutral[70]}`,
  height: rem(50),
  borderRadius: border.radius.small,
});

export const WithdrawBTCMinimumAmountCaption = styled.p({
  fontSize: rem(12),
  color: colors.warning,
  marginTop: spacing('small'),
  textAlign: 'right',
});

export const WithdrawBTCMinimumSubmitWrapper = styled.div({
  marginTop: spacing('large'),
});

export const WithdrawBTCSibebarArea = styled.div({
  marginTop: spacing('large'),
  gridArea: 'sidebar',
  [mq(breakpoints.medium)]: {
    marginTop: 0,
  },
});

const cashierBanner: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  padding: spacing('medium'),
  border: `${border.width}px solid ${colors.neutral[70]}`,
  borderRadius: border.radius.small,
  marginBottom: spacing('xlarge'),
  '&:hover': {
    backgroundColor: colors.neutral[70],
  },
};

export const CashierBanner: React.FC<LinkProps> = ({
  children,
  ...props // for all LinkProps, eg "as", "to" etc..
}) => (
  <Link {...props} css={cashierBanner}>
    {children}
  </Link>
);

export const WithdrawBTCSidebarBannerHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const WithdrawBTCSidebarBannerHeaderIcon = styled.div({
  fontSize: '2rem',
  marginRight: spacing(),
});

export const WithdrawBTCSidebarBannerHeaderCaption = styled.p({
  marginTop: 0,
  fontSize: rem(16),
  color: colors.neutral[10],
});

export const WithdrawBTCSidebarBannerText = styled.p({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: colors.neutral[20],
});