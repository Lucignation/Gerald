import withCursor from '../../HOC/withCursor';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Social from '../../components/Social/Social';

import './Contact.scss';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    copyTextToClipboard('lucignation@gmail.com')
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='contact'>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 10 }}
        exit={{ y: -250 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <div className='bg-title'>
          <h1>CONTACT</h1>
        </div>
        <div className='portfolio-head-title'>
          <h1>
            GET IN <span className='about-me'>TOUCH</span>
          </h1>
        </div>
        <div className='contact-info'>
          <div className='contact-info-desc'>
            <h2 className='contact-info-title'>DON'T BE SHY!</h2>
            <p className='contact-info-desc-lower'>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions. 🚀
            </p>

            <div onClick={handleCopyClick}>
              <button>
                <span>{isCopied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
              <input
                type='text'
                value='lucignation@gmail.com'
                readOnly
                className='email-address'
              />
            </div>
            <div className='contact-phone'>
              <a href='tel:+2347063427277'>Phone: +234(0)7063427277</a>
            </div>
            <div className='social-contact'>
              <Social />
            </div>
          </div>
          <div className='maps'>
            <h1 className='map-info'>
              <span className='about-me'>WORKING</span> FROM HERE 👇
            </h1>
            <div className='map'>
              <iframe
                title='my city'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6326915902!2d3.1438735140345604!3d6.548035698362881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1647098419802!5m2!1sen!2sng'
                width='600'
                height='450'
                // style='border:0;'
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default withCursor(Contact);
