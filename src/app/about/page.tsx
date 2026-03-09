import Link from "next/link";
import Counter from "@/components/Counter";

export default function About() {
  return (
    <>
      {/* 1. Page Hero Banner */}
      <section
        className="position-relative py-5 d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "35vh",
          backgroundColor: "#0f172a",
          overflow: "hidden",
        }}
      >
        {/* Faint Background Image */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            backgroundImage: "url('/images/consultant.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            zIndex: 0,
          }}
        ></div>

        <div
          className="container position-relative text-center text-white"
          style={{ zIndex: 1 }}
        >
          <h1 className="display-4 fw-bold mb-3">About Us</h1>
          <p className="lead fw-light mx-auto" style={{ maxWidth: "700px" }}>
            We are a team of dedicated dental billing professionals committed to
            maximizing your practice's revenue and reducing administrative
            burdens.
          </p>
        </div>
      </section>

      {/* 2. About Us & Mission */}
      <section className="py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center justify-content-between gy-5">
            <div className="col-12 col-lg-5 position-relative text-center text-lg-start">
              {/* Light Blue Background Shape */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  backgroundColor: "#f8fafc",
                  width: "140%",
                  paddingBottom: "140%",
                  top: "0%",
                  left: "-20%",
                  zIndex: 0,
                }}
              ></div>

              <img
                src="/images/billing.jpg"
                alt="About Us"
                className="img-fluid position-relative shadow"
                style={{ zIndex: 1, borderRadius: "5px" }}
              />
            </div>
            <div className="col-12 col-lg-6 text-start z-1">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i
                  className="fa-solid fa-stethoscope"
                  style={{ color: "#2563eb" }}
                ></i>
                <span
                  className="fw-bold text-uppercase"
                  style={{ color: "#2563eb", letterSpacing: "1px" }}
                >
                  Who We Are
                </span>
              </div>
              <h2
                className="display-6 fw-bold mb-4"
                style={{ lineHeight: "1.3", color: "#0f172a" }}
              >
                We Handle Billing, You Focus on Dentistry
              </h2>
              <p
                className="text-muted mb-4 fs-6 pb-2"
                style={{ lineHeight: "1.8" }}
              >
                Our team delivers reliable dental billing services in USA,
                allowing dentists and staff to dedicate more time to patients.
                At the same time, we manage claims, documentation and insurance
                coordination behind the scenes. With structured systems and
                proactive follow-ups, we help eliminate delays and improve
                overall collections.
              </p>

              <div
                className="card border-0 rounded-4 p-4"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <h5
                      className="fw-bold mb-3 fs-5"
                      style={{ color: "#0f172a" }}
                    >
                      Our Mission
                    </h5>
                    <p
                      className="text-muted mb-0 small"
                      style={{ lineHeight: "1.7" }}
                    >
                      Our mission is to provide accurate and transparent billing
                      solutions that maximize reimbursements, reduce denials and
                      strengthen long-term financial stability for dental
                      practices.
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <h5
                      className="fw-bold mb-3 fs-5"
                      style={{ color: "#0f172a" }}
                    >
                      Our Vision
                    </h5>
                    <p
                      className="text-muted mb-0 small"
                      style={{ lineHeight: "1.7" }}
                    >
                      Our vision is to become one of the most dependable dental
                      insurance billing companies, recognized for innovation,
                      accountability and measurable revenue growth for practices
                      nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          borderTop: "1px solid #eaeaea",
          borderBottom: "1px solid #eaeaea",
        }}
        data-aos="fade-up"
      >
        <div className="container py-4">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2
                className="display-4 fw-bold mb-2"
                style={{ color: "#0f172a" }}
              >
                <Counter end={40} suffix="+" />
              </h2>
              <p
                className="fw-semibold text-muted text-uppercase mb-0"
                style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
              >
                National Awards
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2
                className="display-4 fw-bold mb-2"
                style={{ color: "#0f172a" }}
              >
                <Counter end={220} suffix="+" />
              </h2>
              <p
                className="fw-semibold text-muted text-uppercase mb-0"
                style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
              >
                Expert Doctors
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2
                className="display-4 fw-bold mb-2"
                style={{ color: "#0f172a" }}
              >
                <Counter end={5} suffix="k+" />
              </h2>
              <p
                className="fw-semibold text-muted text-uppercase mb-0"
                style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
              >
                Satisfied Patients
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2
                className="display-4 fw-bold mb-2"
                style={{ color: "#0f172a" }}
              >
                <Counter end={8} suffix="k+" />
              </h2>
              <p
                className="fw-semibold text-muted text-uppercase mb-0"
                style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
              >
                Operation Success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Core Values Section */}
      <section className="py-5 bg-white">
        <div className="container py-5 mt-4">
          <div className="text-center mb-5 pb-3">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i
                className="fa-solid fa-stethoscope"
                style={{ color: "#2563eb" }}
              ></i>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                Core Values
              </span>
            </div>
            <h2 className="display-5 fw-bold" style={{ color: "#0f172a" }}>
              What Drives Us Forward
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Integrity",
                icon: "fa-shield-halved",
                text: "We operate with the highest level of honesty and transparency in every claim we submit and every report we generate.",
              },
              {
                title: "Excellence",
                icon: "fa-star",
                text: "We strive for perfection, ensuring zero-error billing to get you paid faster and maximize your revenue cycle.",
              },
              {
                title: "Partnership",
                icon: "fa-handshake",
                text: "We don't just work for you; we work with you as an extension of your own in-house dental team.",
              },
              {
                title: "Innovation",
                icon: "fa-lightbulb",
                text: "We constantly adapt to the latest coding changes and billing technology to keep your practice ahead of the curve.",
              },
            ].map((value, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div
                  className="card h-100 border-0 shadow-sm p-4 text-center rounded-4"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <div className="d-flex justify-content-center mb-4 mt-2">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
                      style={{
                        width: "70px",
                        height: "70px",
                        color: "#2563eb",
                      }}
                    >
                      <i className={`fa-solid ${value.icon} fs-3`}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                    {value.title}
                  </h4>
                  <p
                    className="text-muted small mb-0"
                    style={{ lineHeight: "1.7" }}
                  >
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet The Leadership */}
      <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container py-5">
          <div className="text-center mb-5 pb-3">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i
                className="fa-solid fa-stethoscope"
                style={{ color: "#2563eb" }}
              ></i>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                Our Team
              </span>
            </div>
            <h2 className="display-5 fw-bold" style={{ color: "#0f172a" }}>
              The Experts Behind Your Success
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Farha Ahmed",
                role: "Project Manager",
                desc: "Oversees all billing operations and ensures strategic goals are met for every practice.",
              },
              {
                name: "Arthur Sajid HR",
                role: "Human Resources / Client Relations",
                desc: "Maintains open communication with dental practices and ensures top-tier service delivery.",
              },
              {
                name: "Alex Ijaz",
                role: "Group Manager",
                desc: "Stays ahead of billing regulations and manages our specialized group of billing experts.",
              },
            ].map((member, idx) => (
              <div key={idx} className="col-12 col-md-4 text-center">
                <div className="card border-0 rounded-4 shadow-sm h-100 bg-white">
                  <div className="card-body p-5">
                    <div
                      className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                      style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "#dbeafe",
                      }}
                    >
                      <i
                        className="fa-solid fa-user-tie"
                        style={{ fontSize: "2.5rem", color: "#2563eb" }}
                      ></i>
                    </div>
                    <h5 className="fw-bold text-dark mb-1 h4">{member.name}</h5>
                    <p
                      className="fw-semibold mb-4"
                      style={{ color: "#2563eb" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-muted small px-lg-3 mb-0"
                      style={{ lineHeight: "1.8" }}
                    >
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#0f172a" }}>
        <div className="container py-5 text-center text-white">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p
            className="lead mb-5 mx-auto fs-5"
            style={{ maxWidth: "600px", opacity: 0.9, lineHeight: "1.8" }}
          >
            Join the hundreds of dental practices nationwide that trust us to
            handle their revenue cycle. Let's maximize your collections
            together.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Link
              href="/"
              className="btn btn-lg px-5 py-3 fw-bold"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Get a Free Audit
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
              style={{
                border: "2px solid rgba(255,255,255,0.7)",
                borderRadius: "8px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
