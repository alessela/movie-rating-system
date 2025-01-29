import './App.scss'
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <NavbarMenu />
      <div style={{
        margin: 0,
        padding: 8,
        height: 'calc(100vh - 56px)'
      }}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
