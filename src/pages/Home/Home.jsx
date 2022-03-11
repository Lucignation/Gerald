import './Home.scss';
import withCursor from '../../HOC/withCursor';

const Home = () => {
  const date = new Date();
  return (
    <div id='home'>
      <div className='min-h-full main'>
        <div className='left-content'>
          {/* <img src={Gerald} alt='Gerald' className='left-content-img' /> */}
        </div>
        <div className='right-content'>
          <h1 className='container mx-auto font-black text-5xl developer-name font-sans'>
            I'M GÉRALD OLUMIDE 👋🏼
          </h1>
          <h1 className='container mx-auto font-black text-4xl text-white developer-title'>
            SOFTWARE ENGINEER
          </h1>
          <p className='text-white developer-desc'>
            I'm a Nigeria based front-end &amp; back-end developer focused on
            crafting clean &amp; user‑friendly experiences, I am passionate
            about building excellent software that improves the lives of those
            around me.
          </p>
          <div className='btn-more'>
            <input type='button' value='MORE ABOUT ME' />
            <span>-</span>
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

      <div className='black-bg'></div>

      <div className='orange-bg'></div>
    </div>
  );
};

export default withCursor(Home);
