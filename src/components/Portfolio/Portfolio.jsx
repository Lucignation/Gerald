import { motion } from 'framer-motion';

const Portfolio = ({ image, projectName, projectUrl }) => {
  return (
    <div className='portfolio-web'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
          type: 'spring',
          delay: 0.8,
        }}
      >
        <div className='portfolio-web-img'>
          <img src={image} alt={projectName} />
        </div>
        <div className='project-detail'>
          <h1 className='project-name-title'>{projectName}</h1>
          <a
            href={projectUrl}
            rel='noreferrer'
            target='_blank'
            className='project-url'
          >
            VIEW WORK
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
