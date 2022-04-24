import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Authentication from '../pages/authentication/Authentication';
import Cookies from 'js-cookie';
const Router: React.FC = (): JSX.Element => {
  Cookies.get('emailReporting')
    ? console.log('emailReporting')
    : console.log('no token');

  const PublicRoutes = (): JSX.Element => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Authentication />} />
            <Route path='test' element={<div>public routes</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  const PrivateRoutes = (): JSX.Element => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<p>home</p>} />
            <Route path='/test' element={<p>private route</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return Cookies.get('emailReporting') ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Router;
