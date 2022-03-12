import withCursor from '../../HOC/withCursor';
import { motion } from 'framer-motion';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';
import './Portfolios.scss';

const Portfolios = () => {
  const projects = [
    {
      id: 1,
      projectName: 'KreateSell',
      projectUrl: 'https://dev.kreatesell.com/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647089793/samples/Screen_Shot_2022-03-12_at_1.56.08_PM_l4abdu.png',
    },
    {
      id: 2,
      projectName: 'My Travel Explorer',
      projectUrl: 'https://www.travelexplorer.ga/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647090650/samples/Screen_Shot_2022-03-12_at_2.09.35_PM_gqn5pn.png',
    },
    {
      id: 3,
      projectName: 'ZigZag Nation',
      projectUrl: 'https://zigzagnation.net/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647090807/samples/Screen_Shot_2022-03-12_at_2.12.42_PM_t5nmhi.png',
    },
    {
      id: 4,
      projectName: 'Ecocity Project Limited',
      projectUrl: 'https://ecocity.group/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647090977/samples/Screen_Shot_2022-03-12_at_2.15.38_PM_cc7ipi.png',
    },
    {
      id: 5,
      projectName: 'JehovahJireh',
      projectUrl: 'https://jehovahjirehchurch.com/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647091053/samples/Screen_Shot_2022-03-12_at_2.17.07_PM_xwrwk5.png',
    },
    {
      id: 6,
      projectName: 'AgroNigeria',
      projectUrl: 'https://agronigeria.ng/',
      image:
        'https://res.cloudinary.com/lucignation/image/upload/v1647093172/samples/Screen_Shot_2022-03-12_at_2.52.25_PM_r4lodx.png',
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
        <div className='developer-package'>
          <div className='developer-package-desc'>
            <h1 className='developer-package-title'>
              For <span className='about-me'>Developers</span>
            </h1>
            <p className='developer-package-lower'>
              Built by developer for developers. React package that allows you
              to get all locations in Nigeria which can easily be used in any
              React project.
            </p>
          </div>
          <div className='developer-package-img'>
            <img
              src='https://res.cloudinary.com/lucignation/image/upload/v1647095105/samples/Screen_Shot_2022-03-12_at_3.23.37_PM_s0auoo.png'
              alt='locations in nigerian react package'
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default withCursor(Portfolios);
