import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot';
import donateImg from '../assets/images/story-2.jpg';

const IMPACT_MAP = {
  30:  'Covers a one-hour consultation session for a migrant worker who cannot afford legal advice.',
  60:  'Funds a paralegal to support one worker through the initial stages of a cross-border claim.',
  100: 'Pays for translation and document preparation across two jurisdictions for one active case.',
  250: 'Supports a full month of casework for one worker — from consultation through to filing.',
  custom: 'Your contribution directly funds legal aid, education, and advocacy for migrant workers across Southeast Asia.',
};

const LOCATIONS = {
  hk: { label: 'Hong Kong', currency: 'HKD', rate: 0.15, badge: 'HK Charity 91/15108', eligible: true, minAmount: 100, rateLabel: '15% HK salaries tax rate' },
  us: { label: 'United States', currency: 'USD', rate: 0.30, badge: 'IRS 501(c)(3)', eligible: true, minAmount: 1, rateLabel: '30% federal income tax rate' },
  sg: { label: 'Singapore', currency: 'SGD', rate: 0, badge: null, eligible: false, minAmount: null },
  other: { label: 'Other', currency: 'USD', rate: 0, badge: null, eligible: false, minAmount: null },
};

function TaxSavingsPanel({ location, amount, currency, frequency }) {
  const loc = LOCATIONS[location];
  const annualAmount = frequency === 'monthly' ? amount * 12 : amount;
  if (!loc.eligible) {
    return (
      <div style={{ padding: '14px 16px', backgroundColor: 'var(--stone-50)', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', color: 'var(--stone-500)', lineHeight: 1.5 }}>
          {location === 'sg' ? 'JWB is not a registered IPC in Singapore. Donations are not tax-deductible.' : 'JWB is tax-deductible in Hong Kong and the United States. Select your location above for an exact saving.'}
        </div>
      </div>
    );
  }
  if (amount < (loc.minAmount || 0)) {
    return (
      <div style={{ padding: '14px 16px', backgroundColor: 'var(--stone-50)', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
        <div style={{ fontSize: '13px', color: 'var(--stone-500)' }}>Minimum donation for tax deduction in {loc.label} is {currency} {loc.minAmount}.</div>
      </div>
    );
  }
  const saving = Math.round(amount * loc.rate);
  const netCost = amount - saving;
  const annualSaving = Math.round(annualAmount * loc.rate);
  const annualNetCost = annualAmount - annualSaving;
  return (
    <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--green-200)', marginBottom: '16px' }}>
      <div style={{ padding: '12px 16px', backgroundColor: 'var(--green-700)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--green-100)' }}>{frequency === 'monthly' ? 'Annual tax saving' : 'Your tax saving'}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--white)' }}>{currency} {frequency === 'monthly' ? annualSaving : saving}</div>
      </div>
      <div style={{ padding: '12px 16px', backgroundColor: 'var(--green-50)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '11px', color: 'var(--stone-500)', marginBottom: '2px' }}>{frequency === 'monthly' ? 'Per month' : 'You donate'}</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--stone-800)' }}>{currency} {amount}</div>
        </div>
        <div>
          <div style={{ fontSize: '11px', color: 'var(--stone-500)', marginBottom: '2px' }}>Tax saved</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--green-700)' }}>{currency} {saving}</div>
        </div>
        <div>
          <div style={{ fontSize: '11px', color: 'var(--stone-500)', marginBottom: '2px' }}>Net cost</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--green-700)' }}>{currency} {netCost}</div>
        </div>
      </div>
      {frequency === 'monthly' && (
        <div style={{ padding: '10px 16px', backgroundColor: 'var(--green-50)', borderTop: '1px solid var(--green-100)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '2px' }}>Per year</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--stone-700)' }}>{currency} {annualAmount}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '2px' }}>Annual saving</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--green-700)' }}>{currency} {annualSaving}</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '2px' }}>Annual net cost</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--green-700)' }}>{currency} {annualNetCost}</div>
          </div>
        </div>
      )}
      <div style={{ padding: '8px 16px', backgroundColor: 'var(--stone-50)', borderTop: '1px solid var(--stone-100)' }}>
        <div style={{ fontSize: '11px', color: 'var(--stone-400)', lineHeight: 1.5 }}>Based on {loc.rateLabel}. Actual saving depends on your personal tax situation.</div>
      </div>
    </div>
  );
}

