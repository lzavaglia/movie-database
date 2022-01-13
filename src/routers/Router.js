// AppRouter
import { Routes, Route } from "react-router-dom";
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import IndividualMovie from '../components/IndividualMovie';

function AppRouter() {
  return (
    <div className="wrapper">
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={< About/>} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="individual-movie/:id" element={<IndividualMovie />} />
          </Routes>

        </main>
      <Footer />
    </div>
  );
}

export default AppRouter;
