import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

/* -----------------------------------------------------------
   LOGO INSTRUCTIONS
   Place your logo file at: src/assets/logo.png  (or .svg)
   Then uncomment the import below and remove the text fallback.
   ----------------------------------------------------------- */
// import logo from '../assets/logo.png';

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'var(--white)',
    borderBottom: '1px solid var(--stone-200)',
    transition: 'box-shadow 0.2s ease',
  },
  navScrolled: {
    boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
  },
  inner: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 40px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoImg: {
    height: '38px',
    width: 'auto',
  },
  logoText: {
    fontFamily: 'var(--font-display)',
    fontSize: '17px',
    fontWeight: 400,
    color: 'var(--stone-950)',
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
  },
  logoTextSmall: {
    display: 'block',
    fontSize: '11px',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    color: 'var(--stone-500)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    fontSize: '14px',
    fontWeight: 400,
    color: 'var(--stone-600)',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'color 0.15s',
  },
  linkActive: {
    color: 'var(--green-700)',
    fontWeight: 500,
  },
  donateBtn: {
    fontSize: '13px',
    fontWeight: 500,
    padding: '10px 22px',
    backgroundColor: 'var(--green-700)',
    color: 'var(--white)',
    borderRadius: 'var(--radius-md)',
    letterSpacing: '0.01em',
    transition: 'background-color 0.15s',
    textDecoration: 'none',
    display: 'inline-block',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.inner}>
        <Link to="/" style={styles.logoWrap}>
          <img src={logo} style={{ height: '44px', width: 'auto' }} alt="Justice Without Borders" />
        </Link>

        <div style={styles.links}>
          <Link
            to="/impact"
            style={{ ...styles.link, ...(isActive('/impact') ? styles.linkActive : {}) }}
          >
            Our Impact
          </Link>
          <Link
            to="/"
            style={{ ...styles.link, ...(isActive('/') ? styles.linkActive : {}) }}
          >
            Our Work
          </Link>
          <Link
            to="/dashboard"
            style={{ ...styles.link, ...(isActive('/dashboard') ? styles.linkActive : {}) }}
          >
            My Account
          </Link>
          <Link to="/donate" style={styles.donateBtn}>
            Donate now
          </Link>
        </div>
      </div>
    </nav>
  );
}
