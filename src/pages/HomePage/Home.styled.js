import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendFilmList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  padding: 0;
  margin: 0;
`;

export const TrendFilmItem = styled.li`
  width: calc((100% / 3) - 15px);
  height: 100%;
  border-radius: ${p => p.theme.radii.normal};
`;
export const TrendFilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  text-decoration: none;

  &:hover {
    box-shadow: -4px -4px 9px 7px rgba(186, 186, 186, 1);
  }
`;
export const MovieTitle = styled.h2`
  color: ${p => p.theme.colors.white};
  margin: 0;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.accent};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;
