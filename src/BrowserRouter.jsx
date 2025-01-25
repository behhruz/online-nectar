// Incorrect code (nested Router)
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter> {/* You should remove this */}
      <div>
        {/* Your app content */}
      </div>
    </BrowserRouter>
  );
};
