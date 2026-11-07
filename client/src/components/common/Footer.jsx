// client/src/components/common/Footer.jsx
// Site footer — company info, quick links, and copyright.
// Reused on every page to maintain consistent branding.

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cl-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand column */}
          <div className="col-lg-4 col-md-6">
            <div className="cl-footer-brand">
              <i className="bi bi-shield-lock me-2"></i>
              ClientLocker
            </div>
            <p className="small mb-0">
              Secure file management built for accounting firms.
              Protect client data with enterprise-grade security.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6">
            <h6>Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#features">Features</a></li>
              <li className="mb-2"><a href="#how-it-works">How It Works</a></li>
              <li className="mb-2"><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div className="col-lg-2 col-md-6">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about">About</a></li>
              <li className="mb-2"><a href="#contact">Contact</a></li>
              <li className="mb-2"><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="col-lg-2 col-md-6">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#privacy">Privacy Policy</a></li>
              <li className="mb-2"><a href="#terms">Terms of Service</a></li>
              <li className="mb-2"><a href="#security">Security</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 col-md-6">
            <h6>Contact</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:hello@clientlocker.com">hello@clientlocker.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="cl-footer-bottom text-center">
          <small>&copy; {currentYear} ClientLocker. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
