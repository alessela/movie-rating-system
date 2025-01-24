import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <AppRouter />
    </div>
  );
}

export default App;
