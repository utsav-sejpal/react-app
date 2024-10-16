import RouterComponent from "./components/practice/router/RouterComponent";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Page1Component from "./components/practice/router/Page1Component";
import Page2Component from "./components/practice/router/Page2Component";
import DashboardComponent from "./components/practice/router/DashboardComponent";
import PracticeComponent from "./components/PracticeComponent";
import MainComponent from "./admin_template/IndexComponent.js";
import "./admin_template/assets/css/dashboard.css"
import "./admin_template/assets/css/custom.css"
import "./admin_template/assets/js/dashboard.js"
import SidebarComponent from "./admin_template/layouts/SidebarComponent.js";
import NavbarComponent from "./admin_template/layouts/NavbarComponent.js";
import FooterComponent from "./admin_template/layouts/FooterComponent.js";
import IndexComponent from "./admin_template/IndexComponent.js";
import UsersComponent from "./admin_template/users/UsersComponent.js";
import 'bootstrap/dist/css/bootstrap.css';
import ProfileComponent from "./admin_template/users/ProfileComponent.js";
import AboutComponent from "./admin_template/users/AboutComponent.js";

function App() {
  return (
    <>
      {/* Nested routes example */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterComponent />}>
            <Route index element={<DashboardComponent />} />
            <Route path="/page-1" element={<Page1Component />} />
            <Route path="/page-2" element={<Page2Component />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <div className="wrapper">
          <SidebarComponent />
          <div className="main">
            <NavbarComponent />
            <main className="content">
              <Routes>
                <Route path="/" element={<IndexComponent />} />
                <Route>
                  <Route path="/users" element={<UsersComponent />} />
                  <Route path="/users/profile/:id/:subject" element={<ProfileComponent />} />
                  <Route path="/users/about" element={<AboutComponent />} />
                </Route>
              </Routes>
            </main>
            <FooterComponent />
          </div>
        </div>
      </BrowserRouter >
    </>
  );
}

export default App;
