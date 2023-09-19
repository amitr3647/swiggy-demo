import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { Outlet, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet></Outlet>
    </div>
  );
}


export default App;
