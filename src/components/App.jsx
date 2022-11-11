import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Movies } from 'pages/Movies/Movies';
import { Box } from './Box';

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Box maxWidth="1200px" mx="auto" mb={5}>
      {' '}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </Box>
  );
};
