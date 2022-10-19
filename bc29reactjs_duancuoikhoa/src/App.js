import logo from './logo.svg';
import './App.css';
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
