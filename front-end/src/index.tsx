import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './hooks/redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import BestChoice from './pages/BestChoice';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path="/melhorPetShop" element={<BestChoice/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);