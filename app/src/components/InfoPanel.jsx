export default function InfoPanel({ infos, contact }) {
  return (
    <>
      <div className="info-row">
        {infos.map((info) => (
          <div className="info-item" key={info.label}>
            <span className="label">{info.label}</span>
            <span className="value">
              {info.value} <small>{info.suffix}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="schedule-block">
        <p>
          <span className="icon-big">🕒</span> <strong>Nos cours sont disponibles</strong> en journée, en soirée
          comme en ligne !
        </p>
        <span className="badge-online">💻 100% accessible</span>
      </div>

      <div className="contact-section">
        <div className="contact-city">
          <span style={{ fontSize: '1.2rem', marginRight: '0.3rem' }}>📍</span> {contact.city}
        </div>
        <div className="contact-phones">
          {contact.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`}>
              <span className="phone-icon">📞</span> {phone}
            </a>
          ))}
        </div>
      </div>

      <hr />

      <div className="footer-meta">
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <span className="pill-light">FORMATION 2026</span>
          <span style={{ color: '#3c5a7a', fontSize: '0.85rem' }}>⭐ Programme officiel CJEPE</span>
        </div>
        <div className="footer-note">référent digital · expert en communication digitale · Bénin</div>
      </div>

      <div className="micro-info">
        <span>✅ Inscription 15.000 FCFA</span>
        <span>✅ Prix 150.000 FCFA</span>
        <span>✅ Durée 6 mois</span>
        <span>✅ Cotonou</span>
      </div>
    </>
  )
}
