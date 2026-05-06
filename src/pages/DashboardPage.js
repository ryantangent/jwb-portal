import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const updates = [
  {
    date: 'April 2026',
    tag: 'Case update',
    title: 'A case you helped fund reached settlement',
    body:
      'A domestic worker from the Philippines — supported by the casework fund your donation contributes to — received a settlement of SGD 3,800 after an eight-month cross-border claim. She has returned home safely.',
    isNew: true,
  },
  {
    date: 'March 2026',
    tag: 'Program update',
    title: 'Indonesia training program expanded to East Java',
    body:
      'Your support helped fund the expansion of Program AKSES into East Java, training 14 new village-level paralegals who will support returning migrant workers in their communities.',
    isNew: true,
  },
  {
    date: 'February 2026',
    tag: 'Research',
    title: 'New research paper: barriers to cross-border claims',
    body:
      'JWB published its fourth research paper of the year, examining the procedural barriers migrant workers face when pursuing compensation claims from their home country.',
    isNew: false,
  },
];

const journeySteps = [
  {
    status: 'done',
    label: 'First donation made',
    detail: 'You made your first contribution to JWB in January 2026.',
    cta: null,
  },
  {
    status: 'done',
    label: 'Impact report received',
    detail: 'You received your first quarterly impact report in March 2026.',
    cta: null,
  },
  {
    status: 'active',
    label: 'Upgrade to monthly giving',
    detail: 'Monthly donors enable JWB to plan casework in advance and respond faster when workers need urgent help.',
    cta: 'Become a monthly donor',
    ctaLink: '/donate',
  },
  {
    status: 'pending',
    label: 'Join a donor briefing',
    detail: 'Quarterly briefings give you a direct window into active cases and program outcomes.',
    cta: 'Register interest',
    ctaLink: '#',
  },
  {
    status: 'pending',
    label: 'Invite a colleague or friend',
    detail: 'Cross-border justice scales with community. Share JWB with someone who shares your values.',
    cta: 'Get a shareable link',
    ctaLink: '#',
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ backgroundColor: 'var(--stone-50)', minHeight: '100vh' }}>

      {/* Header banner */}
      <div
        style={{
          backgroundColor: 'var(--green-900)',
          padding: '48px 0',
          borderBottom: '1px solid var(--green-800)',
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--green-300)',
              marginBottom: '10px',
            }}
          >
            Donor portal
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '36px',
              fontWeight: 300,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Welcome back, Sarah.
          </h1>

          <div style={{ display: 'flex', gap: '40px' }}>
            {[
              { label: 'Total contributed', value: 'USD 480' },
              { label: 'Giving since', value: 'Jan 2026' },
              { label: 'Current plan', value: 'One-time donor' },
              { label: 'Workers reached (est.)', value: '8' },
            ].map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 300,
                    color: 'var(--white)',
                    lineHeight: 1,
                    marginBottom: '5px',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--green-300)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--stone-200)' }}>
        <div className="container" style={{ display: 'flex', gap: '0' }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'updates', label: 'Impact updates' },
            { id: 'journey', label: 'Donor journey' },
            { id: 'history', label: 'Giving history' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '16px 24px',
                fontSize: '14px',
                fontWeight: activeTab === tab.id ? 500 : 400,
                color: activeTab === tab.id ? 'var(--green-800)' : 'var(--stone-500)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid var(--green-600)' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
              {tab.id === 'updates' && (
                <span
                  style={{
                    marginLeft: '8px',
                    fontSize: '10px',
                    fontWeight: 500,
                    backgroundColor: 'var(--green-600)',
                    color: 'var(--white)',
                    padding: '2px 7px',
                    borderRadius: '10px',
                  }}
                >
                  2
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '40px 40px 80px' }}>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px' }}>
            <div>
              {/* Upgrade nudge */}
              <div
                style={{
                  padding: '28px 32px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--green-200)',
                  borderLeft: '4px solid var(--green-600)',
                  borderRadius: 'var(--radius-xl)',
                  marginBottom: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--stone-900)', marginBottom: '6px' }}>
                    Upgrade to monthly giving
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--stone-600)', lineHeight: 1.6, maxWidth: '440px' }}>
                    A one-time gift is powerful. A monthly commitment is transformative. Recurring donors
                    allow JWB to plan casework, hire consistently, and respond without delay.
                  </p>
                </div>
                <Link
                  to="/donate"
                  style={{
                    display: 'inline-block',
                    flexShrink: 0,
                    padding: '12px 22px',
                    backgroundColor: 'var(--green-700)',
                    color: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '13px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Give monthly
                </Link>
              </div>

              {/* Donor recognition */}
              <div style={{
                padding: '24px 28px',
                backgroundColor: 'var(--green-900)',
                borderRadius: 'var(--radius-xl)',
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
              }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '8px' }}>
                    Your giving tier
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--white)', marginBottom: '4px' }}>
                    Champion
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--green-300)', lineHeight: 1.5 }}>
                    USD 100 — covers cross-border document prep and translation for one case
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '11px', color: 'var(--green-400)', marginBottom: '4px' }}>Next tier: Investor</div>
                  <div style={{ fontSize: '12px', color: 'var(--stone-400)' }}>USD 250/month — full month of active casework</div>
                  <Link to="/donate" style={{ display: 'inline-block', marginTop: '10px', fontSize: '12px', fontWeight: 500, color: 'var(--green-300)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                    Upgrade tier
                  </Link>
                </div>
              </div>

              {/* Upcoming donor event */}
              <div style={{
                padding: '22px 28px',
                border: '1px solid var(--stone-200)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--white)',
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', color: 'var(--green-700)', lineHeight: 1 }}>17</div>
                    <div style={{ fontSize: '9px', fontWeight: 500, color: 'var(--green-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jun</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--stone-900)', marginBottom: '4px' }}>
                      Quarterly donor briefing — Q2 2026
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--stone-500)', lineHeight: 1.5 }}>
                      A direct window into active cases and program outcomes. Virtual, 45 minutes. Open to all donors.
                    </div>
                  </div>
                </div>
                <button style={{
                  flexShrink: 0,
                  padding: '10px 18px',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--stone-700)',
                  backgroundColor: 'var(--white)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}>
                  Register interest
                </button>
              </div>

              {/* Latest update preview */}
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Latest impact update
              </div>
              <div
                style={{
                  padding: '24px 28px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--radius-xl)',
                  marginBottom: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      backgroundColor: 'var(--green-50)',
                      color: 'var(--green-800)',
                      border: '1px solid var(--green-200)',
                      padding: '3px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    {updates[0].tag}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--stone-400)' }}>{updates[0].date}</span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '19px',
                    fontWeight: 400,
                    color: 'var(--stone-950)',
                    marginBottom: '10px',
                  }}
                >
                  {updates[0].title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--stone-600)', lineHeight: 1.7, marginBottom: '14px' }}>
                  {updates[0].body}
                </p>
                <button
                  onClick={() => setActiveTab('updates')}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--green-700)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  View all updates
                </button>
              </div>
            </div>

            {/* Journey sidebar */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
                Your journey
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {journeySteps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '16px 18px',
                      backgroundColor: step.status === 'done' ? 'var(--stone-50)' : 'var(--white)',
                      border: step.status === 'active' ? '1px solid var(--green-300)' : '1px solid var(--stone-200)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 500,
                        backgroundColor:
                          step.status === 'done'
                            ? 'var(--green-100)'
                            : step.status === 'active'
                            ? 'var(--green-600)'
                            : 'var(--stone-100)',
                        color:
                          step.status === 'done'
                            ? 'var(--green-700)'
                            : step.status === 'active'
                            ? 'var(--white)'
                            : 'var(--stone-400)',
                      }}
                    >
                      {step.status === 'done' ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="var(--green-700)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: step.status === 'pending' ? 'var(--stone-400)' : 'var(--stone-900)',
                          marginBottom: '4px',
                        }}
                      >
                        {step.label}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--stone-500)', lineHeight: 1.5 }}>
                        {step.detail}
                      </div>
                      {step.cta && step.status === 'active' && (
                        <Link
                          to={step.ctaLink}
                          style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: 'var(--green-700)',
                            textDecoration: 'underline',
                            textUnderlineOffset: '2px',
                          }}
                        >
                          {step.cta}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* UPDATES TAB */}
        {activeTab === 'updates' && (
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, marginBottom: '32px', letterSpacing: '-0.01em' }}>
              Impact updates
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {updates.map((u, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px 32px',
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--stone-200)',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          backgroundColor: 'var(--green-50)',
                          color: 'var(--green-800)',
                          border: '1px solid var(--green-200)',
                          padding: '3px 10px',
                          borderRadius: '4px',
                        }}
                      >
                        {u.tag}
                      </span>
                      {u.isNew && (
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 500,
                            backgroundColor: 'var(--green-600)',
                            color: 'var(--white)',
                            padding: '2px 8px',
                            borderRadius: '10px',
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--stone-400)' }}>{u.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '21px',
                      fontWeight: 400,
                      color: 'var(--stone-950)',
                      marginBottom: '12px',
                    }}
                  >
                    {u.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--stone-600)', lineHeight: 1.7 }}>{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNEY TAB */}
        {activeTab === 'journey' && (
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, marginBottom: '8px', letterSpacing: '-0.01em' }}>
              Your donor journey
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--stone-500)', marginBottom: '36px', lineHeight: 1.6 }}>
              Every step deepens your impact and connection to JWB's work.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {journeySteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    padding: '22px 24px',
                    backgroundColor: step.status === 'done' ? 'var(--stone-50)' : 'var(--white)',
                    border: step.status === 'active' ? '1.5px solid var(--green-400)' : '1px solid var(--stone-200)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 500,
                      backgroundColor:
                        step.status === 'done'
                          ? 'var(--green-100)'
                          : step.status === 'active'
                          ? 'var(--green-600)'
                          : 'var(--stone-100)',
                      color:
                        step.status === 'done'
                          ? 'var(--green-700)'
                          : step.status === 'active'
                          ? 'var(--white)'
                          : 'var(--stone-400)',
                    }}
                  >
                    {step.status === 'done' ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3.5 3.5 5.5-5.5" stroke="var(--green-700)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: step.status === 'pending' ? 'var(--stone-400)' : 'var(--stone-900)',
                        marginBottom: '6px',
                      }}
                    >
                      {step.label}
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--stone-500)', lineHeight: 1.6 }}>
                      {step.detail}
                    </p>
                    {step.cta && (step.status === 'active') && (
                      <Link
                        to={step.ctaLink}
                        style={{
                          display: 'inline-block',
                          marginTop: '14px',
                          padding: '10px 20px',
                          backgroundColor: 'var(--green-700)',
                          color: 'var(--white)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        {step.cta}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, marginBottom: '32px', letterSpacing: '-0.01em' }}>
              Giving history
            </h2>
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--stone-200)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}
            >
              {[
                { date: 'Jan 15, 2026', amount: 'USD 60', type: 'One-time', note: 'General fund' },
                { date: 'Feb 20, 2026', amount: 'USD 100', type: 'One-time', note: 'Indonesia program' },
                { date: 'Apr 3, 2026', amount: 'USD 250', type: 'One-time', note: 'Legal aid fund' },
                { date: 'Apr 28, 2026', amount: 'USD 70', type: 'One-time', note: 'General fund' },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 24px',
                    borderBottom: i < 3 ? '1px solid var(--stone-100)' : 'none',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--stone-900)', marginBottom: '2px' }}>
                      {row.amount}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--stone-400)' }}>{row.date} — {row.note}</div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      backgroundColor: 'var(--stone-100)',
                      color: 'var(--stone-600)',
                      padding: '3px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    {row.type}
                  </span>
                </div>
              ))}
              <div
                style={{
                  padding: '16px 24px',
                  backgroundColor: 'var(--stone-50)',
                  borderTop: '1px solid var(--stone-200)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-700)' }}>Total</span>
                <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--stone-900)' }}>USD 480</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone-400)', marginTop: '16px', lineHeight: 1.6 }}>
              Tax receipts are emailed within 48 hours of each donation. Contact{' '}
              <a href="mailto:donations@forjusticewithoutborders.org" style={{ color: 'var(--green-700)', textDecoration: 'underline' }}>
                donations@forjusticewithoutborders.org
              </a>{' '}
              if you need a receipt reissued.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
