/* =========================================================
   ZODI MENSWEAR — SCRIPT
   ========================================================= */

const WHATSAPP_NUMBER = '919999999999';

/* ---------------- PRODUCT DATA ---------------- */
const PRODUCTS = [
  {
    id: 'p01', name: 'Obsidian Wool Overcoat', category: 'Full Outfit', tag: 'trending',
    price: 12499, oldPrice: 17999, rating: 5, reviews: 128,
    fabric: '80% Wool, 20% Cashmere blend', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Obsidian Black', h: '#1a1a1a' }, { n: 'Charcoal Grey', h: '#4a4a4a' }],
    desc: 'A single-breasted overcoat cut from a heavyweight wool-cashmere blend, finished with horn buttons and a hand-stitched lapel roll. Built for cold evenings and boardrooms alike.',
    img1: 'img/1.jpeg',
    img2: 'img/1.1.jpeg'
  },
  {
    id: 'p02', name: 'Ivory Linen Two-Piece', category: 'Full Outfit', tag: 'new',
    price: 9899, oldPrice: 13499, rating: 4, reviews: 74,
    fabric: '100% Belgian Linen', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ n: 'Ivory', h: '#f2ead9' }, { n: 'Sand', h: '#c9b58c' }],
    desc: 'A breathable two-piece set in pure Belgian linen, unlined for warm-weather comfort with a relaxed drape that softens with every wear.',
    img1: 'img/2.jpeg',
    img2: 'img/2.2.jpeg'
  },
  {
    id: 'p03', name: 'Midnight Tuxedo Set', category: 'Full Outfit', tag: 'bestseller',
    price: 15999, oldPrice: 21999, rating: 5, reviews: 201,
    fabric: 'Wool-Mohair blend with satin lapel', sizes: ['M', 'L', 'XL'],
    colors: [{ n: 'Midnight Black', h: '#0d0d0d' }],
    desc: 'A peak-lapel tuxedo built for the evenings that matter — satin facing, silk-lined sleeves, and a fit tapered close to the body.',
    img1: 'img/3.jpeg',
    img2: 'img/3.3.jpeg'
  },
  {
    id: 'p04', name: 'Champagne Oxford Shirt', category: 'Shirts', tag: 'trending',
    price: 3299, oldPrice: 4599, rating: 5, reviews: 156,
    fabric: '100% Egyptian Cotton Oxford', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Champagne', h: '#e7d4a3' }, { n: 'White', h: '#f6f2e9' }],
    desc: 'A structured oxford shirt with mother-of-pearl buttons and a hand-rolled collar — the foundation piece of any tailored wardrobe.',
    img1: 'img/6.jpeg',
    img2: 'img/6.6.png'
  },
  {
    id: 'p05', name: 'Slate Poplin Slim Shirt', category: 'Shirts', tag: 'new',
    price: 2899, oldPrice: 3999, rating: 4, reviews: 63,
    fabric: '100% Cotton Poplin', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Slate Blue', h: '#4c5a68' }, { n: 'White', h: '#f6f2e9' }],
    desc: 'Crisp poplin in a slim silhouette, with a spread collar built to hold its shape through a full day of wear.',
    img1: 'img/9.jpeg',
    img2: 'img/9.9.png'
  },
  {
    id: 'p06', name: 'Charcoal Flannel Overshirt', category: 'Shirts', tag: 'bestseller',
    price: 4199, oldPrice: 5799, rating: 5, reviews: 98,
    fabric: 'Brushed Cotton Flannel', sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ n: 'Charcoal', h: '#3a3a3a' }, { n: 'Forest', h: '#3c4a3a' }],
    desc: 'A brushed flannel overshirt with a boxy, layerable cut — soft against the skin, sturdy enough to wear as an outer layer.',
    img1: 'img/13.jpeg',
    img2: 'img/13.13.jpeg'
  },
  {
    id: 'p07', name: 'Heavyweight Essential Tee', category: 'T-Shirts', tag: 'trending',
    price: 1499, oldPrice: 2199, rating: 5, reviews: 312,
    fabric: '240 GSM Combed Cotton', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ n: 'Black', h: '#141414' }, { n: 'Stone', h: '#a89f8d' }, { n: 'Ivory', h: '#f2ead9' }],
    desc: 'Our signature heavyweight tee — a dense 240 GSM cotton knit with a boxier fit and a collar built not to stretch out.',
    img1: 'img/7.jpeg',
    img2: 'img/7.7.png'
  },
  {
    id: 'p08', name: 'Gold-Stitch Pocket Tee', category: 'T-Shirts', tag: 'new',
    price: 1699, oldPrice: 2399, rating: 4, reviews: 47,
    fabric: '100% Supima Cotton', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Black', h: '#141414' }, { n: 'Olive', h: '#5c5a3f' }],
    desc: 'A supima cotton tee finished with a single chest pocket and a tonal gold-thread ZODI monogram at the hem.',
    img1: 'img/8.jpeg',
    img2: 'img/8.8.png'
  },
  {
    id: 'p09', name: 'Ribbed Crewneck Tee', category: 'T-Shirts', tag: 'bestseller',
    price: 1399, oldPrice: 1999, rating: 5, reviews: 219,
    fabric: 'Ribbed Cotton-Elastane', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'White', h: '#f6f2e9' }, { n: 'Black', h: '#141414' }],
    desc: 'A close-ribbed knit with a fitted crewneck that holds shape wash after wash — layers cleanly under shirting.',
    img1: 'img/11.jpeg',
    img2: 'img/11.11.jpeg'
  },
  {
    id: 'p10', name: 'Sable Wool Blazer Set', category: 'Full Outfit', tag: 'new',
    price: 13299, oldPrice: 18499, rating: 4, reviews: 51,
    fabric: 'Merino Wool blend', sizes: ['M', 'L', 'XL'],
    colors: [{ n: 'Sable Brown', h: '#4a3826' }],
    desc: 'A soft-shouldered blazer paired with matching trousers, in a fine merino weave that moves with you through the day.',
    img1: 'img/4.jpeg',
    img2: 'img/4.4.jpeg'
  },
  {
    id: 'p11', name: 'Ecru Linen Shirt', category: 'Shirts', tag: 'trending',
    price: 3099, oldPrice: 4299, rating: 5, reviews: 88,
    fabric: '100% European Linen', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Ecru', h: '#e6ddc7' }, { n: 'Sage', h: '#8a9179' }],
    desc: 'An airy linen shirt with a camp collar, cut generously for warm climates and left unlined for maximum breathability.',
    img1: 'img/12.jpeg',
    img2: 'img/12.12.jpeg'
  },
  {
    id: 'p12', name: 'Onyx Longline Tee', category: 'T-Shirts', tag: 'bestseller',
    price: 1599, oldPrice: 2299, rating: 4, reviews: 132,
    fabric: '220 GSM Cotton Jersey', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ n: 'Onyx Black', h: '#111111' }, { n: 'Grey', h: '#6b6b6b' }],
    desc: 'A longline silhouette with dropped shoulders and a curved hem, in a soft-washed jersey that only gets better with age.',
    img1: 'img/10.jpeg',
    img2: 'img/10.10.jpeg'
  }
  , {
    id: 'p013', name: 'Obsidian Wool Overcoat', category: 'Full Outfit', tag: 'trending',
    price: 12499, oldPrice: 17999, rating: 5, reviews: 128,
    fabric: '80% Wool, 20% Cashmere blend', sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ n: 'Obsidian Black', h: '#1a1a1a' }, { n: 'Charcoal Grey', h: '#4a4a4a' }],
    desc: 'A single-breasted overcoat cut from a heavyweight wool-cashmere blend, finished with horn buttons and a hand-stitched lapel roll. Built for cold evenings and boardrooms alike.',
    img1: 'img/5.jpeg',
    img2: 'img/5.5.jpeg'
  }
];

