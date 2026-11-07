import { useState } from 'react'
import { products, formatPrice } from '../data/products'
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi'

const emptyForm = { name: '', phone: '', email: '', address: '', city: '', payment: 'Cash on Delivery' }

// -------- Demo checkout: validates, shows success, clears the cart --------
export function Checkout({ go, cart, clearCart }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [orderNo, setOrderNo] = useState(null)

  const subtotal = cart.reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id)
    return p ? sum + p.price * item.qty : sum
  }, 0)
  const delivery = subtotal === 0 || subtotal >= 50000 ? 0 : 350
  const total = subtotal + delivery

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })) }

  function submit(e) {
    e.preventDefault()
    if (cart.length === 0) { setError('Your cart is empty. Add a product first.'); return }
    if (form.name.trim().length < 3) { setError('Please enter your full name.'); return }
    if (!/^0?3\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) { setError('Please enter a valid Pakistani mobile number (03xx-xxxxxxx).'); return }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setError('Please enter a valid email address.'); return }
    if (form.address.trim().length < 8) { setError('Please enter your complete delivery address.'); return }
    if (form.city.trim().length < 3) { setError('Please enter your city.'); return }
    setError('')
    setOrderNo('AAA-' + Math.floor(100000 + Math.random() * 900000))
    clearCart()
  }

  if (orderNo) {
    return (
      <main className="page">
        <div className="success-box">
          <FiCheckCircle className="success-icon" aria-hidden="true" />
          <h1>Order Placed — Thank You!</h1>
          <p>Your demo order number is <strong>{orderNo}</strong>.</p>
          <p className="muted">This is a demo checkout for a student assignment. No real order was placed, no payment was taken, and nothing will be delivered.</p>
          <button className="btn btn-primary" onClick={() => go('shop', { category: 'All' })}>Continue Shopping</button>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <h1>Checkout <span className="demo-tag">Demo</span></h1>
      <p className="muted">Demo checkout — fill the form and place a pretend order. Nothing is charged or saved on any server.</p>
      <div className="cart-layout">
        <form className="form-card" onSubmit={submit}>
          <label>Full Name<input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Abdullah Ahmed" /></label>
          <label>Phone Number<input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="03xx-xxxxxxx" /></label>
          <label>Email Address<input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" /></label>
          <label>Delivery Address<input value={form.address} onChange={(e) => set('address', e.target.value)} placeholder="House, street, area" /></label>
          <label>City<input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="e.g. Karachi" /></label>

          <fieldset>
            <legend>Payment Method (demo)</legend>
            {['Cash on Delivery', 'Debit / Credit Card (demo)'].map((m) => (
              <label key={m} className="radio">
                <input type="radio" name="payment" checked={form.payment === m} onChange={() => set('payment', m)} /> {m}
              </label>
            ))}
          </fieldset>

          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-hero full" type="submit">Place Demo Order</button>
        </form>

        <aside className="summary">
          <h3>Order Summary</h3>
          {cart.map((item) => {
            const p = products.find((x) => x.id === item.id)
            return p ? (
              <div className="sum-row" key={item.id}>
                <span className="checkout-product"><img src={p.image} alt="" loading="lazy" /> x{item.qty}</span>
                <strong>{formatPrice(p.price * item.qty)}</strong>
              </div>
            ) : null
          })}
          <div className="sum-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="sum-row"><span>Delivery</span><strong>{delivery === 0 ? 'Free' : formatPrice(delivery)}</strong></div>
          <div className="sum-row total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          <p className="muted small">Free delivery on orders of Rs. 50,000 and above.</p>
        </aside>
      </div>
    </main>
  )
}

// -------- Demo login / sign-up --------
export function Login({ go }) {
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' })
  const [msg, setMsg] = useState('')
  const [isError, setIsError] = useState(false)

  function set(k, v) { setForm((f) => ({ ...f, [k]: v })) }

  function submit(e) {
    e.preventDefault()
    if (mode === 'signup' && form.name.trim().length < 3) { setMsg('Please enter your full name.'); setIsError(true); return }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) { setMsg('Please enter a valid email address.'); setIsError(true); return }
    if (form.password.length < 6) { setMsg('Password must be at least 6 characters.'); setIsError(true); return }
    if (mode === 'signup' && form.phone.trim().length < 10) { setMsg('Please enter your phone number.'); setIsError(true); return }
    setIsError(false)
    setMsg(mode === 'signin'
      ? 'Welcome back! (Demo login — no real account exists, nothing was checked on a server.)'
      : 'Account created! (Demo sign-up — your details were not saved anywhere.)')
  }

  return (
    <main className="page narrow">
      <div className="form-card auth">
        <div className="auth-tabs">
          <button className={mode === 'signin' ? 'on' : ''} onClick={() => setMode('signin')}>Sign In</button>
          <button className={mode === 'signup' ? 'on' : ''} onClick={() => setMode('signup')}>Sign Up</button>
        </div>
        <form onSubmit={submit}>
          {mode === 'signup' && <label>Full Name<input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Your full name" /></label>}
          <label>Email Address<input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" /></label>
          <label>Password<input type="password" value={form.password} onChange={(e) => set('password', e.target.value)} placeholder="At least 6 characters" /></label>
          {mode === 'signup' && <label>Phone Number<input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="03xx-xxxxxxx" /></label>}
          {mode === 'signin' && <p className="muted small">Forgot password? In this demo, just sign up again — there is no real account to recover.</p>}
          {msg && <p className={isError ? 'form-error' : 'form-msg'}>{msg}</p>}
          <button className="btn btn-hero full" type="submit">{mode === 'signin' ? 'Sign In' : 'Create Account'}</button>
        </form>
        <p className="muted small center">
          {mode === 'signin' ? <>Don&apos;t have an account? <button className="link-btn" onClick={() => setMode('signup')}>Sign up</button></> : <>Already have an account? <button className="link-btn" onClick={() => setMode('signin')}>Sign in</button></>}
        </p>
        <button className="link-btn center" onClick={() => go('home')}><FiArrowLeft className="inline-icon" aria-hidden="true" /> Back to Home</button>
      </div>
    </main>
  )
}
