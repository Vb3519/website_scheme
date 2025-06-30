// Ui:
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import GeneralPage from '../pages/GeneralPage';

const App = () => {
  return (
    <div className="h-screen flex flex-col font-[Roboto]">
      {/* ----- Хеадер (навигационное меню): ----- */}
      <Header />

      {/* ----- Главная страница сайта: ----- */}
      <GeneralPage />

      {/* ------------- Футер: -------------- */}
      <Footer />
    </div>
  );
};

export default App;
