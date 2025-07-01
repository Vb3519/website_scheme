import { Outlet } from 'react-router-dom';

import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col font-[Roboto] lg:h-full">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
