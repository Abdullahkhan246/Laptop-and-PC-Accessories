import { useMemo, useState } from 'react'
import { products, CATEGORIES, formatPrice } from '../data/products'
import ProductCard from '../components/ProductCard'

// Shop / category listing with search, filters and sort - all client-side
export default function Shop({ go, addToCart, toggleWishlist, wishlist, search, initialCategory }) {
  const [category, setCategory] = useState(initialCategory || 'All')
  const [brand, setBrand] = useState('All')
  const [maxPrice, setMaxPrice] = useState(400000)
  const [sort, setSort] = useState('featured')

  // keep the page in sync when the user picks a category from nav / home
  const [lastInitial, setLastInitial] = useState(initialCategory)
  if (initialCategory !== lastInitial) {
    setLastInitial(initialCategory)
    setCategory(initialCategory || 'All')
  }

  const brands = useMemo(() => ['All', ...new Set(products.map((p) => p.brand))], [])

  const list = useMemo(() => {
    let out = products.filter((p) =>
      (category === 'All' || p.category === category) &&
      (brand === 'All' || p.brand === brand) &&
      p.price <= maxPrice &&
      (search.trim() === '' || (p.name + ' ' + p.brand + ' ' + p.category).toLowerCase().includes(search.toLowerCase()))
    )
    if (sort === 'low') out = [...out].sort((a, b) => a.price - b.price)
    if (sort === 'high') out = [...out].sort((a, b) => b.price - a.price)
    if (sort === 'name') out = [...out].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'new') out = [...out].sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.id - a.id)
    if (sort === 'featured') out = [...out].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
    return out
  }, [category, brand, maxPrice, sort, search])

  function clearAll() { setCategory('All'); setBrand('All'); setMaxPrice(400000); setSort('featured') }

  return (
    <main className="page">
      <p className="crumb">Home / {category === 'All' ? 'All Products' : category}</p>
      <h1>{category === 'All' ? 'All Products' : category}</h1>
      <p className="muted">Showing {list.length} of {products.length} products</p>

      <div className="shop-layout">
        <aside className="filters">
          <h3>Filters</h3>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            {CATEGORIES.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>

          <label>Brand</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {brands.map((b) => <option key={b}>{b}</option>)}
          </select>

          <label>Max price: {formatPrice(maxPrice)}</label>
          <input type="range" min="1000" max="400000" step="1000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />

          <button className="btn btn-ghost dark" onClick={clearAll}>Clear All Filters</button>
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <span>{list.length} result{list.length === 1 ? '' : 's'}{search && <> for “{search}”</>}</span>
            <label>Sort by:{' '}
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="low">Price (Low to High)</option>
                <option value="high">Price (High to Low)</option>
                <option value="name">Name A–Z</option>
                <option value="new">Newest</option>
              </select>
            </label>
          </div>

          {list.length === 0 ? (
            <div className="empty">
              <p>No products match your filters.</p>
              <button className="btn btn-primary" onClick={clearAll}>Clear Filters</button>
            </div>
          ) : (
            <div className="product-grid">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} go={go} addToCart={addToCart} toggleWishlist={toggleWishlist} inWishlist={wishlist.includes(p.id)} />
              ))}
            </div>
          )}
          <p className="muted small">* Product prices are subject to change. Demo catalogue for a student assignment.</p>
        </div>
      </div>
    </main>
  )
}
