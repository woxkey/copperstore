import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutUs from './containers/AboutUs/AboutUs';
import Catalog from './containers/Catalog/Catalog';
import Contacts from './containers/Contacts/Contacts';
import Delivery from './containers/Delivery/Delivery';
import Home from './containers/Home/Home';
import News from './containers/News/News';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
