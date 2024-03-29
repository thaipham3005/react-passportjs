import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/main.scss'
import AuthContextProvider from './context/Auth.provider';
import ThemeContextProvider from './context/Theme.provider';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
// import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  // </React.StrictMode>

    // <AuthContextProvider>
    //   <App />
    // </AuthContextProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
