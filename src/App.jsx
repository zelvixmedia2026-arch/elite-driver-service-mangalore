import { useEffect, useState } from "react";

import {
  FaArrowRight,
  FaArrowUp,
  FaCar,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaUserTie,
  FaWhatsapp,
  FaRoute,
  FaBriefcase,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "918296320731"; // REPLACE with the client's number

const services = [
  {
    number: "01",
    icon: <FaUserTie />,
    title: "Personal Driver",
    description:
      "Professional driving assistance for your everyday journeys and personal travel.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    icon: <FaClock />,
    title: "Hourly Driver",
    description:
      "Flexible driver bookings for errands, appointments, shopping and daily plans.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    icon: <FaCalendarAlt />,
    title: "Daily Driver",
    description:
      "Arrange a driver for a full day of travel according to your schedule.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    icon: <FaRoute />,
    title: "Outstation Travel",
    description:
      "Driving assistance for longer journeys and travel beyond your city.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    icon: <FaBriefcase />,
    title: "Corporate Drivers",
    description:
      "Professional driving arrangements for business meetings and corporate travel.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    icon: <FaCar />,
    title: "Special Occasions",
    description:
      "Driving assistance for family functions, celebrations and special events.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85",
  },
];

const benefits = [
  {
    icon: <FaUserTie />,
    title: "Professional Approach",
    description:
      "A customer-focused service with professional communication.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Your Journey Matters",
    description:
      "Travel arrangements planned around your requirements.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Bookings",
    description:
      "Choose a service duration that fits your travel plans.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Convenient Service",
    description:
      "Discuss your pickup point, destination and schedule with our team.",
  },
];

const packages = [
  {
    label: "FLEXIBLE",
    title: "Hourly Booking",
    description: "For short trips and multiple stops.",
    features: [
      "Choose your preferred duration",
      "Discuss pickup and destination",
      "Confirm availability in advance",
    ],
  },
  {
    label: "POPULAR",
    title: "Full Day Booking",
    description: "For a day of personal or business travel.",
    features: [
      "Convenient daily arrangement",
      "Plan multiple destinations",
      "Confirm the schedule in advance",
    ],
    featured: true,
  },
  {
    label: "LONG DISTANCE",
    title: "Outstation Booking",
    description: "For journeys beyond your city.",
    features: [
      "Discuss your travel route",
      "Plan your departure time",
      "Request a personalised quote",
    ],
  },
];

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-symbol">
          <FaCar />
        </span>

        <span className="brand-text">
          <strong>ELITE</strong>
          <small>DRIVER SERVICE</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Packages
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          Book a Driver <FaArrowRight />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="hero-grid" />

      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          YOUR JOURNEY, OUR PRIORITY
        </div>

        <h1 className="hero-title">
          MORE THAN
          <br />
          JUST A <span>DRIVER.</span>
        </h1>

        <p className="hero-description">
          Professional driving services designed around your
          schedule, your destination and your peace of mind.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button button-gold">
            Hire a Driver <FaArrowRight />
          </a>

          <a href="#services" className="button button-outline">
            Explore Services <FaArrowRight />
          </a>
        </div>

        <div className="hero-bottom">
          <div className="hero-scroll">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </div>

          <span className="hero-index">
            <span>01</span> / 04
          </span>
        </div>
      </div>

      <div className="hero-side-label">
        PROFESSIONAL DRIVING · PERSONAL SERVICE
      </div>

      <div className="hero-corner">
        <FaArrowDownIcon />
      </div>
    </section>
  );
}

