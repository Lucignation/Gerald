import './Social.scss';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Social = () => {
  return (
    <ul>
      <li>
        <a href='https://linkedin.com/in/geraldolumide' target='_blank'>
          <BsLinkedin />
        </a>
      </li>

      <li>
        <a href='https://github.com/lucignation' target='_blank'>
          <BsGithub />
        </a>
      </li>

      <li>
        <a href='https://twitter.com/lucignation' target='_blank'>
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Social;
