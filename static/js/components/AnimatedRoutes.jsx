import {
  HashRouter as BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';

import AboutPage from './AboutPage/AboutPage';
import MainPage from './MainPage/MainPage';
import Layout from './layouts/Layout';
import WorkPage from './WorkPage/WorkPage';
import NotFound from './NotFound/NotFound';

import Soulful from './Pages/Soulful';
import Cyberfam from './Pages/Cyberfam';
import Vlad from './Pages/Vlad';
import Emt from './Pages/Emt';
import Td from './Pages/Td';
import Mosaic from './Pages/Mosaic';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes
        location={location}
        key={location.pathname}>
        <Route
          path='/'
          element={<Layout />}
        />
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/work'
          element={<WorkPage />}
        />
        <Route
          path='/work/mosaic'
          element={<Mosaic />}
        />
        <Route
          path='/work/soulful'
          element={<Soulful />}
        />
        <Route
          path='/work/cyberfam'
          element={<Cyberfam />}
        />
        <Route
          path='/work/vlad'
          element={<Vlad />}
        />
        <Route
          path='/work/emt'
          element={<Emt />}
        />
        <Route
          path='/work/td'
          element={<Td />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
