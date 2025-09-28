
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1D3252' }}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          Rozmowy o mieście
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Najbliższe wydarzenie
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/poprzednie-edycje" className="nav-link">
                Poprzednie edycje
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kontakt" className="nav-link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
