import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    backgroundColor: 'var(--stone-950)',
    color: 'var(--stone-300)',
    padding: '60px 0 36px',
  },
  inner: {
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 40px',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '48px',
    paddingBottom: '48px',
    borderBottom: '1px solid var(--stone-800)',
    marginBottom: '32px',
  },
  brand: {
    fontFamily: 'var(--font-display)',
    fontSize: '18px',
    color: 'var(--white)',
    marginBottom: '14px',
    lineHeight: 1.2,
  },
  brandSub: {
    fontSize: '13px',
    color: 'var(--stone-500)',
    lineHeight: 1.6,
    maxWidth: '260px',
    marginBottom: '20px',
  },
  colTitle: {
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--stone-500)',
    marginBottom: '14px',
  },
  colLink: {
    display: 'block',
    fontSize: '14px',
    color: 'var(--stone-400)',
    marginBottom: '10px',
    textDecoration: 'none',
    transition: 'color 0.15s',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--stone-600)',
  },
  disclaimer: {
    fontSize: '11px',
    color: 'var(--stone-700)',
    lineHeight: 1.6,
    maxWidth: '520px',
  },
  badge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 500,
    padding: '4px 10px',
    borderRadius: '4px',
    backgroundColor: 'var(--stone-800)',
    color: 'var(--stone-400)',
    marginRight: '8px',
    marginBottom: '8px',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.top}>
          <div>
            <div style={styles.brand}>Justice Without Borders</div>
            <p style={styles.brandSub}>
              Building cross-border legal access for migrant workers across Southeast Asia since 2013.
            </p>
            <div>
              <span style={styles.badge}>IRS 501(c)(3)</span>
              <span style={styles.badge}>HK Charity 91/15108</span>
              <span style={styles.badge}>4-star Charity Navigator</span>
            </div>
          </div>

          <div>
            <div style={styles.colTitle}>Our work</div>
            <a href="https://forjusticewithoutborders.org/our-work/legal-assistance/" style={styles.colLink} target="_blank" rel="noreferrer">Legal assistance</a>
            <a href="https://forjusticewithoutborders.org/our-work/education/" style={styles.colLink} target="_blank" rel="noreferrer">Education</a>
            <a href="https://forjusticewithoutborders.org/our-work/publications/" style={styles.colLink} target="_blank" rel="noreferrer">Publications</a>
            <Link to="/impact" style={styles.colLink}>Impact stories</Link>
          </div>

          <div>
            <div style={styles.colTitle}>Get involved</div>
            <Link to="/donate" style={styles.colLink}>Donate</Link>
            <a href="https://forjusticewithoutborders.org/get-involved/collaborate/" style={styles.colLink} target="_blank" rel="noreferrer">Collaborate</a>
            <a href="https://forjusticewithoutborders.org/get-involved/join-our-team/" style={styles.colLink} target="_blank" rel="noreferrer">Join our team</a>
            <a href="https://forjusticewithoutborders.org/get-help-refer-a-case/" style={styles.colLink} target="_blank" rel="noreferrer">Refer a case</a>
          </div>

          <div>
            <div style={styles.colTitle}>Connect</div>
            <a href="https://www.facebook.com/forJWB" style={styles.colLink} target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://sg.linkedin.com/company/forjwb" style={styles.colLink} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/forjusticewithoutborders/" style={styles.colLink} target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com/forjwb" style={styles.colLink} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>

        <div style={styles.bottom}>
          <span>2013 - 2026 Justice Without Borders. All rights reserved.</span>
          <p style={styles.disclaimer}>
            JWB is an independent organisation not affiliated with Doctors Without Borders, Lawyers Without Borders, or Judges Without Borders.
          </p>
        </div>
      </div>
    </footer>
  );
}
