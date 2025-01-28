import './App.scss'
import NavbarMenu from './components/SidebarMenu/NavbarMenu';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <NavbarMenu />
      <div className='content'>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
