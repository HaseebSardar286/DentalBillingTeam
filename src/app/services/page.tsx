import Link from "next/link";

export default function Services() {
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
            backgroundImage: "url('/images/services.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            zIndex: 0,
          }}
        ></div>

        <div
          className="container position-relative text-center text-white"
          style={{ zIndex: 1 }}
        >
          <h1 className="display-4 fw-bold mb-3">Our Services</h1>
          <p className="lead fw-light mx-auto" style={{ maxWidth: "700px" }}>
            Comprehensive dental billing and revenue cycle management solutions
            tailored to the unique needs of your practice.
          </p>
        </div>
      </section>

      {/* 2. Main Services Grid Section */}
      <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container py-5">
          <div className="text-center mb-5 pb-3" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i
                className="fa-solid fa-stethoscope"
                style={{ color: "#2563eb" }}
              ></i>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#0f172a", letterSpacing: "1px" }}
              >
                What We Do
              </span>
            </div>
            <h2 className="display-5 fw-bold text-dark">
              Dental Billing Solutions
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Insurance verification & eligibility",
                icon: "fa-syringe",
                text: "Insurance verification is the process of confirming the validity and coverage of an insurance policy.",
                highlighted: false,
              },
              {
                title: "Claim Submission & EOB's posting",
                icon: "fa-lungs",
                text: "Dental claim submission refers to the process of submitting a claim for reimbursement for dental services with accuracy and precision.",
                highlighted: true,
              },
              {
                title: "Outstanding claim resolution",
                icon: "fa-pills",
                text: "Outstanding claim resolution refers to the process of resolving and settling outstanding claims or disputes in a timely and fair manner.",
                highlighted: false,
              },
              {
                title: "Denial Management",
                icon: "fa-head-side-virus",
                text: "Our team identifies, corrects, and resubmits denied claims quickly. We address root causes, reduce repeat denials, and protect your revenue.",
                highlighted: false,
              },
              {
                title: "AR Follow-up",
                icon: "fa-arrow-down",
                text: "We aggressively follow up on outstanding claims, reduce aging, and recover revenue stuck in 30-120+ day buckets. Cashflow stays consistent.",
                highlighted: false,
              },
              {
                title: "Patient Scheduling",
                icon: "fa-capsules",
                text: "We assist practices with streamlined appointment scheduling, reminders, and patient communication — ensuring fewer no-shows.",
                highlighted: false,
              },
              {
                title: "Credentialing Services",
                icon: "fa-user-nurse",
                text: "Real-time insurance credentialing to ensure providers are fully enrolled with payers, eliminating out-of-network surprises for patients.",
                highlighted: false,
              },
              {
                title: "Payment Reconciliation",
                icon: "fa-heart-pulse",
                text: "Accurate posting of EOBs, ERAs, patient payments, and daily adjustments to maintain 100% clean and balanced financial records.",
                highlighted: false,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`card h-100 border-0 rounded-4 p-4 shadow-sm ${feature.highlighted ? "" : "bg-white"}`}
                  style={
                    feature.highlighted
                      ? { backgroundColor: "#2563eb", color: "white" }
                      : {}
                  }
                >
                  <div className="card-body p-0">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: feature.highlighted
                          ? "rgba(255,255,255,0.2)"
                          : "#dbeafe",
                        color: feature.highlighted ? "white" : "#2563eb",
                      }}
                    >
                      <i className={`fa-solid ${feature.icon} fs-4`}></i>
                    </div>
                    <h4
                      className={`h5 fw-bold mb-3 ${feature.highlighted ? "text-white" : "text-dark"}`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`mb-0 small ${feature.highlighted ? "text-white" : "text-muted"}`}
                      style={{
                        lineHeight: "1.7",
                        opacity: feature.highlighted ? 0.9 : 1,
                      }}
                    >
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Process Section */}
      <section className="py-5 bg-white">
        <div className="container py-5 mt-4">
          <div className="text-center mb-5 pb-3" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <i
                className="fa-solid fa-stethoscope"
                style={{ color: "#2563eb" }}
              ></i>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#2563eb", letterSpacing: "1px" }}
              >
                Our Simple Workflow
              </span>
            </div>
            <h2 className="display-5 fw-bold" style={{ color: "#0f172a" }}>
              How We Work With You
            </h2>
          </div>

          <div className="row g-4 align-items-center position-relative">
            {/* Horizontal Line connecting steps (hidden on small screens) */}
            <div
              className="d-none d-lg-block position-absolute"
              style={{
                top: "40px",
                left: "10%",
                right: "10%",
                height: "2px",
                backgroundColor: "#dbeafe",
                zIndex: 0,
              }}
            ></div>

            {[
              {
                step: "01",
                title: "Discovery Call",
                text: "We assess your practice's current billing challenges, AR situation, and financial goals in a comprehensive audit.",
              },
              {
                step: "02",
                title: "Seamless Integration",
                text: "Our team securely connects with your existing practice management software with zero disruption to your daily operations.",
              },
              {
                step: "03",
                title: "Revenue Recovery",
                text: "We immediately begin tackling aging claims, appealing denials, and ensuring smooth submission of new claims.",
              },
              {
                step: "04",
                title: "Ongoing Growth",
                text: "Through transparent reporting and continuous follow-ups, we maintain high collections and accelerate your cash flow.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-3 position-relative text-center"
                style={{ zIndex: 1 }}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 bg-white border border-4 shadow-sm"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderColor: "#f8fafc",
                    color: "#2563eb",
                  }}
                >
                  <h3 className="fw-bold mb-0">{item.step}</h3>
                </div>
                <h4 className="fw-bold mb-3 h5" style={{ color: "#0f172a" }}>
                  {item.title}
                </h4>
                <p
                  className="text-muted small px-lg-3"
                  style={{ lineHeight: "1.7" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Outsource Banner */}
      <section
        className="py-5 text-white position-relative overflow-hidden"
        style={{ backgroundColor: "#2563eb" }}
      >
        {/* Soft Background Accent */}
        <div
          className="position-absolute end-0 bottom-0 rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "rgba(255,255,255,0.1)",
            transform: "translate(30%, 30%)",
          }}
        ></div>

        <div className="container py-5 position-relative z-1">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-6" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">
                Why Outsource Your Billing To Us?
              </h2>
              <p
                className="lead fw-normal mb-0"
                style={{ opacity: 0.9, lineHeight: "1.8" }}
              >
                Outsourcing your dental billing isn't just about saving
                time—it's about reclaiming lost revenue. Internal teams often
                lack the time for extensive AR follow-up and tedious appeals. We
                provide dedicated experts who focus 100% on getting you paid.
              </p>
              <div className="row mt-5 g-4">
                <div className="col-12 col-sm-6 d-flex align-items-center gap-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", color: "#2563eb" }}
                  >
                    <i className="fa-solid fa-arrow-trend-up fs-5"></i>
                  </div>
                  <span className="fw-bold fs-5">Increase Cashflow</span>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center gap-3">
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", color: "#2563eb" }}
                  >
                    <i className="fa-solid fa-clock-rotate-left fs-5"></i>
                  </div>
                  <span className="fw-bold fs-5">Save Admin Time</span>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-5 offset-lg-1 text-center"
              data-aos="fade-left"
            >
              <div
                className="bg-white p-5 rounded-4 shadow-lg text-start mx-auto"
                style={{ maxWidth: "450px" }}
              >
                <h3 className="fw-bold mb-3" style={{ color: "#0f172a" }}>
                  Free Billing Audit
                </h3>
                <p
                  className="text-muted mb-4 small"
                  style={{ lineHeight: "1.7" }}
                >
                  Find out exactly where your revenue is leaking. Get a
                  comprehensive analysis from our experts identifying unclaimed
                  reimbursements.
                </p>
                {/* <button
                  className="btn w-100 py-3 fw-bold text-white fs-5"
                  style={{ backgroundColor: "#0f172a", borderRadius: "8px" }}
                >
                  Request Free Audit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#0f172a" }}>
        <div className="container py-5 text-center text-white">
          <h2 className="display-5 fw-bold mb-4">Need a Customized Plan?</h2>
          <p
            className="lead mb-5 mx-auto fs-5"
            style={{ maxWidth: "600px", opacity: 0.9, lineHeight: "1.8" }}
          >
            Every practice is unique. Contact us today to tailor a dedicated
            billing service package designed directly around your specialty and
            needs.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Link
              href="/contact"
              className="btn btn-lg px-5 py-3 fw-bold"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
