import { CATEGORIES } from '../data/products'

export default function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="logo footer-logo">
            <span className="logo-badge">AAA</span>
            <span className="logo-text light">AAA <strong>Hardware</strong></span>
          </div>
          <p>Your neighbourhood online tech store in Pakistan. Genuine laptops, monitors, components and accessories at fair prices, delivered to your door.</p>
          <p className="footer-contact">Karachi, Pakistan<br />support@aaahardware.pk<br />Mon–Sat, 10 AM – 8 PM</p>
        </div>

        <div>
          <h4>Products</h4>
          {CATEGORIES.map((c) => (
            <button key={c.name} className="footer-link" onClick={() => go('shop', { category: c.name })}>{c.name}</button>
          ))}
        </div>

        <div>
          <h4>Account</h4>
          <button className="footer-link" onClick={() => go('login')}>Sign In</button>
          <button className="footer-link" onClick={() => go('login')}>Sign Up</button>
          <button className="footer-link" onClick={() => go('cart')}>Shopping Cart</button>
          <button className="footer-link" onClick={() => go('wishlist')}>My Wishlist</button>
        </div>

        <div>
          <h4>Company</h4>
          <button className="footer-link" onClick={() => go('about')}>About Us</button>
          <button className="footer-link" onClick={() => go('contact')}>Contact Us</button>
          <button className="footer-link" onClick={() => go('policies')}>Warranty & Returns</button>
          <button className="footer-link" onClick={() => go('policies')}>Exchange Policy</button>
        </div>
      </div>
      <div className="footer-bottom">© 2026 AAA Hardware. All rights reserved. Student assignment project — demo store, no real orders are processed.</div>
    </footer>
  )
}
