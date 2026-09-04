export function Reviews({ review, costumerName, profileType, isLast }) {
  return (
    <div className={`col-md-4 px-4 py-2 d-flex flex-column justify-content-between ${!isLast ? 'border-end border-secondary' : ''}`}>
      <p className="fs-5 text-light fw-normal mb-4">
        "{review}"
      </p>
      <div>
        <p className="fw-bold text-light mb-1 small d-flex align-items-center">
          <span className="me-2 text-secondary">—</span>{costumerName}
        </p>
        <p className="text-secondary small mb-0 fw-bold" style={{ fontSize: '0.8rem' }}>
          {profileType}
        </p>
      </div>
    </div>
  );
}