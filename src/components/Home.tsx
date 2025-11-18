import type { ReactElement } from 'react';
import Header from './Header/Header';

type HomeProps = {
  size: number;
};

const Home = ({ size }: HomeProps): ReactElement => {
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default Home;
