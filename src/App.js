import './App.scss'
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <SidebarMenu />
      <div className='content'>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
