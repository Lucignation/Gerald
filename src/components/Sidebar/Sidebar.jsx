import { FaHome, FaUser } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaEnvelopeOpen, FaComments } from 'react-icons/fa';

import './Sidebar.scss';

const Sidebar = ({ setId, section }) => {
  return (
    <div className='side-bar'>
      <div
        onClick={() => setId('home')}
        className={section === 'home' ? 'sidebar-icon-active' : 'sidebar-icon'}
      >
        <FaHome />
      </div>
      <div
        onClick={() => setId('about')}
        className={section === 'about' ? 'sidebar-icon-active' : 'sidebar-icon'}
      >
        <FaUser />
      </div>
      <div
        onClick={() => setId('portfolio')}
        className={
          section === 'portfolio' ? 'sidebar-icon-active' : 'sidebar-icon'
        }
      >
        <BsBriefcaseFill />
      </div>
      <div
        onClick={() => setId('contact')}
        className={
          section === 'contact' ? 'sidebar-icon-active' : 'sidebar-icon'
        }
      >
        <FaEnvelopeOpen />
      </div>
      <div
        onClick={() => setId('blog')}
        className={section === 'blog' ? 'sidebar-icon-active' : 'sidebar-icon'}
      >
        <FaComments />
      </div>
    </div>
  );
};

export default Sidebar;
