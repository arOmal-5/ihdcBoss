import './App.css';
import NetmagicsRoutes from './Router/Netmagics/NetmagicsRoutes';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Router/User/UserRoutes';

function App() {
  return (
    <>
      <Routes >
        <Route path="netmagics/*" element={<NetmagicsRoutes/>} />
        <Route path='user/*' element={<UserRoutes/>}/>
      </Routes>
    </>
  );
}

export default App;
