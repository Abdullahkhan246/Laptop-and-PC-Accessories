import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import { Cart, Wishlist } from './pages/CartPages'
import { Checkout, Login } from './pages/CheckoutLogin'
import { About, Contact, Policies } from './pages/StaticPages'

// Simple state-based routing: `view` decides which page is shown.
// No router library is needed, which also makes Netlify/Vercel deploy trivial.
export default function App() {
  const [view, setView] = useState({ name: 'home', category: 'All', id: null })
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState('')

  // Cart + wishlist are kept in localStorage so they survive page refresh.
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('aaa-cart')) || [] } catch { return [] }
  })
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('aaa-wishlist')) || [] } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('aaa-cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem('aaa-wishlist', JSON.stringify(wishlist)) }, [wishlist])

  function go(name, opts = {}) {
    setView({ name, category: opts.category ?? 'All', id: opts.id ?? null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showToast(text) {
    setToast(text)
    setTimeout(() => setToast(''), 2200)
  }

  function addToCart(product, qty = 1) {
    if (!product.inStock) return
    setCart((c) => {
      const found = c.find((i) => i.id === product.id)
      if (found) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      return [...c, { id: product.id, qty }]
    })
    showToast(`Added to cart: ${product.name.slice(0, 45)}...`)
  }

  function buyNow(product, qty = 1) {
    addToCart(product, qty)
    go('checkout')
  }

  function toggleWishlist(id) {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const shared = { go, addToCart, toggleWishlist, wishlist }

  return (
    <div className="app">
      <Header go={go} cartCount={cartCount} wishlistCount={wishlist.length} search={search} setSearch={setSearch} current={view.name} />

      {view.name === 'home' && <Home {...shared} />}
      {view.name === 'shop' && <Shop {...shared} search={search} initialCategory={view.category} />}
      {view.name === 'product' && <ProductDetail {...shared} id={view.id} buyNow={buyNow} />}
      {view.name === 'cart' && (
        <Cart
          go={go}
          cart={cart}
          setQty={(id, qty) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)))}
          removeFromCart={(id) => setCart((c) => c.filter((i) => i.id !== id))}
        />
      )}
      {view.name === 'wishlist' && <Wishlist go={go} wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />}
      {view.name === 'checkout' && <Checkout go={go} cart={cart} clearCart={() => setCart([])} />}
      {view.name === 'login' && <Login go={go} />}
      {view.name === 'about' && <About go={go} />}
      {view.name === 'contact' && <Contact />}
      {view.name === 'policies' && <Policies />}

      <Footer go={go} />
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
