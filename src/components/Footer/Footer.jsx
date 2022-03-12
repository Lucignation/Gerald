const Footer = () => {
  const date = new Date();
  return (
    <p className='footer-date'>
      <span> Handcrafted with ❣️ by </span>
      <a
        href='https://www.linkedin.com/in/geraldolumide/'
        target='_blank'
        rel='noreferrer'
      >
        Gérald Olumide
      </a>
      <span>. &#169; {date.getFullYear()} </span>
    </p>
  );
};

export default Footer;
