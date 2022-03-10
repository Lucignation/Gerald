import './App.scss';
import Gerald from './assets/img/olumide.jpg';

const App = () => {
  return (
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
          crafting clean &amp; user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <div className='btn-more'>
          <input type='button' value='MORE ABOUT ME' />
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default App;
