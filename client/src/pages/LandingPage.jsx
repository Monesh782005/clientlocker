// client/src/pages/LandingPage.jsx
// The public-facing landing page — assembles all landing section components

import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Landing page sections will be added here in Task 2 */}
        <div className="container text-center py-5">
          <h1>ClientLocker</h1>
          <p className="lead text-muted">
            Project structure is ready. Landing page coming next!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;

