import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoLink = styled(NavLink)`
  width: 100px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }
`;
export const Title = styled.h3`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
