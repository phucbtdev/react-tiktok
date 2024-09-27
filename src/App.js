import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes/';
import { LayoutDefault } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = LayoutDefault

              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              return <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>}></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
