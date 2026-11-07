import { useState } from 'react'
import { products, formatPrice } from '../data/products'
import { FiHeart, FiStar } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'

export default function ProductDetail({ id, go, addToCart, toggleWishlist, wishlist, buyNow }) {
  const product = products.find((p) => p.id === id) || products[0]
  const [qty, setQty] = useState(1)

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const saving = product.oldPrice ? product.oldPrice - product.price : 0
  const inWish = wishlist.includes(product.id)

  return (
    <main className="page">
      <p className="crumb">Home / {product.category} / {product.brand}</p>
      <div className="detail-layout">
        <div>
          <div className="detail-visual" style={{ background: product.gradient }}>
            <img className="detail-photo" src={product.image} alt={product.name} />
            {product.badge && <span className="badge">{product.badge}</span>}
            {!product.inStock && <span className="badge badge-stock">Out of Stock</span>}
          </div>
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <span className="stars big" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <FiStar key={index} className="rating-star" aria-hidden="true" />
            ))}
            <small>{product.rating} rating</small>
          </span>

          <div className="price-row big">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
          {saving > 0 && <p className="saving">You save {formatPrice(saving)}</p>}

          <ul className="highlights">
            {product.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <p className="muted">Estimated delivery: 2–5 days across Pakistan.</p>

          <div className="buy-row">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn btn-primary" disabled={!product.inStock} onClick={() => addToCart(product, qty)}>Add to Cart</button>
            <button className="btn btn-hero" disabled={!product.inStock} onClick={() => buyNow(product, qty)}>Buy Now</button>
            <button
              className={`wish-btn big ${inWish ? 'on' : ''}`}
              onClick={() => toggleWishlist(product.id)}
              aria-label={inWish ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={inWish}
            >
              <FiHeart className="wish-icon" aria-hidden="true" />
            </button>
          </div>

          <table className="meta-table">
            <tbody>
              <tr><td>Availability</td><td>{product.inStock ? 'In Stock' : 'Out of Stock'}</td></tr>
              <tr><td>Brand</td><td>{product.brand}</td></tr>
              <tr><td>Category</td><td>{product.category}</td></tr>
              <tr><td>Product ID</td><td>AAA-{String(product.id).padStart(4, '0')}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="specs">
        <h2>Product Specifications</h2>
        <table className="spec-table">
          <tbody>
            {Object.entries(product.specs).map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head"><h2>Related Products</h2></div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} go={go} addToCart={addToCart} toggleWishlist={toggleWishlist} inWishlist={wishlist.includes(p.id)} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
