import { motion } from 'framer-motion';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import heroImg from './assets/hero.png';
import ayurvedaImg from './assets/ayurveda.png';
import massageImg from './assets/massage.png';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Animation Variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft: any = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight: any = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleUp: any = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

function App() {
  return (
    <div className="app-container">
      {/* Floating Action Buttons */}
      <div className="fab-container">
        <a href="https://wa.me/919946621123" target="_blank" rel="noreferrer" className="fab whatsapp" aria-label="Chat on WhatsApp">
          <WhatsAppIcon />
        </a>
        <a href="https://www.instagram.com/ayra_wellness_spa/" target="_blank" rel="noreferrer" className="fab instagram" aria-label="Visit our Instagram">
          <InstagramIcon />
        </a>
      </div>

      {/* Navigation (Simple top bar) */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10, padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--gold-primary)', fontWeight: 600, letterSpacing: '2px' }}>
          AYRA <span style={{ color: 'white', fontWeight: 400 }}>WELLNESS SPA</span>
        </div>
        <div>
          <a href="#book" className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }}>Book Now</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src={heroImg} 
          alt="Ayra Spa Luxury Interior" 
          className="hero-bg" 
        />
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="hero-subtitle">Holistic Rejuvenation</motion.span>
          <motion.h1 variants={fadeInUp} className="hero-title">Awaken Your Senses at Ayra</motion.h1>
          <motion.p variants={fadeInUp} style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Experience the synergy of ancient Ayurvedic wisdom and modern luxury in Pathanamthitta's premier wellness sanctuary.
          </motion.p>
          <motion.a variants={fadeInUp} href="#services" className="btn-primary">Discover Therapies</motion.a>
        </motion.div>
      </section>

      {/* About Split Section */}
      <motion.section 
        className="split-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="split-content" variants={slideInLeft}>
          <h2 className="text-gold" style={{ fontFamily: 'var(--font-heading)' }}>The Sanctuary of Peace</h2>
          <p>
            At Ayra Wellness Spa, we believe wellness is a profound harmony of body, mind, and spirit. 
            Located in the serene surroundings of Pathanamthitta, our spa offers an escape from the ordinary.
          </p>
          <p>
            From deeply restorative Ayurvedic massages to authentic Hammam and Moroccan baths, 
            every treatment is a bespoke journey tailored entirely to your renewal.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={18} className="text-gold" /> Natural, Organic Oils
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={18} className="text-gold" /> Expert Therapists
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={18} className="text-gold" /> Unisex Treatments Available
            </span>
          </div>
        </motion.div>
        <motion.div className="split-image" variants={slideInRight}>
          <img src={ayurvedaImg} alt="Ayurvedic treatments" />
        </motion.div>
      </motion.section>

      {/* Exact Services List */}
      <motion.section 
        id="services" 
        className="services"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">Therapies & Pricing</motion.h2>
          <motion.div variants={staggerContainer} className="menu-container">
            {[
              { name: '30-Min Body Massage', price: '₹999' },
              { name: '1-Hour Body Relaxation', price: '₹1,499' },
              { name: '45-Min Body Massage', price: '₹1,500' },
              { name: '1-Hour Body Massage + Golden Face Scrub', price: '₹2,000' },
              { name: '1-Hour Body Massage + Full Body Wax', price: '₹2,500' },
              { name: 'Moroccan Bath', price: '₹2,500' },
              { name: 'Hammam Bath', price: '₹3,000' },
              { name: 'Russian Delight Therapy', price: '₹5,900' }
            ].map((item, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="menu-item">
                <div className="menu-item-info">
                  <h4>{item.name}</h4>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Info Split Section (Reverse) */}
      <motion.section 
        className="split-section" 
        style={{ flexDirection: 'row-reverse' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="split-content" variants={slideInRight}>
          <h2 className="text-gold" style={{ fontFamily: 'var(--font-heading)' }}>Immersive Ambiance</h2>
          <p>
            Step into a world where time stands still. Our exquisitely designed therapy rooms provide the 
            perfect cocoon for your relaxation. Soft glowing lights, calming aromas, and pristine environments 
            set the stage for your transformation.
          </p>
          <a href="#offers" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
            View Our Packages
          </a>
        </motion.div>
        <motion.div className="split-image" variants={slideInLeft}>
          <img src={massageImg} alt="Luxury Massage Room" />
        </motion.div>
      </motion.section>

      {/* Elevated Packages Section */}
      <motion.section 
        id="offers" 
        className="offers"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp} className="section-title">Exclusive Packages</motion.h2>
          <motion.p variants={fadeInUp} style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Specially priced multi-session offerings identical to our Instagram specials, guaranteeing pure relaxation over an extended time.
          </motion.p>

          <div className="offers-grid">
            
            <motion.div variants={scaleUp} className="offer-card">
              <h3 className="offer-title">Starter Package</h3>
              <span className="offer-subtitle">4 Full Body Massages</span>
              <div className="offer-price">₹4,999</div>
              <ul className="offer-features">
                <li><CheckCircle2 size={18} /> Deep stress relief & aromatherapy</li>
                <li><CheckCircle2 size={18} /> Full access to shower facilities</li>
                <li><CheckCircle2 size={18} /> Premium spa experience</li>
              </ul>
              <div className="offer-btn">
                <a href="https://wa.me/919946621123?text=Hi! I am interested in the Starter Package for ₹4,999." target="_blank" rel="noreferrer" style={{display: 'block', width: '100%'}}>
                   <button className="btn-primary" style={{ width: '100%' }}>Select Package</button>
                </a>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="offer-card premium">
              <div className="offer-badge">Most Popular</div>
              <h3 className="offer-title">Silver Package</h3>
              <span className="offer-subtitle">5 Full Body Massages</span>
              <div className="offer-price">₹5,000</div>
              <ul className="offer-features">
                <li><CheckCircle2 size={18} /> Progressive holistic healing</li>
                <li><CheckCircle2 size={18} /> Customized tension release</li>
                <li><CheckCircle2 size={18} /> Outstanding value offering</li>
              </ul>
              <div className="offer-btn">
                <a href="https://wa.me/919946621123?text=Hi! I am interested in the Silver Package for ₹5,000." target="_blank" rel="noreferrer" style={{display: 'block', width: '100%'}}>
                  <button className="btn-primary" style={{ width: '100%', backgroundColor: 'var(--gold-primary)', color: 'var(--bg-primary)' }}>
                    Select Package
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div variants={scaleUp} className="offer-card">
              <h3 className="offer-title">Gold Package</h3>
              <span className="offer-subtitle">10 Full Body Massages</span>
              <div className="offer-price">₹10,000</div>
              <ul className="offer-features">
                <li><CheckCircle2 size={18} /> The ultimate transformation journey</li>
                <li><CheckCircle2 size={18} /> Priority scheduling support</li>
                <li><CheckCircle2 size={18} /> Unmatched holistic care</li>
              </ul>
              <div className="offer-btn">
                 <a href="https://wa.me/919946621123?text=Hi! I am interested in the Gold Package for ₹10,000." target="_blank" rel="noreferrer" style={{display: 'block', width: '100%'}}>
                   <button className="btn-primary" style={{ width: '100%' }}>Select Package</button>
                 </a>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Location Map */}
      <motion.section 
        id="location" 
        className="map-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <iframe 
          title="Ayra Wellness Spa Location"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ayra%20Wellness%20Spa,Pathanamthitta&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>

      {/* Footer & Contact */}
      <motion.footer 
        id="book" 
        className="footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Ayra Wellness</h3>
              <p>Redefining luxury wellness with ancient roots and contemporary comfort.</p>
            </div>
            
            <div className="footer-contact" style={{ position: 'relative', zIndex: 10 }}>
              <h4>Visit Us</h4>
              <p>
                <MapPin size={20} className="text-gold" />
                No 30-159/6, Near St Peters Junction,<br />
                Pathanamthitta, Kerala
              </p>
            </div>

            <div className="footer-contact" style={{ position: 'relative', zIndex: 10 }}>
              <h4>Contact</h4>
              <p>
                <PhoneCall size={20} className="text-gold" />
                099466 21123 <br />099466 31123
              </p>
            </div>

            <div className="footer-contact" style={{ position: 'relative', zIndex: 10 }}>
              <h4>Hours</h4>
              <p>
                <Clock size={20} className="text-gold" />
                Open Daily<br />
                Unisex Services Available
              </p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ayra Wellness Spa. Design by Subuhan.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
