import React from 'react';
import GlobalStyle from './globalStyles';
import { Header, Footer } from './components';
import './style.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <Footer />
    </>
  );
}