export default function DonatePage() {
  const [frequency, setFrequency] = useState('monthly');
  const [selected, setSelected] = useState(100);
  const [custom, setCustom] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState('hk');

  const displayAmount = custom ? parseInt(custom) || 0 : selected;
  const impactText = custom ? IMPACT_MAP.custom : IMPACT_MAP[selected] || IMPACT_MAP.custom;
  const loc = LOCATIONS[location];
  const annualAmount = frequency === 'monthly' ? displayAmount * 12 : displayAmount;
  const saving = loc.eligible && displayAmount >= (loc.minAmount || 0) ? Math.round(displayAmount * loc.rate) : 0;
  const annualSaving = loc.eligible && displayAmount >= (loc.minAmount || 0) ? Math.round(annualAmount * loc.rate) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '520px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--green-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green-700)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', marginBottom: '16px', letterSpacing: '-0.02em' }}>Thank you for investing in justice.</h1>
          <p style={{ fontSize: '16px', color: 'var(--stone-600)', lineHeight: 1.7, marginBottom: '16px' }}>
            Your {frequency === 'annually' ? 'annual' : frequency === 'monthly' ? 'monthly' : 'one-time'} gift of <strong>{loc.currency} {displayAmount}</strong> is confirmed.
          </p>
          {saving > 0 && (
            <div style={{ padding: '20px 24px', backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 'var(--radius-lg)', marginBottom: '20px', textAlign: 'left' }}>
              <div style={{ fontSize: '13px', color: 'var(--stone-500)', marginBottom: '12px' }}>Your tax summary</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Donated</div>
                  <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--stone-800)' }}>{loc.currency} {displayAmount}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Tax saved</div>
                  <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--green-700)' }}>{loc.currency} {saving}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Net cost</div>
                  <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--green-700)' }}>{loc.currency} {displayAmount - saving}</div>
                </div>
              </div>
              {frequency === 'monthly' && (
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--green-200)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Per year</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--stone-700)' }}>{loc.currency} {annualAmount}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Annual saving</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--green-700)' }}>{loc.currency} {annualSaving}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '3px' }}>Annual net cost</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--green-700)' }}>{loc.currency} {annualAmount - annualSaving}</div>
                  </div>
                </div>
              )}
              <div style={{ fontSize: '12px', color: 'var(--stone-400)', marginTop: '12px', lineHeight: 1.5 }}>Your official tax receipt will be emailed to you shortly.</div>
            </div>
          )}
          <p style={{ fontSize: '15px', color: 'var(--stone-500)', lineHeight: 1.7, marginBottom: '36px' }}>{impactText}</p>
          <Link to="/dashboard" style={{ display: 'inline-block', padding: '13px 28px', backgroundColor: 'var(--green-700)', color: 'var(--white)', borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: 500 }}>View your donor dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ backgroundColor: 'var(--stone-50)', borderBottom: '1px solid var(--stone-200)', padding: '56px 0 48px' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: '16px' }}>Make a donation</div>
          <h1 style={{ fontSize: '48px', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px', maxWidth: '560px' }}>Become an investor in justice.</h1>
          <p style={{ fontSize: '17px', color: 'var(--stone-600)', lineHeight: 1.7, maxWidth: '520px' }}>Every dollar you donate becomes part of a shared effort to ensure that exploitation is met with accountability, not silence. Your support keeps our services free for workers.</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--stone-50)', borderBottom: '1px solid var(--stone-200)', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--stone-400)', whiteSpace: 'nowrap' }}>As featured in</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px', flexWrap: 'wrap' }}>
              {['SCMP', 'The Guardian', 'CNA', 'HKFP', 'Reuters'].map((outlet, i) => (
                <div key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 400, color: 'var(--stone-400)', letterSpacing: '-0.01em' }}>{outlet}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'start' }}>
          <div>
            <div style={{ padding: '32px', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--white)', marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>Where your money goes</div>
              {[
                { label: 'Direct legal aid and casework', pct: 62, color: 'var(--green-600)' },
                { label: 'Education and capacity building', pct: 21, color: 'var(--green-400)' },
                { label: 'Research and advocacy', pct: 10, color: 'var(--green-200)' },
                { label: 'Operations and administration', pct: 7, color: 'var(--stone-200)' },
              ].map((row, i) => (
                <div key={i} style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--stone-700)' }}>{row.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-900)' }}>{row.pct}%</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: 'var(--stone-100)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${row.pct}%`, backgroundColor: row.color, borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '12px', color: 'var(--stone-400)', marginTop: '16px', lineHeight: 1.6 }}>Based on 2023 audited financials. Full annual report available at forjusticewithoutborders.org</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {[
                { title: '4-star Charity Navigator', body: 'Independently rated for financial health, governance, and accountability.' },
                { title: 'IRS 501(c)(3) registered', body: 'All US donations are fully tax-deductible to the extent of US law.' },
                { title: 'HK Charity 91/15108', body: 'Hong Kong registered charity. Donations of HKD 100 or more are tax-deductible.' },
                { title: 'Annual reports published', body: 'Full financial transparency available. 2023 report details every program outcome.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '16px', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--stone-50)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--stone-900)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--stone-500)', lineHeight: 1.5 }}>{item.body}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '28px 32px', backgroundColor: 'var(--green-900)', borderRadius: 'var(--radius-xl)', marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '20px' }}>2023 program outcomes</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                {[
                  { num: '223', label: 'Case consultations conducted' },
                  { num: '18', label: 'New cross-border claims developed' },
                  { num: '4', label: 'Compensation awards secured' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginBottom: '6px' }}>{stat.num}</div>
                    <div style={{ fontSize: '12px', color: 'var(--green-300)', lineHeight: 1.5 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '24px' }}>
              <div style={{ padding: '14px 20px', backgroundColor: 'var(--stone-50)', borderBottom: '1px solid var(--stone-200)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--stone-500)' }}>Partner endorsements</div>
              {[
                { initials: 'PA', name: 'Providence Law Asia', role: 'Pro bono legal partner, Singapore', quote: 'JWB has been instrumental in empowering migrant workers seeking legal recourse. Their efforts have transformed individual lives and set a precedent for compassionate legal advocacy across the region.' },
                { initials: 'IL', name: 'International Labour Organization', role: 'Training partner, Indonesia outreach program', quote: 'Our collaboration with JWB on the Indonesia outreach program has directly expanded legal awareness among returning migrant workers at the village level.' },
                { initials: 'IA', name: "IADC — Int'l Association of Defense Counsel", role: 'Legal education partner', quote: "JWB's expertise in cross-border labor claims is unmatched in the region. Their training programs meaningfully raise the quality of pro bono representation for migrant workers." },
              ].map((e, i) => (
                <div key={i} style={{ padding: '20px', borderBottom: i < 2 ? '1px solid var(--stone-100)' : 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--green-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--green-800)', flexShrink: 0 }}>{e.initials}</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--stone-900)', marginBottom: '2px' }}>{e.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--stone-400)', marginBottom: '8px' }}>{e.role}</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '13px', color: 'var(--stone-600)', lineHeight: 1.6 }}>"{e.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <ImageSlot src={donateImg} height={280} alt="JWB community — illustrative" />
            </div>
          </div>

          <div style={{ position: 'sticky', top: '90px', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--stone-200)' }}>
              {[
                { id: 'one-time', label: 'One-time' },
                { id: 'monthly', label: 'Monthly' },
                { id: 'annually', label: 'Annually' },
              ].map((f) => (
                <button key={f.id} onClick={() => setFrequency(f.id)} style={{ flex: 1, padding: '14px 8px', fontSize: '13px', fontWeight: frequency === f.id ? 500 : 400, color: frequency === f.id ? 'var(--green-800)' : 'var(--stone-500)', backgroundColor: frequency === f.id ? 'var(--green-50)' : 'var(--white)', border: 'none', borderBottom: frequency === f.id ? '2px solid var(--green-600)' : '2px solid transparent', cursor: 'pointer' }}>
                  {f.label}
                </button>
              ))}
            </div>

            <div style={{ padding: '24px 28px' }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--stone-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Where are you based?</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'hk', label: 'Hong Kong' },
                    { id: 'us', label: 'United States' },
                    { id: 'sg', label: 'Singapore' },
                    { id: 'other', label: 'Other' },
                  ].map((l) => (
                    <button key={l.id} onClick={() => setLocation(l.id)} style={{ padding: '9px 12px', borderRadius: 'var(--radius-md)', border: location === l.id ? '2px solid var(--green-600)' : '1px solid var(--stone-200)', backgroundColor: location === l.id ? 'var(--green-50)' : 'var(--white)', fontSize: '13px', fontWeight: location === l.id ? 500 : 400, color: location === l.id ? 'var(--green-800)' : 'var(--stone-600)', cursor: 'pointer', textAlign: 'center' }}>
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--stone-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>Select a giving tier ({loc.currency})</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                {[
                  { amt: 30,  tier: 'Advocate',  impact: 'Funds one legal consultation for a worker' },
                  { amt: 60,  tier: 'Supporter', impact: 'Covers paralegal support through initial claim stages' },
                  { amt: 100, tier: 'Champion',  impact: 'Pays for cross-border document prep and translation' },
                  { amt: 250, tier: 'Investor',  impact: 'Supports one full month of active casework' },
                ].map(({ amt, tier, impact }) => (
                  <button key={amt} onClick={() => { setSelected(amt); setCustom(''); }} style={{ padding: '12px 16px', borderRadius: 'var(--radius-md)', border: selected === amt && !custom ? '2px solid var(--green-600)' : '1px solid var(--stone-200)', backgroundColor: selected === amt && !custom ? 'var(--green-50)' : 'var(--white)', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: selected === amt && !custom ? 'var(--green-800)' : 'var(--stone-800)', marginBottom: '2px' }}>{tier} — {loc.currency} {amt}{frequency === 'monthly' ? '/mo' : frequency === 'annually' ? '/yr' : ''}</div>
                      <div style={{ fontSize: '11px', color: selected === amt && !custom ? 'var(--green-700)' : 'var(--stone-400)', lineHeight: 1.4 }}>{impact}</div>
                    </div>
                    {selected === amt && !custom && (
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--green-600)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <input type="number" placeholder={`Or enter custom amount (${loc.currency})`} value={custom} onChange={(e) => { setCustom(e.target.value); setSelected(null); }} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: custom ? '2px solid var(--green-600)' : '1px solid var(--stone-200)', borderRadius: 'var(--radius-md)', outline: 'none', marginBottom: '16px', fontFamily: 'var(--font-body)', color: 'var(--stone-900)', backgroundColor: 'var(--white)' }} />

              {displayAmount > 0 && <TaxSavingsPanel location={location} amount={displayAmount} currency={loc.currency} frequency={frequency} />}

              <div style={{ padding: '12px 16px', backgroundColor: 'var(--stone-50)', borderLeft: '3px solid var(--green-500)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '13px', color: 'var(--stone-700)', lineHeight: 1.6, marginBottom: '20px' }}>
                {displayAmount > 0 ? (<><strong style={{ color: 'var(--stone-900)' }}>{loc.currency} {displayAmount}{frequency === 'monthly' ? ' / month' : frequency === 'annually' ? ' / year' : ''}</strong><br />{impactText}</>) : 'Select or enter an amount to see your impact.'}
              </div>

              {frequency === 'monthly' && (
                <div style={{ fontSize: '12px', color: 'var(--green-800)', backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 'var(--radius-md)', padding: '10px 14px', marginBottom: '20px', lineHeight: 1.6 }}>
                  A monthly commitment is transformative. When a worker urgently needs intervention in January, or July, we are ready to act — because of donors like you.
                </div>
              )}
              {frequency === 'annually' && (
                <div style={{ fontSize: '12px', color: 'var(--green-800)', backgroundColor: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 'var(--radius-md)', padding: '10px 14px', marginBottom: '20px', lineHeight: 1.6 }}>
                  An annual gift lets JWB plan ahead with confidence — funding casework, training, and research for the full year.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full name" required style={{ width: '100%', padding: '13px 16px', fontSize: '14px', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-md)', outline: 'none', marginBottom: '10px', fontFamily: 'var(--font-body)', color: 'var(--stone-900)', backgroundColor: 'var(--white)' }} />
                <input type="email" placeholder="Email address" required style={{ width: '100%', padding: '13px 16px', fontSize: '14px', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-md)', outline: 'none', marginBottom: '20px', fontFamily: 'var(--font-body)', color: 'var(--stone-900)', backgroundColor: 'var(--white)' }} />
                <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: 'var(--green-700)', color: 'var(--white)', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                  {frequency === 'monthly' ? `Give ${loc.currency} ${displayAmount || '—'} / month` : frequency === 'annually' ? `Give ${loc.currency} ${displayAmount || '—'} / year` : `Donate ${loc.currency} ${displayAmount || '—'}`}
                </button>
              </form>

              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {['Secure payment', 'Tax receipt provided', 'Cancel anytime'].map((t) => (
                  <div key={t} style={{ fontSize: '11px', color: 'var(--stone-400)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.5" stroke="var(--stone-300)" /><path d="M3.5 6l2 2 3-3" stroke="var(--stone-400)" strokeWidth="1.2" strokeLinecap="round" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
