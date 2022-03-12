import './Social.scss';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaMediumM } from 'react-icons/fa';

const Social = () => {
  return (
    <ul>
      <li>
        <a
          href='https://linkedin.com/in/geraldolumide'
          rel='noreferrer'
          target='_blank'
        >
          <BsLinkedin />
        </a>
      </li>

      <li>
        <a
          href='https://github.com/lucignation'
          rel='noreferrer'
          target='_blank'
        >
          <BsGithub />
        </a>
      </li>

      <li>
        <a
          href='https://twitter.com/lucignation'
          rel='noreferrer'
          target='_blank'
        >
          <BsTwitter />
        </a>
      </li>

      <li>
        <a
          href='https://twitter.com/lucignation'
          rel='noreferrer'
          target='_blank'
        >
          <BsInstagram />
        </a>
      </li>

      <li>
        <a
          href='https://twitter.com/lucignation'
          rel='noreferrer'
          target='_blank'
        >
          <FaMediumM />
        </a>
      </li>

      <li>
        <a href='mailto:lucignation@gmail.com' rel='noreferrer' target='_blank'>
          <GrMail />
        </a>
      </li>
    </ul>
  );
};

export default Social;
