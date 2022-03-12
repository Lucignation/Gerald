import './Home.scss';
import withCursor from '../../HOC/withCursor';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Home = () => {
  const date = new Date();
  return (
    <>
      <div className='container-fluid'>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          exit={{ y: -250 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          <div className='main'>
            <div className='left-content'></div>
            <div className='right-content'>
              <h1 className='container mx-auto font-black text-5xl developer-name font-sans'>
                I'M GÉRALD OLUMIDE 👋🏼
              </h1>
              <h1 className='container mx-auto font-black text-4xl text-white developer-title'>
                SOFTWARE ENGINEER
              </h1>
              <p className='text-white developer-desc'>
                I'm a Nigeria based front-end &amp; back-end developer focused
                on crafting clean &amp; user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              <div className='btn-more'>
                <input
                  type='button'
                  value='MORE ABOUT ME'
                  className='btn-more-padding'
                />
                <span className='btn-more-icon'>
                  <FiArrowRight />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <p className='footer-date'>
          <span> &#169; {date.getFullYear()} Built with ❣️ by </span>
          <a
            href='https://www.linkedin.com/in/geraldolumide/'
            target='_blank'
            rel='noreferrer'
          >
            Gérald Olumide
          </a>
          <span> </span>
        </p>
        <div className='black-bg'></div>
        <div className='orange-bg'></div>
      </div>
      {/* <div id='home'>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          exit={{ y: -250 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          <div className='min-h-full main'>
            <div className='left-content'>
            </div>
            <div className='right-content'>
              <h1 className='container mx-auto font-black text-5xl developer-name font-sans'>
                I'M GÉRALD OLUMIDE 👋🏼
              </h1>
              <h1 className='container mx-auto font-black text-4xl text-white developer-title'>
                SOFTWARE ENGINEER
              </h1>
              <p className='text-white developer-desc'>
                I'm a Nigeria based front-end &amp; back-end developer focused
                on crafting clean &amp; user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              <div className='btn-more'>
                <input
                  type='button'
                  value='MORE ABOUT ME'
                  className='btn-more-padding'
                />
                <span className='btn-more-icon'>
                  <FiArrowRight />
                </span>
              </div>
            </div>

            <p className='footer-date'>
              <span> &#169; {date.getFullYear()} Built with ❣️ by </span>
              <a
                href='https://www.linkedin.com/in/geraldolumide/'
                target='_blank'
                rel='noreferrer'
              >
                Gérald Olumide
              </a>
              <span> </span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className='black-bg'></div>

      <div className='orange-bg'></div> */}
    </>
  );
};

export default withCursor(Home);
