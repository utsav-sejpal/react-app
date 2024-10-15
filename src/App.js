import RouterComponent from "./components/practice/router/RouterComponent";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Page1Component from "./components/practice/router/Page1Component";
import Page2Component from "./components/practice/router/Page2Component";
import DashboardComponent from "./components/practice/router/DashboardComponent";
import PracticeComponent from "./components/PracticeComponent";
import MainComponent from "./admin_template/layouts/MainComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterComponent />}>
            <Route index element={<DashboardComponent />} />
            <Route path="/page-1" element={<Page1Component />} />
            <Route path="/page-2" element={<Page2Component />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <MainComponent /> */}
      {/* <PracticeComponent /> */}


      {/* Simple example of Router functionality */}
      {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<PracticeComponent />} />
          <Route path="/about" element={<DashboardComponent />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
