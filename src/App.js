import { useState, useEffect } from 'react';

import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
  const [clickEnter, setClickEnter] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", () => {
        setTimeout(
          () => setClickEnter(true), 1000
        );
    });
  }, []);

  return (
    <div className="wrapper">
      {!clickEnter ? <WelcomePage/> : <MainPage />}
    </div>
  );
}

export default App;
