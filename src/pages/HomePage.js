import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot';
import heroImg from '../assets/images/hero.jpg';
import contextImg from '../assets/images/context.jpg';
import story1Img from '../assets/images/story-1.jpg';
import story2Img from '../assets/images/story-2.jpg';
import story3Img from '../assets/images/story-3.jpg';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ label, value, suffix = '', prefix = '', delay = 0, animate }) {
  const num = useCountUp(value, 1800, animate);
  return (
    <div
      className={`fade-up fade-up-${delay}`}
      style={{
        padding: '32px 28px',
        borderRight: '1px solid var(--stone-200)',
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '52px',
          fontWeight: 300,
          color: 'var(--green-700)',
          lineHeight: 1,
          marginBottom: '10px',
          letterSpacing: '-0.02em',
        }}
      >
        {prefix}{animate ? num.toLocaleString() : value.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--stone-600)', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      'Whenever I wanted to give up, I persisted because I was supported by a team of caseworkers and lawyers who believed in me.',
    origin: 'Philippines',
  },
  {
    quote:
      'The JWB team was incredibly consistent and kind in assisting me. Even when most of the evidence was withheld, they stayed committed. Their persistence kept me going — and in the end, I obtained the compensation I had long been waiting for.',
    origin: 'Indonesia',
  },
  {
    quote:
      'If I did not know about JWB, I would probably have gone home to the Philippines without following up on the case. Nothing would have come of it. JWB has helped me a lot.',
    origin: 'Philippines',
  },
  {
    quote:
      'I am very grateful to JWB because they fought for my rights against my employer. Even after I returned to my home country, JWB continued to assist me.',
    origin: 'Philippines',
  },
];

const stories = [
  {
    tag: 'Philippines to Singapore',
    name: 'Maria',
    role: 'Domestic worker',
    body:
      'Wages withheld for eight consecutive months. After returning home with no legal recourse, JWB filed a cross-border claim on her behalf — and secured full compensation.',
    outcome: 'SGD 4,200 in wages recovered',
    hintText: 'Story image — portrait or scene, Philippines or Singapore context',
  },
  {
    tag: 'Indonesia to Hong Kong',
    name: 'Siti',
    role: 'Care worker',
    body:
      'Employer confiscated her passport on arrival. JWB coordinated legal representation across two jurisdictions simultaneously and secured her safe return home.',
    outcome: 'Case resolved across two jurisdictions',
    hintText: 'Story image — legal meeting or community setting',
  },
  {
    tag: 'Capacity building, Indonesia',
    name: 'Mang Iding',
    role: 'Village-level paralegal',
    body:
      'Trained through JWB\'s Indonesia program to identify exploitation and support returning migrant workers in his community. He now reaches over 40 workers per year.',
    outcome: '40+ workers supported annually',
    hintText: 'Story image — training workshop or community gathering',
  },
];

