import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Landing/>}/>
      </Routes>
      <Routes>
        <Route exact path={'/dashboard'} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
