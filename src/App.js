import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map(({ path, component: Component, layout: Layout, index }) => {

              return <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component></Component>
                  </Layout>
                }>
              </Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
