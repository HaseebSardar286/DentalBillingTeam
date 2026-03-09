"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

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
            backgroundImage: "url('/images/dentist_success.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            zIndex: 0,
          }}
        ></div>

        <div
          className="container position-relative text-center text-white"
          style={{ zIndex: 1 }}
          data-aos="fade-up"
        >
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead fw-light mx-auto" style={{ maxWidth: "700px" }}>
            Reach out to our dental billing experts today. We are here to answer
            your questions and help your practice thrive.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Grid */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f8fafc",
          marginTop: "-30px",
          paddingBottom: "80px !important",
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-4 justify-content-center">
            {/* Phone Card */}
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 bg-white hover-focus-teal">
                <div className="d-flex justify-content-center mb-4 mt-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i className="fa-solid fa-phone fs-3"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                  Call Us
                </h4>
                <p className="text-muted small mb-2">
                  Speak directly with a specialist.
                </p>
                <a
                  href="tel:+14754346464"
                  className="fw-bold fs-5 text-decoration-none"
                  style={{ color: "#2563eb" }}
                >
                  +1 (475) 434-6464
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 bg-white hover-focus-teal">
                <div className="d-flex justify-content-center mb-4 mt-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i className="fa-solid fa-envelope fs-3"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                  Email Us
                </h4>
                <p className="text-muted small mb-2">
                  We reply within 24 hours.
                </p>
                <a
                  href="mailto:admin@dentalbilingteam.com"
                  className="fw-bold fs-5 text-decoration-none"
                  style={{ color: "#2563eb" }}
                >
                  admin@dentalbilingteam.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="col-12 col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 bg-white hover-focus-teal">
                <div className="d-flex justify-content-center mb-4 mt-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <i className="fa-solid fa-location-dot fs-3"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                  Visit Us
                </h4>
                <p className="text-muted small mb-2">Corporate Headquarters</p>
                <span className="fw-bold text-dark fs-6">
                  Brookfield, CT 06804
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Image Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* Left Column: Form */}
            <div className="col-12 col-lg-7" data-aos="fade-right">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i
                  className="fa-solid fa-stethoscope"
                  style={{ color: "#2563eb" }}
                ></i>
                <span
                  className="fw-bold text-uppercase"
                  style={{ color: "#2563eb", letterSpacing: "1px" }}
                >
                  Get In Touch
                </span>
              </div>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#0f172a" }}
              >
                Send Us A Message
              </h2>
              <p className="text-muted mb-5" style={{ lineHeight: "1.7" }}>
                Whether you need a free revenue cycle audit, have questions
                about our credentialing process, or want to explore outsourcing
                options, fill out the form below.
              </p>

              {isSuccess && (
                <div
                  className="alert alert-success d-flex align-items-center rounded-3 mb-4"
                  role="alert"
                >
                  <i className="fa-solid fa-circle-check fs-4 me-3"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <br />
                    One of our billing specialists will contact you shortly.
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="row g-4 bg-white border border-1 border-light shadow-sm rounded-4 p-4 p-md-5"
              >
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label fw-bold text-dark small"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-0"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. John Doe"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="email"
                    className="form-label fw-bold text-dark small"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light border-0"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@dentalpractice.com"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="phone"
                    className="form-label fw-bold text-dark small"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg bg-light border-0"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="subject"
                    className="form-label fw-bold text-dark small"
                  >
                    Subject Inquiry *
                  </label>
                  <select
                    className="form-select form-select-lg bg-light border-0"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    <option value="Free Audit">
                      Request Free Billing Audit
                    </option>
                    <option value="General Billing">
                      General Billing Services
                    </option>
                    <option value="Credentialing">Credentialing</option>
                    <option value="AR Recovery">Aging AR Recovery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label fw-bold text-dark small"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control bg-light border-0"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help maximize your revenue..."
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-bold py-3"
                    style={{ backgroundColor: "#0f172a", borderRadius: "8px" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Image */}
            <div className="col-12 col-lg-5 text-center" data-aos="fade-left">
              <div className="position-relative d-inline-block w-100 h-100">
                {/* Decorative teal box behind the image */}
                <div
                  className="position-absolute rounded-4 h-100 w-100"
                  style={{
                    backgroundColor: "#2563eb",
                    transform: "translate(15px, 15px)",
                    zIndex: 0,
                  }}
                ></div>
                <img
                  src="/images/consultant.png"
                  alt="Dental Office Support"
                  className="img-fluid rounded-4 position-relative shadow-lg"
                  style={{
                    zIndex: 1,
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "650px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#2563eb" }}>
        <div
          className="container py-5 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="display-5 fw-bold mb-4">
            You Practice Dentistry. We Track Down The Payments.
          </h2>
          <p
            className="lead mb-5 mx-auto fs-5"
            style={{ maxWidth: "700px", opacity: 0.9, lineHeight: "1.8" }}
          >
            Don't let denied claims and unpaid AR slow your practice down.
            Partner with Dental Billing Team & Associates for a reliable,
            seamless financial operation.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Link
              href="/services"
              className="btn btn-lg px-5 py-3 fw-bold"
              style={{
                backgroundColor: "#0f172a",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