function FaArrowDownIcon() {
  return <FaArrowUp className="arrow-down" />;
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </div>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-heading-row">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="DRIVING SOLUTIONS"
            highlight="FOR YOU."
            description="From everyday journeys to longer trips, explore driving services that work around your plans."
          />

          <a href="#contact" className="text-link reveal">
            DISCUSS YOUR REQUIREMENTS <FaArrowRight />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              key={service.number}
              style={{ "--delay": `${index * 100}ms` }}
            >
              <div className="service-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-icon">
                  {service.icon}
                </span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  ENQUIRE NOW <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
              alt="Scenic road through the mountains"
              loading="lazy"
            />
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=85"
              alt="Premium car"
              loading="lazy"
            />
          </div>

          <div className="about-stamp">
            <span>ELITE</span>
            <small>DRIVE WITH CONFIDENCE</small>
          </div>
        </div>

        <div className="about-content reveal">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            ABOUT ELITE
          </div>

          <h2>
            EVERY JOURNEY
            <br />
            DESERVES A <span>BETTER</span>
            <br />
            EXPERIENCE.
          </h2>

          <p>
            At Elite Driver Service, we believe that good driving
            service starts with understanding your needs. Whether
            you are planning a daily commute, a business trip or a
            longer journey, we make arranging a driver simple.
          </p>

          <p>
            Tell us your requirements, discuss your schedule and
            let us help you organise your next journey.
          </p>

          <div className="about-points">
            <div>
              <FaCheck />
              Personalised booking assistance
            </div>

            <div>
              <FaCheck />
              Flexible travel arrangements
            </div>

            <div>
              <FaCheck />
              Clear communication
            </div>
          </div>

          <a href="#contact" className="button button-gold">
            Get in Touch <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <SectionHeading
          eyebrow="THE ELITE DIFFERENCE"
          title="SERVICE THAT"
          highlight="MOVES WITH YOU."
          description="A straightforward booking experience, flexible arrangements and a team ready to discuss your travel requirements."
        />

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <article
              className="benefit-card reveal"
              key={benefit.title}
              style={{ "--delay": `${index * 100}ms` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>

              <span className="benefit-index">
                0{index + 1}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <div className="benefit-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "TELL US YOUR PLAN",
      text: "Share your pickup location, destination and preferred timing.",
    },
    {
      number: "02",
      title: "CONFIRM THE DETAILS",
      text: "Discuss availability, service duration and the quoted price.",
    },
    {
      number: "03",
      title: "GET READY TO GO",
      text: "Once confirmed, your driving arrangement is ready to go.",
    },
  ];

  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLE BY DESIGN"
          title="THREE STEPS."
          highlight="ONE EASY BOOKING."
          description="Getting started is simple. Tell us what you need, confirm your booking and plan your journey."
        />

        <div className="process-grid">
          {steps.map((step, index) => (
            <article
              className="process-card reveal"
              key={step.number}
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="process-number">{step.number}</div>

              <div className="process-connector">
                <span />
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const enquire = (packageName) => {
    const message = `Hello Elite Driver Service, I would like to enquire about the ${packageName}. Please share the pricing and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="BOOKING OPTIONS"
          title="THE RIGHT DRIVER."
          highlight="YOUR SCHEDULE."
          description="Choose the type of booking you need. Contact us for a quote based on your journey and requirements."
        />

        <div className="pricing-grid">
          {packages.map((item, index) => (
            <article
              className={`pricing-card reveal ${
                item.featured ? "pricing-featured" : ""
              }`}
              key={item.title}
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="pricing-label">{item.label}</div>

              <h3>{item.title}</h3>

              <p className="pricing-description">
                {item.description}
              </p>

              <div className="pricing-divider" />

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <FaCheck /> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={
                  item.featured
                    ? "button button-gold pricing-button"
                    : "button button-outline pricing-button"
                }
                onClick={() => enquire(item.title)}
              >
                Get a Quote <FaArrowRight />
              </button>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Pricing depends on the service, duration and route.
          Contact us to confirm the applicable charges.
        </p>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Personal Driver",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    details: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submitBooking = (event) => {
    event.preventDefault();

    const message = [
      "Hello Elite Driver Service! I would like to enquire about a booking.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Pickup: ${form.pickup}`,
      `Destination: ${form.destination}`,
      `Date: ${form.date || "To be discussed"}`,
      `Time: ${form.time || "To be discussed"}`,
      `Additional details: ${form.details || "None"}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="section booking-section" id="contact">
      <div className="container booking-grid">
        <div className="booking-content reveal">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            LET'S GET YOU MOVING
          </div>

          <h2>
            YOUR NEXT
            <br />
            JOURNEY STARTS
            <br />
            <span>RIGHT HERE.</span>
          </h2>

          <p>
            Tell us where you need to go and what kind of driving
            service you require. We'll help you discuss the
            arrangements.
          </p>

          <div className="contact-detail">
            <span className="contact-detail-icon">
              <FaWhatsapp />
            </span>

            <div>
              <small>QUICK ENQUIRIES</small>
              <strong>Connect with us on WhatsApp</strong>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-icon">
              <FaPhoneAlt />
            </span>

            <div>
              <small>PERSONALISED ASSISTANCE</small>
              <strong>Discuss your booking with our team</strong>
            </div>
          </div>
        </div>

        <form
          className="booking-form reveal"
          onSubmit={submitBooking}
        >
          <div className="form-heading">
            <span>BOOKING ENQUIRY</span>
            <h3>Tell us about your journey.</h3>
            <p>Complete the details below to continue on WhatsApp.</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">YOUR NAME *</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">PHONE NUMBER *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">SERVICE REQUIRED *</label>
            <div className="select-wrap">
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={updateField}
                required
              >
                <option>Personal Driver</option>
                <option>Hourly Driver</option>
                <option>Daily Driver</option>
                <option>Outstation Travel</option>
                <option>Corporate Driver</option>
                <option>Special Occasions</option>
              </select>

              <FaChevronDown />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pickup">PICKUP LOCATION *</label>
              <input
                id="pickup"
                name="pickup"
                value={form.pickup}
                onChange={updateField}
                placeholder="Pickup point"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">DESTINATION *</label>
              <input
                id="destination"
                name="destination"
                value={form.destination}
                onChange={updateField}
                placeholder="Where are you going?"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">PREFERRED DATE</label>
              <input
                id="date"
                name="date"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={form.date}
                onChange={updateField}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">PREFERRED TIME</label>
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={updateField}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="details">ADDITIONAL DETAILS</label>
            <textarea
              id="details"
              name="details"
              rows="3"
              value={form.details}
              onChange={updateField}
              placeholder="Duration, special requirements, or anything else..."
            />
          </div>

          <button type="submit" className="button button-gold form-submit">
            Continue to WhatsApp <FaWhatsapp />
          </button>

          <p className="form-note">
            Your message will open in WhatsApp for you to review
            and send. Your booking is not confirmed until the
            service provider confirms it.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-symbol">
                <FaCar />
              </span>

              <span className="brand-text">
                <strong>ELITE</strong>
                <small>DRIVER SERVICE</small>
              </span>
            </a>

            <p>
              Professional driving services, personalised around
              your travel needs.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#pricing">Booking Options</a>
          </div>

          <div className="footer-column">
            <h4>GET IN TOUCH</h4>
            <a href="#contact">Book a Driver</a>
            <a href="#contact">Request a Quote</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column footer-social">
            <h4>CONNECT WITH US</h4>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <p>Let's plan your next journey.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Elite Driver Service. All rights reserved.
          </p>

          <a href="#home" className="back-top">
            BACK TO TOP <FaArrowUp />
          </a>
        </div>

        <div className="footer-credit">
          Designed & Developed by{" "}
          <a
            href="https://zelvixmedia.online"
            target="_blank"
            rel="noreferrer"
          >
            ZELVIX MEDIA
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello Elite Driver Service! I would like to enquire about your driving services."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Elite Driver Service on WhatsApp"
    >
      <FaWhatsapp />
      <span>Let's Talk</span>
    </a>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <HowItWorks />
        <Pricing />
        <Booking />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}