import type { ReactElement } from 'react';
import Header from './Header/Header';
import LatestNews from './LatestNews/LatestNews';

type HomeProps = {
  size: number;
};

const Home = ({ size }: HomeProps): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <LatestNews />
      </main>
    </>
  );
};

export default Home;
