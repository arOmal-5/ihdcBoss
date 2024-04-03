import './App.css';
import NetmagicsRoutes from './Router/Netmagics/NetmagicsRoutes';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './Router/User/UserRoutes';
import { useContext } from 'react';
import MyContext from './Store/MyContext';

function App() {

  const{isDark,setIsDark}=useContext(MyContext)
  


  const bodyBackgroundColor = isDark ? 'rgb(21, 32, 43)' : '#e5faf7';
  // Update CSS variable in the document body
  document.body.style.setProperty('--body-background-color', bodyBackgroundColor ,);


  return (
    <div style={{ backgroundColor: bodyBackgroundColor, transition:'background-color 0.7s ease', height:'36.6rem'}}>
      <Routes >
        <Route path="netmagics/*" element={<NetmagicsRoutes/>} />
        <Route path='user/*' element={<UserRoutes/>}/>
      </Routes>
    </div>
  );
}

export default App;
