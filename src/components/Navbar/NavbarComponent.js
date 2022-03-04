import { Link } from 'react-scroll';

import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <nav className='NavbarComponent'>
      <div className='NavbarComponent-left'>
        <Link
          to='header'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          //   offset={-70}
          duration={750}
        >
          SW
        </Link>
      </div>
      <div className='NavbarComponent-right'>
        <Link
          className='nav-link'
          to='about'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          //   offset={-70}
          duration={750}
        >
          ABOUT
        </Link>
        <Link
          className='nav-link'
          to='projects'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          //   offset={-70}
          duration={750}
        >
          PROJECTS
        </Link>
        <Link
          className='nav-link'
          to='contact'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          //   offset={-70}
          duration={750}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
