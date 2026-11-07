import { useState } from 'react'

export function About({ go }) {
  return (
    <main className="page prose">
      <h1>About AAA Hardware</h1>
      <p className="lead">AAA Hardware is a small, friendly tech store built around one simple idea: buying computer gear in Pakistan should be honest, easy and fairly priced.</p>

      <h2>Our Story</h2>
      <p>We started as a single shop helping students and small offices pick the right laptop without the pressure and confusion that often comes with tech shopping. Today, AAA Hardware brings that same counter-side honesty online — clear prices, genuine products and advice in plain words.</p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Laptops & Monitors</strong> — trusted brands for study, office work and gaming.</li>
        <li><strong>Components</strong> — graphic cards, SSD storage and RAM upgrades that actually fit your machine.</li>
        <li><strong>Accessories</strong> — bags, stands, chargers, covers and power banks for laptops and phones.</li>
      </ul>

      <h2>Our Promise</h2>
      <ul>
        <li><strong>Quality first</strong> — every product is checked before it is listed.</li>
        <li><strong>Fair prices</strong> — discounts are real, and the saving is always shown.</li>
        <li><strong>After-sales care</strong> — warranty claims handled with a smile, not a struggle.</li>
      </ul>

      <button className="btn btn-primary" onClick={() => go('shop', { category: 'All' })}>Start Shopping</button>
      <p className="muted small">Note: this website is a student assignment demo store inspired by online computer shops in Pakistan.</p>
    </main>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })) }

  function submit(e) {
    e.preventDefault()
    if (form.name.trim().length < 3 || !/^\S+@\S+\.\S+$/.test(form.email) || form.message.trim().length < 5) {
      setMsg('Please fill your name, a valid email and a short message.'); setIsError(true); return
    }
    setIsError(false)
    setMsg('Message sent! We usually reply within one working day. (Demo form — nothing was actually sent.)')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="page">
      <h1>Contact Us</h1>
      <div className="cart-layout">
        <div className="contact-info">
          <p><strong>Sales Email:</strong> support@aaahardware.pk</p>
          <p><strong>Phone:</strong> 0336-8970603</p>
          <p><strong>Store:</strong> Faisalabad, Pakistan</p>
          <p><strong>Timings:</strong> Mon–Sat, 10 AM – 8 PM (Sun closed)</p>
          <p className="muted">Questions about a product, a warranty claim, or which upgrade fits your laptop? Send a message and we will help in simple words.</p>
        </div>
        <form className="form-card" onSubmit={submit}>
          <label>Your Name<input value={form.name} onChange={(e) => set('name', e.target.value)} /></label>
          <label>Email Address<input value={form.email} onChange={(e) => set('email', e.target.value)} /></label>
          <label>Phone<input value={form.phone} onChange={(e) => set('phone', e.target.value)} /></label>
          <label>Subject<input value={form.subject} onChange={(e) => set('subject', e.target.value)} /></label>
          <label>Your Message<textarea rows="4" value={form.message} onChange={(e) => set('message', e.target.value)} /></label>
          {msg && <p className={isError ? 'form-error' : 'form-msg'}>{msg}</p>}
          <button className="btn btn-hero full" type="submit">Send Message</button>
        </form>
      </div>
    </main>
  )
}

export function Policies() {
  return (
    <main className="page prose">
      <h1>Warranty, Returns & Exchange Policy</h1>
      <p className="muted">Written in our own simple words, the way we explain it at the counter.</p>

      <h2>Warranty</h2>
      <p>Most components at AAA Hardware carry a brand or local warranty, and the exact period is written on each product page. If something stops working during its warranty period, bring it to us with the invoice and we will guide the claim for you. Claims on imported items can take a few weeks because the part may need to travel to the brand&apos;s service centre.</p>
      <p>Warranty does not cover physical damage, water damage, burn marks, or items that were opened or repaired somewhere else.</p>

      <h2>Returns</h2>
      <p>If you change your mind, you can return an item within 3 days of delivery — but only if it is still sealed and unused, with its box and accessories complete. Items that have been opened, installed or used cannot be returned, because we cannot sell them to the next customer as new.</p>

      <h2>Exchange</h2>
      <p>Received the wrong item, or a sealed item with a factory fault? Tell us within 7 days and we will exchange it for the same item, subject to stock. If the same item is not available, we will offer a similar replacement or store credit.</p>

      <h2>Refunds</h2>
      <p>Approved refunds are returned through the same way you paid. Delivery charges are not refundable, except when the mistake was ours.</p>

      <h2>Cash on Delivery Orders</h2>
      <p>For cash on delivery, please keep the exact amount ready and check your parcel in front of the rider where possible. We may call to confirm large orders before dispatch — this protects both you and us from fake orders.</p>

      <p className="muted small">This demo policy page is part of a student assignment and does not create any real legal rights or obligations.</p>
    </main>
  )
}
