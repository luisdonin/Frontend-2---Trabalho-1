export function Form() {
  return (
    <div style={{ backgroundColor: '#151716', padding: '10px 0', width: '100%' }}>
      <form style={{ width: '100%', maxWidth: '400px', margin: '0' }}>
        <h2
          style={{
            color: '#ffffff',
            fontFamily: '"Impact", "Arial Black", sans-serif',
            fontSize: '15px',
            fontWeight: '900',
            letterSpacing: '0.8px',
            marginBottom: '6px',
            textAlign: 'left',
            textTransform: 'uppercase',
          }}
        >
          STAY UPDATED
        </h2>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <input
            type="email"
            style={{
              width: '100%',
              height: '32px',
              backgroundColor: 'transparent',
              border: '1px solid #ffffff',
              borderRadius: '999px',
              padding: '4px 34px 4px 12px',
              color: '#ffffff',
              fontSize: '13px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <button
            type="submit"
            aria-label="Submit"
            style={{
              position: 'absolute',
              right: '-50px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.95 32.87"
              fill="none"
              stroke="white"
              strokeWidth="2"
              style={{ width: '18px', height: '12px' }}
            >
              <path d="M1 1h46.95v30.24H1z" />
              <path d="m1 1 23.47 30.24L47.95 1" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}