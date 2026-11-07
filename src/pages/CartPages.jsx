import { products, formatPrice } from '../data/products'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

// -------- Cart page --------
export function Cart({ go, cart, setQty, removeFromCart }) {
  const items = cart.map((item) => ({ ...item, product: products.find((p) => p.id === item.id) })).filter((i) => i.product)
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)

  if (items.length === 0) {
    return (
      <main className="page">
        <h1>Shopping Cart</h1>
        <div className="empty">
          <FiShoppingCart className="empty-icon" aria-hidden="true" />
          <p>Currently, you have no product in cart.</p>
          <button className="btn btn-primary" onClick={() => go('shop', { category: 'All' })}>Continue Shopping</button>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {items.map(({ product, qty }) => (
            <div className="cart-row" key={product.id}>
              <button className="cart-thumb" aria-label={`View ${product.name}`} onClick={() => go('product', { id: product.id })}>
                <img src={product.image} alt={product.name} loading="lazy" />
              </button>
              <div className="cart-info">
                <strong>{product.name}</strong>
                <span>{formatPrice(product.price)}</span>
              </div>
              <div className="qty">
                <button onClick={() => setQty(product.id, Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(product.id, qty + 1)}>+</button>
              </div>
              <strong className="cart-total">{formatPrice(product.price * qty)}</strong>
              <button className="remove" onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Order Summary</h3>
          <div className="sum-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="sum-row"><span>Delivery</span><strong>Calculated at checkout</strong></div>
          <button className="btn btn-hero full" onClick={() => go('checkout')}>Proceed to Checkout</button>
          <button className="btn btn-ghost dark full" onClick={() => go('shop', { category: 'All' })}>Continue Shopping</button>
        </aside>
      </div>
    </main>
  )
}

// -------- Wishlist page --------
export function Wishlist({ go, wishlist, toggleWishlist, addToCart }) {
  const items = products.filter((p) => wishlist.includes(p.id))

  if (items.length === 0) {
    return (
      <main className="page">
        <h1>My Wishlist</h1>
        <div className="empty">
          <FiHeart className="empty-icon" aria-hidden="true" />
          <p>Your wishlist is empty. Tap the heart on any product to save it here.</p>
          <button className="btn btn-primary" onClick={() => go('shop', { category: 'All' })}>Browse Products</button>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <h1>My Wishlist</h1>
      <div className="cart-items">
        {items.map((p) => (
          <div className="cart-row" key={p.id}>
            <button className="cart-thumb" aria-label={`View ${p.name}`} onClick={() => go('product', { id: p.id })}>
              <img src={p.image} alt={p.name} loading="lazy" />
            </button>
            <div className="cart-info"><strong>{p.name}</strong><span>{formatPrice(p.price)}</span></div>
            <button className="btn btn-primary" disabled={!p.inStock} onClick={() => addToCart(p, 1)}>{p.inStock ? 'Move to Cart' : 'Out of Stock'}</button>
            <button className="remove" onClick={() => toggleWishlist(p.id)}>Remove</button>
          </div>
        ))}
      </div>
    </main>
  )
}
