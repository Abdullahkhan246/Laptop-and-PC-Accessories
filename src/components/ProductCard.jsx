import { formatPrice } from '../data/products'
import { FiHeart, FiStar } from 'react-icons/fi'
import Tilt from './Tilt'

// One product card - used on Home, Shop and Related Products
export default function ProductCard({ product, go, addToCart, toggleWishlist, inWishlist }) {
  const saving = product.oldPrice ? product.oldPrice - product.price : 0

  return (
    <Tilt className="card-tilt" max={8}>
      <div className="product-card">
        <button className="card-visual" style={{ background: product.gradient }} aria-label={`View ${product.name}`} onClick={() => go('product', { id: product.id })}>
          <img className="product-photo" src={product.image} alt={product.name} loading="lazy" />
          {product.badge && <span className="badge">{product.badge}</span>}
          {!product.inStock && <span className="badge badge-stock">Out of Stock</span>}
        </button>

        <button
          className={`wish-btn ${inWishlist ? 'on' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={inWishlist}
        >
          <FiHeart className="wish-icon" aria-hidden="true" />
        </button>

        <div className="card-body">
          <span className="card-cat">{product.category} • {product.brand}</span>
          <button className="card-name" onClick={() => go('product', { id: product.id })}>{product.name}</button>
          <span className="stars" aria-label={`${product.rating} out of 5 stars`}>
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <FiStar key={index} className="rating-star" aria-hidden="true" />
            ))}
            <small>{product.rating}</small>
          </span>
          <div className="price-row">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
          {saving > 0 && <span className="saving">You save {formatPrice(saving)}</span>}
          <button className="btn btn-primary card-btn" disabled={!product.inStock} onClick={() => addToCart(product, 1)}>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Tilt>
  )
}
