import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ProfileContextProvider from './context/ProfileContext';

const App = () => (
  <Router>
    <ProfileContextProvider>
      <AppRoutes />
    </ProfileContextProvider>
  </Router>
);

export default App;
