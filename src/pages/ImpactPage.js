import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot';
import story1Img from '../assets/images/story-1.jpg';
import story2Img from '../assets/images/story-2.jpg';
import story3Img from '../assets/images/story-3.jpg';
import contextImg from '../assets/images/context.jpg';

const storyImages = [story1Img, story2Img, story3Img, contextImg];

/*
  IMAGE SWAP — add your files and uncomment:
  import impact1 from '../assets/images/impact-1.jpg';
  import impact2 from '../assets/images/impact-2.jpg';
  import impact3 from '../assets/images/impact-3.jpg';
*/

const stories = [
  {
    tag: 'Philippines to Singapore',
    name: 'Maria',
    role: 'Domestic worker',
    body: 'Wages withheld for eight consecutive months. Returned home without recourse. JWB filed a cross-border claim, coordinated with Philippine authorities, and secured full wage recovery on her behalf — from a different country.',
    outcome: 'SGD 4,200 in wages recovered',
    detail: 'Maria\'s case took 14 months across two legal systems. It set a precedent for domestic worker wage claims filed after repatriation.',
    hint: 'Impact story — portrait or hands. Philippines context.',
  },
  {
    tag: 'Indonesia to Hong Kong',
    name: 'Siti',
    role: 'Care worker',
    body: 'Employer confiscated her passport upon arrival and restricted her movement for over six months. JWB coordinated legal representation across two jurisdictions simultaneously.',
    outcome: 'Safe repatriation. Case resolved across two jurisdictions.',
    detail: 'Siti\'s case led to policy recommendations submitted to the Indonesian government on passport confiscation by employers.',
    hint: 'Impact story — legal setting or community group.',
  },
  {
    tag: 'Capacity building, Indonesia',
    name: 'Mang Iding',
    role: 'Village-level paralegal, PERTAKINA',
    body: 'As part of Program AKSES, Mang Iding was trained to identify labor exploitation and support returning migrant workers in Cianjur Regency, West Java.',
    outcome: '40+ workers supported annually by Mang Iding alone',
    detail: 'The AKSES program now operates across multiple Indonesian provinces, training a growing network of village-level paralegals who extend JWB\'s reach far beyond what the central team could manage directly.',
    hint: 'Training workshop or community meeting.',
  },
  {
    tag: 'Education, Singapore',
    name: 'Community workshop series',
    role: 'Education program',
    body: 'In collaboration with union leaders and frontline NGOs, JWB ran a series of workshops to educate migrant workers on their legal rights before they depart their home countries.',
    outcome: 'Over 500 workers reached in a single workshop cycle',
    detail: 'Pre-departure education is one of JWB\'s most cost-effective interventions — informed workers are significantly more likely to document contracts and report violations.',
    hint: 'Workshop or classroom setting.',
  },
];

