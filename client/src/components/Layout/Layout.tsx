import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Props } from './layout.interface';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }: Props) => {
  return (
    <div className='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
