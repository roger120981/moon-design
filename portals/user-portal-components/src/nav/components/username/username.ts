import styled from '@emotion/styled';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { Link } from '@heathmont/sportsbet-components';

export const Userhub = styled(Link)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  color: colors.neutral[20],
  '&:hover': {
    color: colors.neutral[10],
  },
});

export const UserhubInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-end',
  marginRight: spacing('small'),
  [mq(breakpoints.small)]: {
    marginRight: spacing(),
  },
});

export const UserhubInfoUsername = styled.p({
  marginTop: 0,
});

export const UserhubInfoBalance = styled.p({
  marginTop: 0,
  textAlign: 'center',
  color: colors.neutral[10],
});

export const UserhubIconProfile = styled.div({
  position: 'relative',
  fontSize: '1.25rem',
  marginRight: spacing(),
  [mq(breakpoints.small)]: {
    marginRight: 0,
  },
  '& > svg': {
    fontSize: '2.5rem',
  },
});