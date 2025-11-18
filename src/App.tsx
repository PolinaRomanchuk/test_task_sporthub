import { useEffect, useState, type ReactElement } from 'react';
import Home from './components/Home';

const App = (): ReactElement => {
  let [size, setSize] = useState(document.documentElement.clientWidth);

  useEffect((): void | (() => void) => {
    function handle(): void {
      setSize(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div className="wrapper">
      <Home size={size} />
    </div>
  );
};

export default App;
