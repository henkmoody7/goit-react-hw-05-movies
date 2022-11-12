import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Input = styled(TextField)`
  width: 500px;
  padding: 0;
  margin-right: 50px;
`;
export const SearchButton = styled(Button)`
  height: 53px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: ${p => p.theme.space[3]}px;
`;
