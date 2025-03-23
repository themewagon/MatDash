import { useRoutes } from 'react-router';
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import customTheme from './utils/theme/custom-theme';
import router from './routes/Router';

function App() {
  const routing = useRoutes(router);
  return (
    <>
      <ThemeModeScript />
      <Flowbite theme={{ theme: customTheme }}>{routing} </Flowbite>
    </>
  );
}

export default App;
