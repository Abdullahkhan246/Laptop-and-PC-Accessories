import { useState } from 'react'
import { CATEGORIES } from '../data/products'
import { FiUser, FiHeart, FiShoppingCart, FiChevronDown } from 'react-icons/fi'

// Top bar + sticky header (logo, search, account, wishlist, cart) + main nav
export default function Header({ go, cartCount, wishlistCount, search, setSearch, current }) {
  const [dropOpen, setDropOpen] = useState(false)

  function submitSearch(e) {
    e.preventDefault()
    go('shop', { category: 'All' })
  }

  return (
    <>
      <div className="topbar">
        <span>Pakistan&apos;s friendly tech store — prices include honest discounts, no hidden charges.</span>
        <span className="topbar-links">
          <button onClick={() => go('about')}>About Us</button>
          <button onClick={() => go('contact')}>Contact Us</button>
          <button onClick={() => go('policies')}>Policies</button>
        </span>
      </div>

      <header className="header">
        <button className="logo" onClick={() => go('home')}>
          <span className="logo-badge">AAA</span>
          <span className="logo-text">AAA <strong>Hardware</strong></span>
        </button>

        <form className="search" onSubmit={submitSearch}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for? Try SSD, monitor, charger..."
            aria-label="Search products"
          />
          <button type="submit">Search</button>
        </form>

        <div className="header-actions">
          <button onClick={() => go('login')}>
            <FiUser className="ha-icon" aria-hidden="true" /><span className="ha-label">Account</span>
          </button>
          <button onClick={() => go('wishlist')}>
            <FiHeart className="ha-icon" aria-hidden="true" /><span className="ha-label">Wishlist</span>
            {wishlistCount > 0 && <span className="count">{wishlistCount}</span>}
          </button>
          <button onClick={() => go('cart')}>
            <FiShoppingCart className="ha-icon" aria-hidden="true" /><span className="ha-label">Cart</span>
            {cartCount > 0 && <span className="count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <nav className="nav">
        <button className={current === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</button>

        <div className="nav-drop" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
          <button className={current === 'shop' ? 'active' : ''} onClick={() => go('shop', { category: 'All' })}>
            Products <FiChevronDown className="inline-icon" aria-hidden="true" />
          </button>
          {dropOpen && (
            <div className="dropdown">
              {CATEGORIES.map((c) => (
                <button key={c.name} onClick={() => { setDropOpen(false); go('shop', { category: c.name }) }}>
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => go('shop', { category: 'Laptops' })}>Laptops</button>
        <button onClick={() => go('shop', { category: 'Monitors' })}>Monitors</button>
        <button onClick={() => go('shop', { category: 'SSD' })}>SSD</button>
        <button onClick={() => go('shop', { category: 'RAM' })}>RAM</button>
        <button onClick={() => go('shop', { category: 'PC Accessories' })}>PC Accessories</button>
        <button className={current === 'about' ? 'active' : ''} onClick={() => go('about')}>About</button>
        <button className={current === 'contact' ? 'active' : ''} onClick={() => go('contact')}>Contact</button>
      </nav>
    </>
  )
}