const REVIEWS = [
  { name: 'Armaan Kapoor', role: 'Creative Director, Mumbai', quote: 'The overcoat fits like it was cut for me alone. ZODI understands restraint — nothing shouts, everything holds up close.', rating: 5 },
  { name: 'Devraj Singh', role: 'Founder, Kaira & Co.', quote: 'I have stopped shopping anywhere else for shirting. The oxford weave alone is worth the price.', rating: 5 },
  { name: 'Rehan Mehta', role: 'Architect', quote: 'Ordered on WhatsApp, delivered in three days, fit perfectly. The kind of service you don\u2019t expect anymore.', rating: 4 },
  { name: 'Vikram Oberoi', role: 'Investment Banker', quote: 'The tuxedo held its shape through an entire wedding season. Genuinely heirloom quality.', rating: 5 },
  { name: 'Aditya Rao', role: 'Photographer', quote: 'Their heavyweight tee replaced four other brands in my rotation. Simple, but done exactly right.', rating: 5 }
];

const FAQS = [
  { q: 'How do I find my correct size?', a: 'Each product page lists a size chart with chest, shoulder, and length measurements. If you\u2019re between sizes, message our concierge on WhatsApp with your measurements and we\u2019ll recommend the right fit.' },
  { q: 'Do you offer Cash on Delivery?', a: 'Yes — Cash on Delivery is available across India alongside UPI and card payments. You can also place and confirm your order directly through WhatsApp.' },
  { q: 'What is your exchange policy?', a: 'We offer a 7-day size exchange window from the date of delivery, free of cost, with no restocking fee. Items must be unworn with tags intact.' },
  { q: 'How long does delivery take?', a: 'Most orders ship within 24-48 hours and arrive within 3-6 business days depending on your location. Reserve Line pieces are made to order and may take 2-3 weeks.' },
  { q: 'Can I place a custom or bespoke order?', a: 'Yes. Reach out through our contact section or WhatsApp concierge to discuss fabric, fit, and monogramming for a fully bespoke piece.' }
];

