import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const TrendFilmList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: 0;
  margin: 0;
`;

export const TrendFilmLink = styled(Link)`
  text-decoration: none;
`;
