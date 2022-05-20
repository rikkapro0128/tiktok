import GlobalStyles from './components/GlobalStyles'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          {
            publicRoutes.map(
              (routing, index) => {
              let Layout = DefaultLayout
              const Componenent = routing.element;
              return (
                <Route key={index} path={routing.path} element={
                  <Layout>
                    <Componenent/>
                  </Layout>
                }/>
              )
            })
          }
        </Routes>
      </Router>
    </GlobalStyles>
  );
}

export default App;
