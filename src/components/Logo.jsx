import './css/Logo.css';
import logoImg from '../assets/logo.png';

export function Logo() {
  return (
    <div className="logo-container">
      <img className="logo-img" src={logoImg} alt="Logo" />
    </div>
  );
}