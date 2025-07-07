import { HashRouter, Route, Routes } from 'react-router-dom';

// Layouts:
import MainLayout from '../shared/layouts/MainLayout';

// Pages:
import GeneralPage from '../pages/GeneralPage';

import AboutPage from '../pages/AboutPage';
import CatalogGeneralPage from '../pages/catalog/CatalogGeneralPage';
import CatalogGroupOnePage from '../pages/catalog/catalogGroupOne/CatalogGroupOnePage';
import CatalogGroupTwoPage from '../pages/catalog/catalogGroupTwo/CatalogGroupTwoPage';
import CatalogGroupThreePage from '../pages/catalog/catalogGroupThree/CatalogGroupThreePage';

import ContactsPage from '../pages/ContactsPage';

import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<GeneralPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />

          <Route path="catalog" element={<CatalogGeneralPage />} />
          <Route path="catalog/groupOne" element={<CatalogGroupOnePage />} />
          <Route path="catalog/groupTwo" element={<CatalogGroupTwoPage />} />
          <Route
            path="catalog/groupThree"
            element={<CatalogGroupThreePage />}
          />

          <Route path="favourite" element={<FavouritePage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
