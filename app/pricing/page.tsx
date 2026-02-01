"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Barber Pricing</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Wash and Cut</h3>
          <p>$20</p>
        </div>
        <div className="pricing-card">
          <h3>Head Shave with Razor</h3>
          <p>$30</p>
        </div>
        <div className="pricing-card">
          <h3>Long Hair</h3>
          <p>$45</p>
        </div>
        <div className="pricing-card">
          <h3>Children Wash & Cut</h3>
          <p>$25</p>
        </div>
      </div>
    </section>
  );
}