export default function HomePage() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 0 0',
          backgroundColor: 'var(--stone-50)',
          borderBottom: '1px solid var(--stone-200)',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'end' }}>
            <div style={{ paddingBottom: '64px' }}>
              <div
                className="fade-up"
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--green-700)',
                  backgroundColor: 'var(--green-50)',
                  border: '1px solid var(--green-200)',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  marginBottom: '24px',
                }}
              >
                Migrant worker justice across Southeast Asia
              </div>

              <h1
                className="fade-up fade-up-1"
                style={{ fontSize: '52px', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}
              >
                When a worker leaves,
                <br />
                <em style={{ color: 'var(--green-700)', fontStyle: 'italic' }}>their case should not.</em>
              </h1>

              <p
                className="fade-up fade-up-2"
                style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--stone-600)', marginBottom: '36px', maxWidth: '440px' }}
              >
                Justice Without Borders builds the legal tools, networks, and services that allow
                migrant workers to pursue justice — even after they return home. Founded 2013.
                Operating across 13 countries.
              </p>

              <div className="fade-up fade-up-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to="/donate"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: 'var(--green-700)',
                    color: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    transition: 'background-color 0.15s',
                  }}
                >
                  Become an investor in justice
                </Link>
                <Link
                  to="/impact"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: 'transparent',
                    color: 'var(--stone-800)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '15px',
                    fontWeight: 400,
                    border: '1px solid var(--stone-300)',
                    transition: 'border-color 0.15s',
                  }}
                >
                  See our impact
                </Link>
              </div>
            </div>

            <div className="fade-up fade-up-2" style={{ alignSelf: 'stretch', minHeight: '420px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', overflow: 'hidden' }}>
              <ImageSlot
                src={heroImg}
                height="100%"
                style={{ minHeight: '420px' }}
                alt="Justice Without Borders community — illustrative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <section ref={statsRef} style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--stone-200)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex' }}>
            <StatCard label="Migrant workers assisted" value={1000} suffix="+" delay={1} animate={statsVisible} />
            <StatCard label="Workers trained across the region" value={4000} suffix="+" delay={2} animate={statsVisible} />
            <StatCard label="Countries connected" value={13} delay={3} animate={statsVisible} />
            <StatCard label="Years fighting for justice" value={12} suffix="+" delay={4} animate={statsVisible} />
            <div style={{ padding: '32px 28px', flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '52px', fontWeight: 300, color: 'var(--green-700)', lineHeight: 1, marginBottom: '10px', letterSpacing: '-0.02em' }}>
                4 / 4
              </div>
              <div style={{ fontSize: '14px', color: 'var(--stone-600)', lineHeight: 1.4 }}>Stars on Charity Navigator</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <ImageSlot
                src={contextImg}
                height={480}
                alt="Migrant workers — illustrative"
              />
            </div>
            <div>
              <h2 style={{ fontSize: '38px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Out of sight, but not out of mind
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--stone-600)', lineHeight: 1.8, marginBottom: '20px' }}>
                Migrant workers make everyday life possible — caring for our children, elderly
                relatives, and homes. Yet when they leave, their stories are too often forgotten.
                Most never file a case. Almost none see a remedy.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--stone-600)', lineHeight: 1.8, marginBottom: '20px' }}>
                If unresolved abuse and unpaid wages simply disappear once a worker crosses a border,
                bad actors learn that exploitation carries no consequences. That harms workers,
                responsible employers, and the communities we all live in.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--stone-600)', lineHeight: 1.8, marginBottom: '36px' }}>
                When you step in, you are not simply helping someone else's worker. You are building
                a world where the people who care for our families can count on fair treatment — from
                the day they arrive to long after they go home.
              </p>
              <Link
                to="/donate"
                style={{
                  display: 'inline-block',
                  padding: '13px 26px',
                  backgroundColor: 'var(--green-700)',
                  color: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Join the movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORIES ────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', backgroundColor: 'var(--stone-50)', borderTop: '1px solid var(--stone-200)' }}>
        <div className="container">
          <div style={{ marginBottom: '52px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--green-700)',
                marginBottom: '16px',
              }}
            >
              Real cases, real outcomes
            </div>
            <h2 style={{ fontSize: '38px', letterSpacing: '-0.02em', maxWidth: '480px', lineHeight: 1.15 }}>
              Behind every case is a person whose future changes
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--stone-400)', marginTop: '12px', lineHeight: 1.6 }}>
              All names have been changed to protect privacy. Images are illustrative and do not depict the individuals described.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {stories.map((s, i) => (
              <div
                key={i}
                className={`fade-up fade-up-${i + 1}`}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--stone-200)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <ImageSlot
                    src={i === 0 ? story1Img : i === 1 ? story2Img : story3Img}
                    height={220}
                    alt={`${s.name} — persona, not a real name. Image is illustrative.`}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--green-800)',
                      backgroundColor: 'var(--green-50)',
                      border: '1px solid var(--green-200)',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px',
                    }}
                  >
                    {s.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 400,
                      marginBottom: '4px',
                      color: 'var(--stone-950)',
                    }}
                  >
                    {s.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--stone-500)', marginBottom: '14px' }}>
                    {s.role} — name changed for privacy. Image is illustrative.
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--stone-600)', marginBottom: '20px' }}>
                    {s.body}
                  </p>
                  <div
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--green-50)',
                      borderLeft: '3px solid var(--green-500)',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--green-800)',
                    }}
                  >
                    {s.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/impact"
              style={{
                display: 'inline-block',
                padding: '13px 26px',
                border: '1px solid var(--stone-300)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                color: 'var(--stone-800)',
                fontWeight: 400,
                transition: 'border-color 0.15s',
              }}
            >
              Read all impact stories
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', backgroundColor: 'var(--green-900)' }}>
        <div className="container">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--green-300)',
              marginBottom: '48px',
            }}
          >
            In their own words
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--green-800)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--green-700)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'var(--stone-100)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                  }}
                >
                  "{t.quote}"
                </div>
                <div style={{ fontSize: '12px', color: 'var(--green-300)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Migrant worker, {t.origin} — name withheld for privacy
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW SUPPORT TURNS INTO JUSTICE ────────────────────────── */}
      <section style={{ padding: '96px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: '16px' }}>
              How your support works
            </div>
            <h2 style={{ fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '520px', lineHeight: 1.15 }}>
              How support turns into justice outcomes
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--stone-500)', maxWidth: '480px', lineHeight: 1.7 }}>
              Every donation funds a precise chain of action. Here is what happens between a worker reaching out and justice being delivered.
            </p>
          </div>

          {/* Flow steps */}
          <div style={{ position: 'relative' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute',
              top: '36px',
              left: '36px',
              right: '36px',
              height: '2px',
              backgroundColor: 'var(--stone-100)',
              zIndex: 0,
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  step: '01',
                  label: 'Worker reaches out',
                  body: 'A migrant worker — often already home — contacts JWB or is referred by a frontline NGO partner.',
                  color: 'var(--green-50)',
                  border: 'var(--green-200)',
                  num: 'var(--green-700)',
                },
                {
                  step: '02',
                  label: 'Case consultation',
                  body: 'JWB conducts a full legal consultation — remotely and in the worker\'s language — to assess the claim.',
                  color: 'var(--green-50)',
                  border: 'var(--green-200)',
                  num: 'var(--green-700)',
                },
                {
                  step: '03',
                  label: 'Cross-border filing',
                  body: 'JWB coordinates lawyers across two jurisdictions to file the claim and gather evidence.',
                  color: 'var(--green-50)',
                  border: 'var(--green-200)',
                  num: 'var(--green-700)',
                },
                {
                  step: '04',
                  label: 'Active case management',
                  body: 'JWB manages the claim — translations, hearings, negotiations — until resolution.',
                  color: 'var(--green-50)',
                  border: 'var(--green-200)',
                  num: 'var(--green-700)',
                },
                {
                  step: '05',
                  label: 'Compensation secured',
                  body: 'The worker receives their award. The precedent protects others who come after.',
                  color: 'var(--green-700)',
                  border: 'var(--green-700)',
                  num: 'var(--white)',
                  dark: true,
                },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: s.color,
                    border: `2px solid ${s.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: s.num,
                  }}>
                    {s.step}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: s.dark ? 'var(--green-800)' : 'var(--stone-900)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--stone-500)', lineHeight: 1.6 }}>
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before / after snapshot */}
          <div style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '24px',
            alignItems: 'center',
            padding: '40px 48px',
            backgroundColor: 'var(--stone-50)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--stone-200)',
          }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: '12px' }}>
                Before JWB
              </div>
              {[
                'Worker returns home with no legal recourse',
                'Employer faces zero consequences',
                'Wages go unrecovered — often months of work',
                'No record created to protect future workers',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--stone-200)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--stone-600)', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--stone-200)' }} />
              <div style={{
                padding: '8px 14px',
                backgroundColor: 'var(--green-700)',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--white)',
                whiteSpace: 'nowrap',
              }}>
                With JWB
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--stone-200)' }} />
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: '12px' }}>
                After JWB
              </div>
              {[
                'Case filed and managed across two countries',
                'Employer held legally accountable',
                'Full wage compensation recovered for the worker',
                'Precedent set — protecting workers in similar situations',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--green-200)', flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green-700)' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--stone-700)', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDIA MENTIONS ────────────────────────────────────────── */}
      <section style={{ padding: '48px 0', backgroundColor: 'var(--stone-50)', borderTop: '1px solid var(--stone-200)', borderBottom: '1px solid var(--stone-200)' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: '28px', textAlign: 'center' }}>
            As featured in
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { name: 'South China Morning Post', short: 'SCMP' },
              { name: 'The Guardian', short: 'The Guardian' },
              { name: 'Channel NewsAsia', short: 'CNA' },
              { name: 'Hong Kong Free Press', short: 'HKFP' },
              { name: 'Reuters', short: 'Reuters' },
            ].map((outlet, i) => (
              <div key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--stone-300)', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                {outlet.short}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE CTA BANNER ─────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: 'var(--stone-950)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '44px',
              fontWeight: 300,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Cross-border justice cannot happen
            <br />
            <em style={{ color: 'var(--green-400)', fontStyle: 'italic' }}>without people who choose to care.</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--stone-400)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Your donation funds legal interventions that reach workers long after they leave — when
            no one else will help.
          </p>
          <Link
            to="/donate"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              backgroundColor: 'var(--green-500)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Donate today
          </Link>
        </div>
      </section>
    </div>
  );
}
