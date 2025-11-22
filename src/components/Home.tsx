import type { ReactElement } from 'react';
import Header from './Header/Header';
import LatestNews from './LatestNews/LatestNews';
import Special from './Special/Special';
import Social from './Social/Social';
import Promo from './Promo/Promo';
import Footer from './Footer/Footer';

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <LatestNews />
        <Special />
        <Social />
        <Promo />
      </main>
      <Footer />
    </>
  );
};

export default Home;
