// client/src/components/common/Navbar.jsx
// Top navigation bar — reused on every page.
// Contains brand logo, nav links that smooth-scroll to page sections, and a Login CTA.

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg cl-navbar sticky-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <i className="bi bi-shield-lock me-2"></i>
          ClientLocker
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a className="cl-btn-outline-light btn btn-sm" href="#cta">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
