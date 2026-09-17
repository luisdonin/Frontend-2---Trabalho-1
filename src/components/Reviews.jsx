export function Reviews({ review, costumerName, profileType, isLast }) {
  const customColor = { color: '#FFFFEB' };

  return (
    <div className={`col-md-4 px-4 py-2 d-flex flex-column justify-content-between ${!isLast ? 'border-end border-secondary' : ''}`}>
      <p className="fs-5 fw-normal mb-4" style={customColor}>
        "{review}"
      </p>
      <div>
        <p className="fw-bold mb-1 small d-flex align-items-center" style={customColor}>
          <span className="me-2" style={customColor}>—</span>{costumerName}
        </p>
        <p className="small mb-0 fw-bold" style={{ ...customColor, fontSize: '0.8rem' }}>
          {profileType}
        </p>
      </div>
    </div>
  );
}