import withCursor from '../../HOC/withCursor';
import { motion } from 'framer-motion';
import Portfolio from '../../components/Portfolio/Portfolio';
import './Portfolios.scss';

const Portfolios = () => {
  const projects = [
    {
      id: 1,
      projectName: 'KreateSell',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
    {
      id: 2,
      projectName: 'Ecocity Project Limited',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
    {
      id: 3,
      projectName: 'LucigHub',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
    {
      id: 4,
      projectName: 'KreateSell',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
    {
      id: 5,
      projectName: 'KreateSell',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
    {
      id: 6,
      projectName: 'KreateSell',
      projectUrl: 'https://dev.kreatesell.com/',
      image: 'https://mobirise.com/assets52/images/poster.webp',
    },
  ];

  return (
    <div className='portfolio'>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 10 }}
        exit={{ y: -250 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <div className='bg-title'>
          <h1>WORKS</h1>
        </div>
        <div className='portfolio-head-title'>
          <h1>
            MY <span className='about-me'>PORTFOLIO</span>
          </h1>
        </div>
        <div className='portfolio-project'>
          {projects.map((project) => (
            <Portfolio
              key={project.id}
              projectName={project.projectName}
              image={project.image}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default withCursor(Portfolios);
