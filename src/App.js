import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { Button, Container } from 'react-bootstrap';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

function App() {
  return (
    <div>
      <SidebarMenu />
    </div>
  );
}

export default App;