/* ---------------- STATE ---------------- */
let wishlist = new Set();
let currentFilter = 'All';
let currentReviewIndex = 0;
let modalState = { product: null, image: 0, size: null, color: null, qty: 1 };

/* ---------------- UTIL ---------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const formatPrice = n => '\u20b9' + n.toLocaleString('en-IN');
const stars = n => '\u2605'.repeat(n) + '\u2606'.repeat(5 - n);

function buildWhatsAppLink(product, size, color, qty) {
  const text = `Hello ZODI, I want to order:\n${product.name}\nPrice: ${formatPrice(product.price)}\nSize: ${size || 'N/A'}\nColor: ${color || 'N/A'}\nQty: ${qty || 1}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ---------------- PRODUCT CARD RENDER ---------------- */
function discountPct(p) { return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100); }

function productCardHTML(p) {
  const wished = wishlist.has(p.id);
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="card-media" data-open="${p.id}">
      <img class="img-main" src="${p.img1}" alt="${p.name}" loading="lazy">
      <img class="img-hover" src="${p.img2}" alt="${p.name} alternate view" loading="lazy">
      <span class="card-badge">-${discountPct(p)}%</span>
      <button class="card-wishlist ${wished ? 'active' : ''}" data-wish="${p.id}" aria-label="Add to wishlist">
        <svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10.2-9.1C.2 8.9 1.6 5 5.3 5c2 0 3.4 1 4.7 2.6C11.3 6 12.7 5 14.7 5c3.7 0 5.1 3.9 3.5 6.9C19.5 16.4 12 21 12 21z"/></svg>
      </button>
      <button class="card-quickview" data-open="${p.id}">Quick View</button>
    </div>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h3 class="card-name">${p.name}</h3>
      <div class="card-rating">${stars(p.rating)} <span>(${p.reviews})</span></div>
      <div class="card-price">
        <span class="price-now">${formatPrice(p.price)}</span>
        <span class="price-old">${formatPrice(p.oldPrice)}</span>
      </div>
      <a class="card-buy" target="_blank" rel="noopener" href="${buildWhatsAppLink(p, p.sizes[0], p.colors[0].n, 1)}">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
        Buy on WhatsApp
      </a>
    </div>
  </article>`;
}

function renderGrid(el, list) {
  el.innerHTML = list.map(productCardHTML).join('');
}

function renderAllGrids() {
  const trendGrid = $('#trendingGrid');
  const filtered = currentFilter === 'All' ? PRODUCTS.filter(p => p.tag === 'trending') : PRODUCTS.filter(p => p.category === currentFilter);
  renderGrid(trendGrid, filtered.length ? filtered : PRODUCTS.slice(0, 4));
  renderGrid($('#newGrid'), PRODUCTS.filter(p => p.tag === 'new'));
  renderGrid($('#bestGrid'), PRODUCTS.filter(p => p.tag === 'bestseller'));
  bindGridEvents();
}

function bindGridEvents() {
  $$('[data-open]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = el.getAttribute('data-open');
      openModal(id);
    });
  });
  $$('[data-wish]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.getAttribute('data-wish');
      toggleWishlist(id, el);
    });
  });
}

function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('active');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.classList.add('active');
    showToast('Added to wishlist');
  }
  $('#wishlistCount').textContent = wishlist.size;
}

/* ---------------- FILTER BAR ---------------- */
function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderAllGrids();
    });
  });
  $$('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.getAttribute('data-filter');
      currentFilter = filter;
      $$('.filter-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === filter));
      renderAllGrids();
      $('#shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------------- MODAL ---------------- */
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  modalState = { product, image: 0, size: product.sizes[Math.floor(product.sizes.length / 2)], color: product.colors[0].n, qty: 1 };
  renderModal();
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function relatedProducts(product) {
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
}

function renderModal() {
  const { product, image, size, color, qty } = modalState;
  const images = [product.img1, product.img2];
  const related = relatedProducts(product);

  $('#modalBody').innerHTML = `
    <div class="modal-gallery">
      <div class="modal-gallery-main"><img src="${images[image]}" alt="${product.name}"></div>
      <div class="modal-thumbs">
        ${images.map((src, i) => `<img src="${src}" class="${i === image ? 'active' : ''}" data-thumb="${i}" alt="${product.name} view ${i + 1}">`).join('')}
      </div>
    </div>
    <div class="modal-details">
      <span class="modal-cat">${product.category}</span>
      <h2>${product.name}</h2>
      <div class="modal-rating">${stars(product.rating)} <span>(${product.reviews} reviews)</span></div>
      <div class="modal-price">
        <span class="price-now">${formatPrice(product.price)}</span>
        <span class="price-old">${formatPrice(product.oldPrice)}</span>
        <span class="card-badge">-${discountPct(product)}%</span>
      </div>
      <p class="modal-desc">${product.desc}</p>

      <div class="modal-meta">
        <div><span>Fabric</span><strong>${product.fabric}</strong></div>
      </div>

      <div class="option-group">
        <span class="option-label">Size</span>
        <div class="size-options">
          ${product.sizes.map(s => `<button class="size-opt ${s === size ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
        </div>
      </div>

      <div class="option-group">
        <span class="option-label">Color — ${color}</span>
        <div class="color-options">
          ${product.colors.map(c => `<button class="color-opt ${c.n === color ? 'active' : ''}" data-color="${c.n}" style="background:${c.h}" aria-label="${c.n}"></button>`).join('')}
        </div>
      </div>

      <div class="option-group">
        <span class="option-label">Quantity</span>
        <div class="qty-selector">
          <button data-qty="minus">&minus;</button>
          <span id="qtyValue">${qty}</span>
          <button data-qty="plus">+</button>
        </div>
      </div>

      <div class="modal-actions">
        <a class="btn btn-gold" target="_blank" rel="noopener" id="modalBuyBtn" href="${buildWhatsAppLink(product, size, color, qty)}">Buy on WhatsApp</a>
        <button class="btn btn-ghost" id="modalWishBtn">${wishlist.has(product.id) ? '\u2665 Wishlisted' : '\u2661 Add to Wishlist'}</button>
      </div>

      ${related.length ? `
      <div class="related">
        <p class="related-title">You May Also Like</p>
        <div class="related-grid">
          ${related.map(r => `
            <div class="related-card" data-related="${r.id}">
              <img src="${r.img1}" alt="${r.name}" loading="lazy">
              <strong>${r.name}</strong>
              <p>${formatPrice(r.price)}</p>
            </div>`).join('')}
        </div>
      </div>` : ''}
    </div>
  `;

  bindModalEvents();
}

function bindModalEvents() {
  $$('[data-thumb]').forEach(el => {
    el.addEventListener('click', () => { modalState.image = parseInt(el.getAttribute('data-thumb')); renderModal(); });
  });
  $$('[data-size]').forEach(el => {
    el.addEventListener('click', () => { modalState.size = el.getAttribute('data-size'); renderModal(); });
  });
  $$('[data-color]').forEach(el => {
    el.addEventListener('click', () => { modalState.color = el.getAttribute('data-color'); renderModal(); });
  });
  const qtyBtns = $$('[data-qty]');
  qtyBtns.forEach(el => {
    el.addEventListener('click', () => {
      if (el.getAttribute('data-qty') === 'plus') modalState.qty = Math.min(10, modalState.qty + 1);
      else modalState.qty = Math.max(1, modalState.qty - 1);
      $('#qtyValue').textContent = modalState.qty;
      $('#modalBuyBtn').href = buildWhatsAppLink(modalState.product, modalState.size, modalState.color, modalState.qty);
    });
  });
  const wishBtn = $('#modalWishBtn');
  if (wishBtn) {
    wishBtn.addEventListener('click', () => {
      const id = modalState.product.id;
      const cardBtn = document.querySelector(`[data-wish="${id}"]`);
      toggleWishlist(id, cardBtn || { classList: { add() { }, remove() { } } });
      renderModal();
    });
  }
  $$('[data-related]').forEach(el => {
    el.addEventListener('click', () => { openModal(el.getAttribute('data-related')); });
  });
}

/* ---------------- REVIEWS SLIDER ---------------- */
function initReviews() {
  const track = $('#reviewsTrack');
  const dotsWrap = $('#reviewDots');
  track.innerHTML = REVIEWS.map(r => `
    <div class="review-slide">
      <div class="review-card">
        <div class="review-stars">${stars(r.rating)}</div>
        <p class="review-quote">&ldquo;${r.quote}&rdquo;</p>
        <p class="review-name">${r.name}</p>
        <p class="review-role">${r.role}</p>
      </div>
    </div>`).join('');
  dotsWrap.innerHTML = REVIEWS.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></button>`).join('');

  function goTo(i) {
    currentReviewIndex = (i + REVIEWS.length) % REVIEWS.length;
    track.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
    $$('.dot').forEach((d, idx) => d.classList.toggle('active', idx === currentReviewIndex));
  }
  $('#reviewPrev').addEventListener('click', () => goTo(currentReviewIndex - 1));
  $('#reviewNext').addEventListener('click', () => goTo(currentReviewIndex + 1));
  $$('.dot').forEach(d => d.addEventListener('click', () => goTo(parseInt(d.getAttribute('data-dot')))));

  let auto = setInterval(() => goTo(currentReviewIndex + 1), 5500);
  const slider = $('.reviews-slider');
  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(currentReviewIndex + 1), 5500); });
}

/* ---------------- FAQ ---------------- */
function initFAQ() {
  $('#faqList').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-q"><span>${f.q}</span><span class="plus">+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');

  $$('.faq-item').forEach(item => {
    $('.faq-q', item).addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      $$('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ---------------- TOAST ---------------- */
let toastTimer;
function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------------- NAVBAR / SCROLL ---------------- */
function initScroll() {
  const navbar = $('#navbar');
  const progressBar = $('#scrollProgressBar');
  const backToTop = $('#backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    navbar.classList.toggle('scrolled', scrolled > 40);
    backToTop.classList.toggle('show', scrolled > 500);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#scrollCue').addEventListener('click', () => $('#categories').scrollIntoView({ behavior: 'smooth' }));
}

function initMobileMenu() {
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ---------------- REVEAL ON SCROLL ---------------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach(el => observer.observe(el));
}

/* ---------------- FORMS ---------------- */
function initForms() {
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent — our concierge will reply shortly.');
    e.target.reset();
  });
  $('#newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Subscribed — welcome to ZODI.');
    e.target.reset();
  });
}

/* ---------------- MODAL BINDINGS ---------------- */
function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ---------------- LOADER ---------------- */
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => $('#loader').classList.add('hidden'), 500);
  });
  // fallback in case load event is delayed
  setTimeout(() => $('#loader').classList.add('hidden'), 2500);
}

/* ---------------- INIT ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  renderAllGrids();
  initFilters();
  initReviews();
  initFAQ();
  initScroll();
  initMobileMenu();
  initModal();
  initForms();
  initLoader();
  initReveal();
});
