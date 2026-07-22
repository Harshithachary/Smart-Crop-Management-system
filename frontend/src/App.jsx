import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <span className="logo-icon">🌿</span>
          <span className="logo-text">AgriPredict AI</span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active-link' : ''}>How It Works</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AgriPredict AI Solutions. Empowering modern agriculture.</p>
    </footer>
  );
}

function Home() {
  const [formData, setFormData] = useState({
    crop: '',
    pest: '',
    soil: '',
    temperature: '',
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    if (formData.crop === '' || formData.pest === '' || formData.soil === '' || formData.temperature === '') {
      setError("Please fill in all necessary fields to get an accurate prediction.");
      return;
    }

    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const payload = {
        crop: formData.crop,
        pest: formData.pest,
        soil: formData.soil,
        weather: {
          temperature: Number(formData.temperature),
        }
      };

      const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Our prediction servers are currently unreachable. Please try again later.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred during analysis.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>Smart crop protection, <br /><span className="highlight-text">powered by intelligence.</span></h1>
        <p className="hero-subtitle">Optimize your yields and reduce chemical footprint by generating precise pesticide and dosage recommendations based on your unique agricultural parameters.</p>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-grid">
          <div className="glass-card form-card">
            <h2 className="card-title">Analysis Parameters</h2>
            <form onSubmit={handlePredict}>
              <div className="input-row">
                <div className="form-group">
                  <label className="form-label">Target Crop</label>
                  <input className="form-input" type="text" name="crop" value={formData.crop} onChange={handleChange} placeholder="e.g. Potato, Wheat" autoComplete="off" />
                </div>
                <div className="form-group">
                  <label className="form-label">Identified Pest</label>
                  <input className="form-input" type="text" name="pest" value={formData.pest} onChange={handleChange} placeholder="e.g. Aphid" autoComplete="off" />
                </div>
              </div>

              <div className="input-row">
                <div className="form-group">
                  <label className="form-label">Soil Composition</label>
                  <input className="form-input" type="text" name="soil" value={formData.soil} onChange={handleChange} placeholder="e.g. Clay, Sandy" autoComplete="off" />
                </div>
                <div className="form-group">
                  <label className="form-label">Local Temperature (°C)</label>
                  <input className="form-input" type="number" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="e.g. 33" min="-20" max="60" />
                </div>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? <span className="loader"></span> : 'Generate Prescription'}
              </button>
            </form>
          </div>

          <div className="glass-card result-card">
            <h2 className="card-title">Recommendation <span className="title-badge">Live</span></h2>
            {!result && !isLoading && (
              <div className="empty-state">
                <div className="empty-icon">📊</div>
                <p>Awaiting parameters.</p>
                <span>Fill out the form to generate a precise pesticide prescription.</span>
              </div>
            )}

            {isLoading && (
              <div className="loading-state">
                <div className="large-loader"></div>
                <p>Analyzing mathematical models...</p>
              </div>
            )}

            {result && (
              <div className="result-content">
                <div className="result-alert">Analysis Complete</div>
                <div className="result-item">
                  <div className="result-label">Recommended Compound</div>
                  <div className="result-value primary-value">{result.pesticide}</div>
                </div>
                <div className="result-item">
                  <div className="result-label">Optimal Application Dosage</div>
                  <div className="result-value dosage-value">{result.dosage}</div>
                </div>
                <p className="result-disclaimer">Always follow local agricultural regulations and manufacturer instructions during application.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function HowItWorks() {
  return (
    <main className="main-content">
      <section className="info-section fade-in">
        <h2>How AgriPredict AI Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Input Parameters</h3>
            <p>Enter your crop type, identified pest, soil composition, and local temperature into our secure analytical engine.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our algorithms instantly process your data against extensive agronomic databases and environmental models.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Actionable Results</h3>
            <p>Receive immediate, highly-accurate recommendations for pesticide selection and precise application dosage.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="main-content">
      <section className="contact-section fade-in">
        <div className="contact-container">
          <h2>Need expert agricultural assistance?</h2>
          <p>Our agronomy support team is available 24/7 to help you optimize your crop yield and answer any questions regarding the predictive algorithms.</p>
          <a href="mailto:support@agripredict.ai" className="btn-secondary">Contact Support</a>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
