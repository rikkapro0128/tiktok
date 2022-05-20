import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout, OnlyHeader } from '@/layouts';

function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          {publicRoutes.map((routing, index) => {
            let Layout = DefaultLayout;
            const Componenent = routing.element;
            if (routing.layout === 'onlyHeader') {
              Layout = OnlyHeader;
            }
            return (
              <Route
                key={index}
                path={routing.path}
                element={
                  <Layout>
                    <Componenent />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </GlobalStyles>
  );
}

export default App;