export default function ImpactPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--stone-50)', borderBottom: '1px solid var(--stone-200)', padding: '72px 0 56px' }}>
        <div className="container">
          <div
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--green-700)',
              marginBottom: '18px',
            }}
          >
            Our impact
          </div>
          <h1
            style={{
              fontSize: '52px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '600px',
            }}
          >
            Justice, measured in lives changed
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--stone-600)', lineHeight: 1.7, maxWidth: '520px' }}>
            Every number here represents a worker who was heard, a case that was pursued, and a precedent that will
            protect others who come after.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--stone-200)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { num: '1,000+', label: 'Migrant workers assisted' },
              { num: '4,000+', label: 'Workers trained' },
              { num: '13', label: 'Countries connected' },
              { num: '223', label: 'Case consultations in 2023' },
              { num: '4/4', label: 'Charity Navigator stars' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '36px 28px',
                  borderRight: i < 4 ? '1px solid var(--stone-200)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '44px',
                    fontWeight: 300,
                    color: 'var(--green-700)',
                    lineHeight: 1,
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--stone-600)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2023 highlights */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <h2 style={{ fontSize: '34px', letterSpacing: '-0.02em', marginBottom: '14px' }}>2023 program highlights</h2>
          <p style={{ fontSize: '15px', color: 'var(--stone-500)', marginBottom: '48px', maxWidth: '500px', lineHeight: 1.6 }}>
            From individual casework to regional capacity building, every program strand advances access to justice for migrant workers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              {
                title: 'Access to justice through casework',
                items: [
                  '223 case consultations conducted',
                  '18 new cross-border claims developed',
                  '25 active claims managed on average throughout the year',
                  '4 compensation awards secured for workers',
                  '4 research papers published to support pro bono lawyers',
                ],
              },
              {
                title: 'Indonesia outreach program',
                items: [
                  'Training series conducted across West and East Java',
                  'Focus on safe migration and legal rights for returning MDWs',
                  'Partnership with ILO and IADC',
                  'Participants trained to identify claims and support workers',
                  'Grassroots reach expanded through Program AKSES',
                ],
              },
              {
                title: 'Cross-border roundtable',
                items: [
                  'First in-person roundtable held in Singapore',
                  'Brought together NGOs, lawyers, and government agencies',
                  'Built networks to sustain long-term access to justice',
                  'Participants from HK, Indonesia, Philippines, Singapore',
                ],
              },
              {
                title: 'Capacity building network',
                items: [
                  'Trained union leaders, former MDWs, and community paralegals',
                  'Built capacity to support workers at the community level',
                  'Shared best practices across regional frontline partners',
                  'Mentorship program active across four countries',
                ],
              },
            ].map((block, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 32px',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--stone-50)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--stone-950)',
                    marginBottom: '18px',
                  }}
                >
                  {block.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start',
                        fontSize: '14px',
                        color: 'var(--stone-600)',
                        lineHeight: 1.6,
                        marginBottom: '10px',
                        paddingBottom: j < block.items.length - 1 ? '10px' : 0,
                        borderBottom: j < block.items.length - 1 ? '1px solid var(--stone-200)' : 'none',
                      }}
                    >
                      <span style={{ color: 'var(--green-500)', flexShrink: 0, marginTop: '4px', fontSize: '16px', lineHeight: 1 }}>
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--stone-50)', borderTop: '1px solid var(--stone-200)' }}>
        <div className="container">
          <h2 style={{ fontSize: '34px', letterSpacing: '-0.02em', marginBottom: '14px' }}>Impact stories</h2>
          <p style={{ fontSize: '15px', color: 'var(--stone-500)', marginBottom: '12px', maxWidth: '480px', lineHeight: 1.6 }}>
            Names are changed and details generalised to protect the privacy and safety of all individuals involved.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--stone-400)', marginBottom: '48px', lineHeight: 1.6 }}>
            Images are illustrative and do not depict the individuals described.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {stories.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '0',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                }}
              >
                {i % 2 !== 0 && (
                  <div style={{ minHeight: '320px', overflow: 'hidden' }}>
                    <ImageSlot src={storyImages[i]} height={320} alt={`${s.name} — illustrative`} />
                  </div>
                )}
                <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                      marginBottom: '16px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {s.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '26px',
                      fontWeight: 400,
                      marginBottom: '4px',
                      color: 'var(--stone-950)',
                    }}
                  >
                    {s.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--stone-500)', marginBottom: '16px' }}>{s.role}</div>
                  <p style={{ fontSize: '15px', color: 'var(--stone-600)', lineHeight: 1.75, marginBottom: '16px' }}>{s.body}</p>
                  <p style={{ fontSize: '14px', color: 'var(--stone-500)', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>{s.detail}</p>
                  <div
                    style={{
                      padding: '12px 16px',
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
                {i % 2 === 0 && (
                  <div style={{ minHeight: '320px', overflow: 'hidden' }}>
                    <ImageSlot src={storyImages[i]} height={320} alt={`${s.name} — illustrative`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--white)', borderTop: '1px solid var(--stone-200)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Help us write the next chapter.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--stone-500)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            Every case costs time, coordination, and resources. Your donation funds the next case — and the one after that.
          </p>
          <Link
            to="/donate"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              backgroundColor: 'var(--green-700)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            Donate today
          </Link>
        </div>
      </section>
    </div>
  );
}
