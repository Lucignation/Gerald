import { useState } from 'react';

import './App.scss';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About/About';
import Portfolios from './pages/Portfolios/Portfolios';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import { AnimatePresence } from 'framer-motion';

import CursorProvider from './utils/CursorProvider/CursorProvider';

const App = () => {
  const [section, setSection] = useState('home');

  const setId = (id) => {
    setSection(id);
  };
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <CursorProvider>
        <Sidebar setId={setId} section={section} />
        {section === 'home' && <Home />}
        {section === 'about' && <About />}
        {section === 'portfolio' && <Portfolios />}
        {section === 'contact' && <Contact />}
        {section === 'blog' && <Blog />}
      </CursorProvider>
    </AnimatePresence>
  );
};

export default App;
