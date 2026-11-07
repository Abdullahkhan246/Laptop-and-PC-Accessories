import { useEffect, useState } from 'react'
import { products, CATEGORIES, categoryImages } from '../data/products'
import ProductCard from '../components/ProductCard'
import Tilt from '../components/Tilt'
import { FiZap, FiShield, FiDollarSign, FiTruck, FiRefreshCw, FiMessageCircle, FiArrowRight } from 'react-icons/fi'

const SLIDES = [
  { title: 'Power Meets Performance', sub: 'Latest laptops for work, study and gaming — at prices that make sense.', cta: 'Shop Laptops', category: 'Laptops', image: categoryImages.Laptops, gradient: 'linear-gradient(135deg,#171717,#eab308)' },
  { title: 'See Every Detail', sub: 'Monitors for every setup — office, pro and gaming, delivered across Pakistan.', cta: 'Shop Monitors', category: 'Monitors', image: categoryImages.Monitors, gradient: 'linear-gradient(135deg,#171717,#eab308)' },
  { title: 'Small Things, Big Difference', sub: 'Chargers, stands, power banks and more accessories for your laptop and phone.', cta: 'Shop Accessories', category: 'PC Accessories', image: categoryImages['PC Accessories'], gradient: 'linear-gradient(135deg,#171717,#eab308)' },
]

export default function Home({ go, addToCart, toggleWishlist, wishlist }) {
  const [slide, setSlide] = useState(0)
  const [email, setEmail] = useState('')
  const [newsMsg, setNewsMsg] = useState('')

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const featured = products.filter((p) => p.isFeatured)
  const arrivals = products.filter((p) => p.isNew)
  const monitors = products.filter((p) => p.category === 'Monitors')
  const accessories = products.filter((p) => p.category === 'Laptop Accessories' || p.category === 'PC Accessories')
  const s = SLIDES[slide]

  function subscribe(e) {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) { setNewsMsg('Please enter a valid email address.'); return }
    setNewsMsg('Subscribed! Welcome to the AAA family (demo — nothing was sent anywhere).')
    setEmail('')
  }

  const cardProps = { go, addToCart, toggleWishlist }

  return (
    <main>
      {/* ---------- Hero with 3D visual ---------- */}
      <section className="hero">
        <div className="hero-text">
          <span className="hero-chip">New stock every week</span>
          <h1>{s.title}</h1>
          <p>{s.sub}</p>
          <div className="hero-btns">
            <button className="btn btn-hero" onClick={() => go('shop', { category: s.category })}>{s.cta}</button>
            <button className="btn btn-ghost" onClick={() => go('shop', { category: 'All' })}>View All Products</button>
          </div>
          <div className="hero-dots">
            {SLIDES.map((_, i) => (
              <button key={i} className={i === slide ? 'dot on' : 'dot'} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* CSS 3D scene: layered floating cards in perspective */}
        <div className="hero-3d" aria-hidden="true">
          <div className="cube-scene">
            <div className="float-card fc-main" style={{ background: s.gradient }}>
              <img className="fc-image" src={s.image} alt="" />
              <strong className="fc-title">{s.category}</strong>
              <small className="fc-subtitle">AAA Hardware</small>
            </div>
            <div className="float-card fc-small fc-a"><FiZap className="fc-small-icon" aria-hidden="true" />Fast Delivery</div>
            <div className="float-card fc-small fc-b"><FiShield className="fc-small-icon" aria-hidden="true" />Genuine Warranty</div>
            <div className="float-card fc-small fc-c"><FiDollarSign className="fc-small-icon" aria-hidden="true" />Honest Prices</div>
            <div className="ring ring-1" />
            <div className="ring ring-2" />
          </div>
        </div>
      </section>

      {/* ---------- Category tiles (3D tilt) ---------- */}
      <section className="section">
        <div className="section-head"><h2>Shop by Category</h2></div>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <Tilt key={c.name} max={12}>
              <button className="cat-tile" style={{ background: c.gradient }} onClick={() => go('shop', { category: c.name })}>
                <img className="cat-image" src={c.image} alt="" loading="lazy" />
                <span className="cat-copy"><strong>{c.name}</strong><small>{c.tagline}</small></span>
              </button>
            </Tilt>
          ))}
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="section alt">
        <div className="section-head">
          <h2>Featured Products</h2>
          <button className="link-btn" onClick={() => go('shop', { category: 'All' })}>View All</button>
        </div>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} inWishlist={wishlist.includes(p.id)} {...cardProps} />
          ))}
        </div>
      </section>

      {/* ---------- New arrivals ---------- */}
      <section className="section">
        <div className="section-head"><h2>New Arrivals</h2></div>
        <div className="product-grid">
          {arrivals.map((p) => (
            <ProductCard key={p.id} product={p} inWishlist={wishlist.includes(p.id)} {...cardProps} />
          ))}
        </div>
      </section>

      {/* ---------- Monitors spotlight ---------- */}
      <section className="section alt">
        <div className="section-head">
          <h2>Monitors Spotlight</h2>
          <button className="link-btn" onClick={() => go('shop', { category: 'Monitors' })}>View All <FiArrowRight className="inline-icon" aria-hidden="true" /></button>
        </div>
        <div className="product-grid">
          {monitors.map((p) => (
            <ProductCard key={p.id} product={p} inWishlist={wishlist.includes(p.id)} {...cardProps} />
          ))}
        </div>
      </section>

      {/* ---------- Accessories spotlight ---------- */}
      <section className="section">
        <div className="section-head">
          <h2>Accessories Spotlight</h2>
          <button className="link-btn" onClick={() => go('shop', { category: 'Laptop Accessories' })}>View All <FiArrowRight className="inline-icon" aria-hidden="true" /></button>
        </div>
        <div className="product-grid">
          {accessories.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} inWishlist={wishlist.includes(p.id)} {...cardProps} />
          ))}
        </div>
      </section>

      {/* ---------- Features strip ---------- */}
      <section className="features">
        <div><span><FiTruck className="feature-icon" aria-hidden="true" /></span><strong>Fast Delivery</strong><small>2–5 days across Pakistan</small></div>
        <div><span><FiShield className="feature-icon" aria-hidden="true" /></span><strong>Genuine Warranty</strong><small>Brand warranty on components</small></div>
        <div><span><FiRefreshCw className="feature-icon" aria-hidden="true" /></span><strong>Easy Exchange</strong><small>Sealed items within 7 days</small></div>
        <div><span><FiMessageCircle className="feature-icon" aria-hidden="true" /></span><strong>Friendly Support</strong><small>Real humans, 6 days a week</small></div>
      </section>

      {/* ---------- Newsletter (demo only) ---------- */}
      <section className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <p>Price drops and new arrivals, once a week. No spam.</p>
        <form onSubmit={subscribe}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address..." />
          <button className="btn btn-hero" type="submit">Subscribe</button>
        </form>
        {newsMsg && <p className="form-msg">{newsMsg}</p>}
      </section>
    </main>
  )
}
