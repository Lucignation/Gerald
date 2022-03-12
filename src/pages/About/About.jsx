import './About.scss';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Social from '../../components/Social/Social';

const About = () => {
  return (
    <div className='container-fluid about-main'>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 10 }}
        exit={{ y: -250 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <div className='bg-title'>
          <h1>RÉSUMÉ</h1>
        </div>
        <div>
          <div className='about-head-title'>
            <h1>
              ABOUT <span className='about-me'>ME</span>
            </h1>
          </div>

          <div className='about-top'>
            <div>
              <h1 className='personal-title'>PERSONAL INFOS</h1>
              <div className='personal-infos'>
                <div>
                  <h2 className='single-personal-info'>
                    First Name: <span className='info-value'>Gerald</span>
                  </h2>
                  <h2 className='single-personal-info'>
                    Freelance: <span className='info-value'>Available</span>
                  </h2>
                  <h2 className='single-personal-info'>
                    Phone: <span className='info-value'>+234(0)7063427277</span>
                  </h2>
                  <h2 className='single-personal-info'>
                    Skype: <span className='info-value'>lucignation</span>
                  </h2>
                </div>

                <div>
                  <h2 className='single-personal-info'>
                    Last Name: <span className='info-value'> Olumide</span>
                  </h2>
                  <h2 className='single-personal-info'>
                    Nationality: <span className='info-value'> Nigerian</span>
                  </h2>
                  <h2 className='single-personal-info'>
                    Email:
                    <span className='info-value' className='info-value'>
                      {' '}
                      lucignation@gmail.com
                    </span>
                  </h2>
                  <h2>
                    Languages:
                    <span className='info-value'> English, French, Yoruba</span>
                  </h2>
                </div>
              </div>
              <div className='download-cv'>
                <input type='button' value='DOWNLOAD CV' />
                <span className='download-cv-icon'>
                  <AiOutlineCloudDownload />
                </span>
              </div>
              <div className='about-social'>
                <Social />
              </div>
            </div>
            <div>
              <div className='experiences'>
                <div className='single-experience'>
                  <h1 className='experience-number'>
                    4<span className='experience-sign'>+</span>
                  </h1>
                  <h1 className='experience-word'>
                    YEARS OF FRONTEND EXPERIENCE
                  </h1>
                </div>
                <div className='single-experience'>
                  <h1 className='experience-number'>
                    3<span className='experience-sign'>+</span>
                  </h1>
                  <h1 className='experience-word'>
                    YEARS OF BACKEND EXPERIENCE
                  </h1>
                </div>

                {/* <div className='single-experience'>
              <h1 className='experience-number'>
                3<span className='experience-sign'>+</span>
              </h1>
              <h1 className='experience-word'>YEARS OF BACKEND EXPERIENCE</h1>
            </div>

            <div className='single-experience'>
              <h1 className='experience-number'>
                3<span className='experience-sign'>+</span>
              </h1>
              <h1 className='experience-word'>YEARS OF BACKEND EXPERIENCE</h1>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
