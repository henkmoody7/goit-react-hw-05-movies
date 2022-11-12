import { Box } from 'components/Box';
import { useLocation } from 'react-router-dom';
import { AdditionalInfoLink, Title } from './AditionalInfo.styled';
export const AditionalInfo = () => {
  const location = useLocation();
  return (
    <>
      <Title>Additional information</Title>
      <Box display="flex" justifyContent="space-evenly" alignItem="center">
        {' '}
        <AdditionalInfoLink to={`cast`} state={{ from: location.state?.from }}>
          Cast
        </AdditionalInfoLink>
        <AdditionalInfoLink
          to={`reviews`}
          state={{ from: location.state?.from }}
        >
          Reviews
        </AdditionalInfoLink>
      </Box>
    </>
  );
};
