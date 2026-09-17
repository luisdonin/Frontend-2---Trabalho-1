import usaHandMap from '../assets/usahandmap.png';

export function Form() {
  return (
    <div style={{ backgroundColor: '#151716', padding: '40px 20px', width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #333' }}>
      
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '1000px', alignItems: 'center', flexWrap: 'wrap' }}>
        
        
        <div style={{ flex: 1, minWidth: '300px', paddingRight: '40px', borderRight: '1px solid #ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <form style={{ width: '100%', maxWidth: '400px', margin: '0' }}>
            <h2
              style={{
                color: '#ffffff',
                fontFamily: '"Impact", "Arial Black", sans-serif',
                fontSize: '20px',
                fontWeight: '900',
                letterSpacing: '0.8px',
                marginBottom: '10px',
                textAlign: 'left',
                textTransform: 'uppercase',
              }}
            >
              STAY UPDATED
            </h2>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
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
                  right: '10px', 
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

        
        <div style={{ flex: 1, minWidth: '300px', paddingLeft: '40px', display: 'flex', alignItems: 'center' }}>
          <img
            src={usaHandMap}
            alt="USA Hand Map"
            style={{ width: '130px', height: 'auto', marginRight: '30px' }}
          />
          
          <ul style={{ color: '#ffffff', listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8', fontFamily: 'sans-serif', fontSize: '15px' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '18px' }}>•</span> Contact
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '18px' }}>•</span> Stores
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '18px' }}>•</span> FAQ
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '18px' }}>•</span> Return & Refund Policies
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px', fontSize: '18px' }}>•</span> Terms & Privacy Policies
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}