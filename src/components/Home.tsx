import type { ReactElement } from 'react';
import Header from './Header/Header';
import LatestNews from './LatestNews/LatestNews';
import Special from './Special/Special';

type HomeProps = {
  size: number;
};

const Home = ({ size }: HomeProps): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <LatestNews />
        <Special />
      </main>
    </>
  );
};

export default Home;
