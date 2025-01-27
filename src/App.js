import './App.scss'
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <SidebarMenu />
      <div style={{ display: 'flex', height: '100vh' }}>
      <div className='content'>
        <AppRouter />
      </div>
    </div>
    </div>
  );
}

export default App;
