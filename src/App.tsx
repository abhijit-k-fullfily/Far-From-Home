import React from 'react';
import './App.css';
import "./assets/bootstrap/scss/_custom_scss.scss"
import './assets/css/mystyle.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APP_URLS from './urls';
import Home from './views/home.view';
import About from './views/about.view';
import Services from './views/services.view';
import Page404 from './views/page404.view';
import Careers from './views/careers.view';

const App: React.FC<any> = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path={APP_URLS.home} element={<Home />} />
          <Route path={APP_URLS.about} element={<About/>} />
          <Route path={APP_URLS.services} element={<Services/>} />
          <Route path={APP_URLS.careers} element={<Careers/>} />
          <Route path='/*' element={<Page404 />}
           />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
