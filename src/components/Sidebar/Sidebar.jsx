import { FaHome, FaUser } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaEnvelopeOpen, FaComments } from 'react-icons/fa';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <div className='sidebar-icon'>
        <FaHome />
      </div>
      <div className='sidebar-icon'>
        <FaUser />
      </div>
      <div className='sidebar-icon'>
        <BsBriefcaseFill />
      </div>
      <div className='sidebar-icon'>
        <FaEnvelopeOpen />
      </div>
      <div className='sidebar-icon'>
        <FaComments />
      </div>
    </div>
  );
};

export default Sidebar;
