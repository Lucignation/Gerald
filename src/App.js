import './App.scss';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import CursorProvider from './utils/CursorProvider/CursorProvider';

const App = () => {
  return (
    <>
      <CursorProvider>
        <Sidebar />
        <Home />
      </CursorProvider>
    </>
  );
};

export default App;
