// =========================
// KNG STORE - MAIN SCRIPT
// =========================

// =========================
// PRODUCTS DATA HAS BEEN MOVED TO products.js
// =========================


// =========================
// RENDER PRODUCT CARDS
// =========================
function renderProductCards(productsToRender = PRODUCTS) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 15px; display: block; opacity: 0.5;"></i>
        <h3 style="margin-bottom: 10px;">Không tìm thấy sản phẩm nào</h3>
        <p>Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
        <button class="primary-btn" style="margin-top: 15px;" onclick="resetFilters()">Xóa bộ lọc</button>
      </div>
    `;
    updateResultsCount(0);
    return;
  }

  grid.innerHTML = productsToRender.map((p) => {
    const isOutOfStock = p.stock === 0;
    const oldPriceHtml = p.oldPriceRaw 
      ? `<span class="old-price" style="text-decoration: line-through; font-size: 0.85em; color: var(--text-muted); margin-left: 8px;">${formatPrice(p.oldPriceRaw)}</span>` 
      : '';
    const discountBadgeHtml = p.oldPriceRaw 
      ? `<span class="product-discount-badge" style="position: absolute; top: 12px; left: 12px; background: var(--accent); color: white; padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 700; z-index: 2;">-${Math.round((1 - p.priceRaw / p.oldPriceRaw) * 100)}%</span>` 
      : '';
    const outOfStockBadgeHtml = isOutOfStock 
      ? `<div class="out-of-stock-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 3;">
           <span style="background: rgba(0,0,0,0.8); color: white; padding: 8px 16px; border: 1px solid var(--accent); font-weight: 600; transform: rotate(-15deg); letter-spacing: 1px;">HẾT HÀNG</span>
         </div>` 
      : '';
      
    const ratingHtml = `<div class="rating" style="display: flex; align-items: center; gap: 5px;">
                          <span>${p.rating}</span>
                          <span style="color: var(--text-muted); font-size: 0.8rem;">(${p.reviews})</span>
                        </div>`;

    return `
    <div class="product-card" onclick="openProductModal(${p.id})">
      ${discountBadgeHtml}
      ${!p.oldPriceRaw && p.badge ? `<span class="product-badge" style="z-index: 2;">${p.badge}</span>` : ''}
      <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius-sm) var(--radius-sm) 0 0;">
        ${outOfStockBadgeHtml}
        <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div class="content" style="display: flex; flex-direction: column; height: 100%;">
        <p class="product-category">${p.brand} • ${p.category}</p>
        <h3 style="flex-grow: 1; margin-bottom: 5px;">${p.name}</h3>
        ${ratingHtml}
        <p class="price" style="margin-top: auto; padding-top: 10px;">${p.price}${oldPriceHtml}</p>
        
        <div class="card-actions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 15px;">
          <button class="view-detail-btn" onclick="event.stopPropagation(); openProductModal(${p.id})" style="width: 100%; padding: 8px; background: transparent; border: 1px solid var(--border); color: var(--text); border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition);">
            <i class="fa-solid fa-eye"></i> Chi tiết
          </button>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id}, 1)" ${isOutOfStock ? 'disabled' : ''} style="width: 100%; padding: 8px; background: ${isOutOfStock ? 'var(--bg-card)' : 'var(--primary)'}; border: 1px solid ${isOutOfStock ? 'var(--border)' : 'var(--primary)'}; color: ${isOutOfStock ? 'var(--text-muted)' : '#000'}; border-radius: var(--radius-sm); cursor: ${isOutOfStock ? 'not-allowed' : 'pointer'}; transition: var(--transition); font-weight: 600;">
            <i class="fa-solid fa-cart-plus"></i> Thêm
          </button>
        </div>
      </div>
    </div>
  `}).join("");

  attachCardObserver();
  updateResultsCount(productsToRender.length);
}

function renderSkeletonCards(count = 6) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  
  grid.innerHTML = Array(count).fill(0).map(() => `
    <div class="product-card skeleton-card" style="pointer-events: none;">
      <div class="skeleton-img" style="width: 100%; aspect-ratio: 4/3; background: var(--bg-hover); animation: pulse 1.5s infinite;"></div>
      <div class="content">
        <div style="height: 12px; width: 40%; background: var(--bg-hover); margin-bottom: 8px; border-radius: 4px; animation: pulse 1.5s infinite;"></div>
        <div style="height: 20px; width: 80%; background: var(--bg-hover); margin-bottom: 8px; border-radius: 4px; animation: pulse 1.5s infinite;"></div>
        <div style="height: 16px; width: 30%; background: var(--bg-hover); margin-bottom: 12px; border-radius: 4px; animation: pulse 1.5s infinite;"></div>
        <div style="height: 24px; width: 50%; background: var(--bg-hover); margin-bottom: 15px; border-radius: 4px; animation: pulse 1.5s infinite;"></div>
        <div style="display: flex; gap: 8px;">
          <div style="height: 36px; flex: 1; background: var(--bg-hover); border-radius: var(--radius-sm); animation: pulse 1.5s infinite;"></div>
          <div style="height: 36px; flex: 1; background: var(--bg-hover); border-radius: var(--radius-sm); animation: pulse 1.5s infinite;"></div>
        </div>
      </div>
    </div>
  `).join("");
}

function updateResultsCount(count) {
  let counter = document.getElementById("resultsCounter");
  if (!counter) {
    const filtersWrap = document.querySelector('.product-filters');
    if (filtersWrap) {
      counter = document.createElement("div");
      counter.id = "resultsCounter";
      counter.style.cssText = "margin-top: 15px; font-size: 0.9rem; color: var(--text-muted); text-align: center; width: 100%;";
      filtersWrap.after(counter);
    }
  }
  if (counter) {
    counter.textContent = `Tìm thấy ${count} sản phẩm`;
  }
}

function attachCardObserver() {
  const cards = document.querySelectorAll(".product-card:not(.skeleton-card)");
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      observer.observe(card);
    });
  }
}

// =========================
// SEARCH & FILTER
// =========================
let currentBrandFilter = 'all';
let currentSearchTerm = '';
let searchTimeout = null;

function initSearchAndFilter() {
  const searchInput = document.querySelector('.search-bar');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearchTerm = e.target.value.toLowerCase().trim();
        applyFilters();
      }, 300);
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBrandFilter = btn.getAttribute('data-brand') || 'all';
        applyFilters();
      });
    });
  }
  
  // Handle mega menu brand links
  const brandLinks = document.querySelectorAll('.mega-links a[data-filter-brand]');
  brandLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const brand = link.getAttribute('data-filter-brand');
      
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      currentBrandFilter = brand;
      
      filterBtns.forEach(b => {
        const btnBrand = b.getAttribute('data-brand');
        if (btnBrand === brand) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      
      applyFilters();
    });
  });
}

function applyFilters() {
  let filtered = PRODUCTS;
  
  if (currentBrandFilter !== 'all') {
    filtered = filtered.filter(p => p.brand.toLowerCase() === currentBrandFilter.toLowerCase());
  }
  
  if (currentSearchTerm !== '') {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(currentSearchTerm) ||
      p.category.toLowerCase().includes(currentSearchTerm) ||
      p.brand.toLowerCase().includes(currentSearchTerm)
    );
  }
  
  renderProductCards(filtered);
}

function resetFilters() {
  currentBrandFilter = 'all';
  currentSearchTerm = '';
  
  const searchInput = document.querySelector('.search-bar');
  if (searchInput) searchInput.value = '';
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(b => {
    if (b.getAttribute('data-brand') === 'all') {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  
  applyFilters();
}

// =========================
// PRODUCT DETAIL MODAL
// =========================
function openProductModal(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  const isOutOfStock = p.stock === 0;

  document.getElementById("pdBadge").textContent = p.badge || "";
  document.getElementById("pdBadge").style.display = p.badge && !p.oldPriceRaw ? "inline-block" : "none";
  
  document.getElementById("pdImage").src = p.image;
  document.getElementById("pdImage").alt = p.imageAlt;
  document.getElementById("pdCategory").innerHTML = `${p.brand} &bull; ${p.category}`;
  document.getElementById("pdName").textContent = p.name;
  document.getElementById("pdRating").innerHTML = `${p.rating} <span style="color: var(--text-muted); font-size: 0.9em;">(${p.reviews} đánh giá)</span>`;
  
  const oldPriceHtml = p.oldPriceRaw 
    ? `<span style="text-decoration: line-through; font-size: 0.7em; color: var(--text-muted); margin-left: 10px; font-weight: 400;">${formatPrice(p.oldPriceRaw)}</span>` 
    : '';
  document.getElementById("pdPrice").innerHTML = `${p.price}${oldPriceHtml}`;
  document.getElementById("pdDesc").textContent = p.description;

  const specsList = document.getElementById("pdSpecs");
  specsList.innerHTML = p.specs.map((s) => `<li><i class="fa-solid fa-check"></i>${s}</li>`).join("");

  const addBtn = document.getElementById("pdAddCart");
  const buyNowBtn = document.getElementById("pdBuyNow");
  
  // Stock indicator
  let stockHtml = "";
  if (isOutOfStock) {
    stockHtml = `<div style="color: var(--accent); margin-top: 15px; font-weight: 600; font-size: 0.9rem;"><i class="fa-solid fa-xmark-circle"></i> Sản phẩm đã hết hàng</div>`;
    addBtn.disabled = true;
    addBtn.style.opacity = "0.5";
    addBtn.style.cursor = "not-allowed";
    if (buyNowBtn) {
      buyNowBtn.disabled = true;
      buyNowBtn.style.opacity = "0.5";
      buyNowBtn.style.cursor = "not-allowed";
    }
  } else {
    const stockClass = p.stock <= 5 ? "color: #ffcc00;" : "color: #22c55e;";
    const stockIcon = p.stock <= 5 ? "fa-exclamation-triangle" : "fa-check-circle";
    stockHtml = `<div style="${stockClass} margin-top: 15px; font-weight: 600; font-size: 0.9rem;"><i class="fa-solid ${stockIcon}"></i> Còn ${p.stock} sản phẩm trong kho</div>`;
    
    addBtn.disabled = false;
    addBtn.style.opacity = "1";
    addBtn.style.cursor = "pointer";
    addBtn.onclick = function () {
      addToCart(p.id, 1);
    };

    if (buyNowBtn) {
      buyNowBtn.disabled = false;
      buyNowBtn.style.opacity = "1";
      buyNowBtn.style.cursor = "pointer";
      buyNowBtn.onclick = function () {
        addToCart(p.id, 1);
        closeProductModal();
        showCartItems();
      };
    }
  }
  
  let stockEl = document.getElementById("pdStock");
  if (!stockEl) {
    stockEl = document.createElement("div");
    stockEl.id = "pdStock";
    addBtn.parentElement.parentNode.insertBefore(stockEl, addBtn.parentElement);
  }
  stockEl.innerHTML = stockHtml;

  const modal = document.getElementById("productDetailModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productDetailModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on overlay click
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productDetailModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeProductModal();
    });
  }

  const pdClose = document.getElementById("pdClose");
  if (pdClose) {
    pdClose.addEventListener("click", closeProductModal);
  }

  // Render components
  renderHeroBanner();
  renderSkeletonCards();
  setTimeout(() => {
    renderProductCards();
    initSearchAndFilter();
  }, 600);
});


// =========================
// HERO BANNER / SLIDER
// =========================
let currentSlide = 0;
let totalSlides = 0;
let autoPlayInterval;

function renderHeroBanner() {
  const heroSlider = document.getElementById("heroSlider");
  const heroDots = document.getElementById("heroDots");
  if (!heroSlider || !heroDots) return;

  const heroProducts = PRODUCTS.filter(p => p.isHero);
  totalSlides = heroProducts.length;

  heroSlider.innerHTML = heroProducts.map((p, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image: ${p.heroBg};">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">${p.name}</h1>
          <p class="hero-subtitle">${p.heroSubtitle}</p>
          <p class="hero-description">${p.heroDesc}</p>
          <a href="#" class="hero-btn" onclick="event.preventDefault(); openProductModal(${p.id})">
            <span>Khám Phá</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("");

  heroDots.innerHTML = heroProducts.map((_, index) => `
    <span class="hero-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
  `).join("");
}

// Initialize Slider
function initSlider() {
  showSlide(currentSlide);
  autoPlaySlider();

  // Reset auto-play on user interaction
  document.addEventListener("click", function (e) {
    if (e.target.closest(".hero-nav-btn, .hero-dot")) {
      clearInterval(autoPlayInterval);
      autoPlaySlider();
    }
  });
}

// Show Specific Slide
function showSlide(n) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  // Normalize slide index
  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = n;
  }

  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current slide and dot
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Next Slide
function nextSlide() {
  showSlide(++currentSlide);
}

// Previous Slide
function prevSlide() {
  showSlide(--currentSlide);
}

// Go to Specific Slide
function goToSlide(n) {
  showSlide(n);
}

// Auto-play Slider
function autoPlaySlider() {
  autoPlayInterval = setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 2000); // Change slide every 2 seconds
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initSlider();
  // Init Login form behaviors
  if (typeof initLoginForm === "function") {
    initLoginForm();
  }
});

// =========================
// PASSWORD STRENGTH LOGIC
// =========================
function initPasswordStrength() {
  const regPassword = document.getElementById("regPassword");
  const container = document.getElementById("pwdStrengthContainer");
  const fill = document.getElementById("pwdStrengthFill");
  const text = document.getElementById("pwdStrengthText");
  
  if (!regPassword || !container) return;

  regPassword.addEventListener("input", function() {
    const val = this.value;
    if (val.length === 0) {
      container.style.display = "none";
      return;
    }
    container.style.display = "flex";

    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    let width = "0%";
    let color = "#ff3333";
    let status = "Rất yếu";

    if (score === 1 || score === 2) {
      width = "40%";
      color = "#ff9933";
      status = "Yếu";
    } else if (score === 3) {
      width = "60%";
      color = "#ffcc00";
      status = "Trung bình";
    } else if (score === 4) {
      width = "80%";
      color = "#99cc33";
      status = "Khá";
    } else if (score >= 5) {
      width = "100%";
      color = "#22c55e";
      status = "Mạnh";
    } else if (score === 0 && val.length > 0) {
      width = "20%";
      color = "#ff3333";
      status = "Rất yếu";
    }

    fill.style.width = width;
    fill.style.backgroundColor = color;
    text.textContent = status;
    text.style.color = color;
  });
}


// =========================
// CART DATA
// =========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================
// UPDATE CART COUNT
// =========================
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
  }
}

// =========================
// SHOW NOTIFICATION
// =========================
function showNotification(message, forceType = null) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.classList.remove("show", "success", "error");

  let type = forceType;
  if (!type) {
    const msgLower = message.toLowerCase();
    if (message.includes("❌") || message.includes("⚠️") || msgLower.includes("thất bại") || msgLower.includes("trống") || msgLower.includes("không hợp lệ") || msgLower.includes("chưa") || msgLower.includes("lỗi")) {
      type = "error";
    } else {
      type = "success";
    }
  }

  notification.classList.add(type);
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2500);
}

// =========================
// ADD TO CART
// =========================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showNotification(`❌ ${product.name} đã hết hàng!`, "error");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      showNotification(`⚠️ Chỉ còn ${product.stock} sản phẩm trong kho!`, "error");
      return;
    }
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(`🛒 ${product.name} đã được thêm vào giỏ hàng!`);
}

function updateCartQuantity(productId, change) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    const product = PRODUCTS.find(p => p.id === productId);
    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    if (product && newQuantity > product.stock) {
      showNotification(`⚠️ Chỉ còn ${product.stock} sản phẩm trong kho!`, "error");
      return;
    }

    cart[itemIndex].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCartItems(); // Re-render cart
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  if (cart.length === 0) {
    document.getElementById("checkoutModal").classList.remove("show");
    showNotification("Giỏ hàng của bạn đã trống");
  } else {
    showCartItems();
  }
}

// =========================
// PRICE HELPERS
// =========================
function parsePrice(priceText) {
  if (typeof priceText === "number") return priceText;
  return Number(priceText.replace(/[^\d]/g, "")) || 0;
}

function formatPrice(number) {
  return number.toLocaleString("vi-VN") + "đ";
}

// Track coupon discount globally
let couponDiscount = 0; // percentage e.g. 10 = 10%

function showCartItems() {
  if (cart.length === 0) {
    showNotification("Giỏ hàng của bạn đang trống.");
    return;
  }

  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");

  if (!checkoutModal) return;

  // Reset coupon state when re-opening cart
  couponDiscount = 0;
  const couponCode = document.getElementById("couponCode");
  const couponMessage = document.getElementById("couponMessage");
  const discountRow = document.querySelector(".discount-row");
  if (couponCode) couponCode.value = "";
  if (couponMessage) {
    couponMessage.textContent = "";
    couponMessage.className = "coupon-message";
  }
  if (discountRow) discountRow.style.display = "none";

  // Populate summary list
  if (checkoutItems) {
    checkoutItems.innerHTML = "";

    cart.forEach((item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return; // In case product was removed from DB

      checkoutItems.innerHTML += `
        <div class="checkout-summary-item">
          <img class="summary-item-img" src="${product.image}" alt="${product.imageAlt}" />
          <div class="summary-item-info">
            <h4>${product.name}</h4>
            <div class="qty-control">
              <span class="qty-label">Số lượng:</span>
              <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
              <button type="button" class="remove-item-btn" onclick="removeFromCart(${item.id})">✕ Xóa</button>
            </div>
          </div>
          <span class="summary-item-price">${formatPrice(product.priceRaw * item.quantity)}</span>
        </div>
      `;
    });

    // Update subtotal and total display
    updateCheckoutPricing();
  }

  checkoutModal.classList.add("show");

  // Load Vietnam provinces when modal opens
  loadProvinces();

  // Init payment method switching
  initPaymentTabs();

  // Init installment calculator
  initInstallmentCalc();

  // Init coupon engine
  initCouponEngine();

  // Init e-wallet selector
  initEwalletSelector();
}

// =========================
// UPDATE CHECKOUT PRICING
// =========================
function updateCheckoutPricing() {
  let subtotal = 0;
  cart.forEach((item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      subtotal += product.priceRaw * item.quantity;
    }
  });

  const discountAmount = Math.round(subtotal * (couponDiscount / 100));
  const total = subtotal - discountAmount;

  const subtotalEl = document.getElementById("checkoutSubtotal");
  const totalEl = document.getElementById("checkoutTotal");
  const discountEl = document.getElementById("checkoutDiscount");
  const couponPercentEl = document.getElementById("couponPercent");
  const discountRow = document.querySelector(".discount-row");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (couponDiscount > 0) {
    if (discountEl) discountEl.textContent = "-" + formatPrice(discountAmount);
    if (couponPercentEl) couponPercentEl.textContent = couponDiscount + "%";
    if (discountRow) discountRow.style.display = "flex";
  }

  // Update installment calc if active
  updateInstallmentDisplay(total);
  // Update VietQR if visible
  updateVietQR(total);

  return total;
}

// =========================
// VIETNAM ADDRESS API
// =========================
async function handleProvinceChange() {
  const provinceSelect = document.getElementById("checkoutProvince");
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!provinceSelect || !districtSelect || !wardSelect) return;

  const code = provinceSelect.value;
  districtSelect.innerHTML =
    '<option value="">-- Chọn Quận / Huyện --</option>';
  wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
  districtSelect.disabled = true;
  wardSelect.disabled = true;

  if (!code) return;

  districtSelect.innerHTML = '<option value="">Đang tải...</option>';

  try {
    const res = await fetch(
      `https://provinces.open-api.vn/api/p/${code}?depth=2`,
    );
    if (!res.ok) throw new Error("API error");
    const pData = await res.json();

    districtSelect.innerHTML =
      '<option value="">-- Chọn Quận / Huyện --</option>';
    pData.districts.forEach((d) => {
      const o = document.createElement("option");
      o.value = d.code;
      o.textContent = d.name;
      districtSelect.appendChild(o);
    });
    districtSelect.disabled = false;
  } catch (error) {
    console.error("Error loading districts:", error);
    districtSelect.innerHTML =
      '<option value="">Lỗi tải dữ liệu - thử lại</option>';
    districtSelect.disabled = false;
  }
}

async function handleDistrictChange() {
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!districtSelect || !wardSelect) return;

  const dCode = districtSelect.value;
  wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
  wardSelect.disabled = true;

  if (!dCode) return;

  wardSelect.innerHTML = '<option value="">Đang tải...</option>';

  try {
    const res = await fetch(
      `https://provinces.open-api.vn/api/d/${dCode}?depth=2`,
    );
    if (!res.ok) throw new Error("API error");
    const dData = await res.json();

    wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
    dData.wards.forEach((w) => {
      const o = document.createElement("option");
      o.value = w.code;
      o.textContent = w.name;
      wardSelect.appendChild(o);
    });
    wardSelect.disabled = false;
  } catch (error) {
    console.error("Error loading wards:", error);
    wardSelect.innerHTML =
      '<option value="">Lỗi tải dữ liệu - thử lại</option>';
    wardSelect.disabled = false;
  }
}

async function loadProvinces() {
  const select = document.getElementById("checkoutProvince");
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!select) return;

  // Avoid reloading if already populated
  if (select.options.length > 1) return;

  select.innerHTML = '<option value="">Đang tải...</option>';

  // Bind change events once here when we populate the provinces
  select.addEventListener("change", handleProvinceChange);
  if (districtSelect) {
    districtSelect.addEventListener("change", handleDistrictChange);
  }

  try {
    const res = await fetch("https://provinces.open-api.vn/api/?depth=1");
    if (!res.ok) throw new Error("API error");
    const data = await res.json();

    select.innerHTML = '<option value="">-- Chọn Tỉnh / Thành phố --</option>';
    data.forEach((province) => {
      const opt = document.createElement("option");
      opt.value = province.code;
      opt.textContent = province.name;
      select.appendChild(opt);
    });
  } catch (error) {
    console.error("Error loading provinces:", error);
    select.innerHTML =
      '<option value="">Lỗi tải tỉnh thành - F5 thử lại</option>';
  }
}

// =========================
// PAYMENT TAB SWITCHING
// =========================
function initPaymentTabs() {
  const paymentInputs = document.querySelectorAll('input[name="payment"]');
  paymentInputs.forEach((input) => {
    // Remove stale listeners by replacing with clone
    const clone = input.cloneNode(true);
    input.parentNode.replaceChild(clone, input);
  });

  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.addEventListener("change", function () {
      // Hide all dynamic areas
      document
        .querySelectorAll(".dynamic-area")
        .forEach((a) => a.classList.remove("active"));
      // Show corresponding area
      const area = document.getElementById("area-" + this.value);
      if (area) {
        area.classList.add("active");
        // If VietQR selected, generate the QR
        if (this.value === "bank-qr") {
          updateVietQR(getCheckoutTotal());
        }
        // If installment selected, compute
        if (this.value === "installment") {
          updateInstallmentDisplay(getCheckoutTotal());
        }
      }
    });
  });
}

function getCheckoutTotal() {
  let subtotal = 0;
  cart.forEach((item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      subtotal += product.priceRaw * item.quantity;
    }
  });
  const discountAmount = Math.round(subtotal * (couponDiscount / 100));
  return subtotal - discountAmount;
}

// =========================
// VIETQR DYNAMIC GENERATOR
// =========================
function updateVietQR(totalAmount) {
  const qrImg = document.getElementById("vietQrImg");
  const qrLoading = document.querySelector(".qr-loading");
  const vietQrMsg = document.getElementById("vietQrMsg");
  if (!qrImg) return;

  // Generate a short unique order ID
  const orderId = "KNG" + Date.now().toString().slice(-6);
  if (vietQrMsg) vietQrMsg.textContent = orderId;

  // Account info (MB Bank)
  const bankId = "MB";
  const accountNo = "190820268888";
  const accountName = "KNG STORE";
  const amount = totalAmount;
  const addInfo = encodeURIComponent(orderId);

  // VietQR API - free, no key needed
  const qrUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${amount}&addInfo=${addInfo}&accountName=${encodeURIComponent(accountName)}`;

  if (qrLoading) qrLoading.style.display = "flex";
  qrImg.style.opacity = "0";

  const tempImg = new Image();
  tempImg.onload = () => {
    qrImg.src = qrUrl;
    qrImg.style.opacity = "1";
    if (qrLoading) qrLoading.style.display = "none";
  };
  tempImg.onerror = () => {
    if (qrLoading)
      qrLoading.textContent =
        "Không tạo được QR. Vui lòng chuyển khoản thủ công.";
  };
  tempImg.src = qrUrl;
}

// =========================
// INSTALLMENT CALCULATOR
// =========================
function initInstallmentCalc() {
  const termSelect = document.getElementById("installmentTerm");
  const bankSelect = document.getElementById("installmentBank");
  if (!termSelect) return;

  const freshTerm = termSelect.cloneNode(true);
  termSelect.parentNode.replaceChild(freshTerm, termSelect);

  freshTerm.addEventListener("change", () =>
    updateInstallmentDisplay(getCheckoutTotal()),
  );
  if (bankSelect) {
    const freshBank = bankSelect.cloneNode(true);
    bankSelect.parentNode.replaceChild(freshBank, bankSelect);
    freshBank.addEventListener("change", () =>
      updateInstallmentDisplay(getCheckoutTotal()),
    );
  }

  updateInstallmentDisplay(getCheckoutTotal());
}

function updateInstallmentDisplay(total) {
  const termSelect = document.getElementById("installmentTerm");
  const instTotal = document.getElementById("instTotalValue");
  const instFee = document.getElementById("instConversionFee");
  const instMonthly = document.getElementById("instMonthlyPay");
  if (!termSelect || !instMonthly) return;

  const months = parseInt(termSelect.value) || 3;
  const conversionFeeRate = 0.02; // 2% one-time fee
  const fee = Math.round(total * conversionFeeRate);
  const totalWithFee = total + fee;
  const monthly = Math.round(totalWithFee / months);

  if (instTotal) instTotal.textContent = formatPrice(total);
  if (instFee) instFee.textContent = formatPrice(fee);
  if (instMonthly) instMonthly.textContent = formatPrice(monthly) + " / tháng";
}

// =========================
// COUPON ENGINE
// =========================
const VALID_COUPONS = {
  KNGSUMMER: 10, // 10% off
  CAMERAPRO: 15, // 15% off
  KNG5: 5, // 5% off
  KNGSTORE: 50, // 50% off
  KHANG: 99, // 99% off
};

function initCouponEngine() {
  const btn = document.getElementById("applyCouponBtn");
  if (!btn) return;

  // Remove old listeners by cloning
  const freshBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(freshBtn, btn);

  freshBtn.addEventListener("click", () => {
    const input = document.getElementById("couponCode");
    const msg = document.getElementById("couponMessage");
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    msg.className = "coupon-message";
    msg.textContent = "";

    if (!code) {
      msg.className = "coupon-message error";
      msg.textContent = "⚠️ Vui lòng nhập mã giảm giá.";
      return;
    }

    if (VALID_COUPONS[code] !== undefined) {
      couponDiscount = VALID_COUPONS[code];
      msg.className = "coupon-message success";
      msg.textContent = `✅ Áp dụng thành công! Bạn được giảm ${couponDiscount}% tổng đơn hàng.`;
      updateCheckoutPricing();
    } else {
      couponDiscount = 0;
      msg.className = "coupon-message error";
      msg.textContent = `❌ Mã "${code}" không hợp lệ hoặc đã hết hạn.`;
      updateCheckoutPricing();
    }
  });

  // Allow Enter key to apply coupon
  const input = document.getElementById("couponCode");
  if (input) {
    const freshInput = input.cloneNode(true);
    input.parentNode.replaceChild(freshInput, input);
    freshInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("applyCouponBtn")?.click();
      }
    });
  }
}

// =========================
// E-WALLET SELECTOR
// =========================
function initEwalletSelector() {
  document.querySelectorAll(".ewallet-logo-select").forEach((el) => {
    el.addEventListener("click", function () {
      document
        .querySelectorAll(".ewallet-logo-select")
        .forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// =========================
// (removeFromCart duplicate removed)

// Timers for success auto-redirect
let successCountdownTimeout;
let successCountdownInterval;

function clearSuccessTimers() {
  if (successCountdownTimeout) {
    clearTimeout(successCountdownTimeout);
    successCountdownTimeout = null;
  }
  if (successCountdownInterval) {
    clearInterval(successCountdownInterval);
    successCountdownInterval = null;
  }

  // Make progress bar freeze and fade out the countdown text
  const countdownEl = document.querySelector(".success-countdown");
  if (countdownEl) {
    countdownEl.style.opacity = "0";
    countdownEl.style.transition = "opacity 0.3s ease";
  }

  const bar = document.getElementById("countdownBar");
  if (bar) {
    const computedStyle = window.getComputedStyle(bar);
    const width = computedStyle.getPropertyValue("width");
    bar.style.animation = "none";
    bar.style.width = width;
  }
}

// =========================
// SHOW SUCCESS MODAL
// =========================
function showSuccessModal(customerName, paymentMethod, total, customerEmail) {
  const successModal = document.getElementById("successModal");
  const successTitle = document.getElementById("successTitle");
  const successMessage = document.getElementById("successMessage");
  const successDetails = document.getElementById("successDetails");

  if (!successModal) return;

  const paymentNames = {
    cash: "Tiền mặt",
    "bank-qr": "QR Ngân hàng",
    card: "Thẻ tín dụng",
    ewallet: "E-wallet",
  };

  const paymentDisplay = paymentNames[paymentMethod] || "Không xác định";

  successTitle.textContent = "🎉 Thanh toán thành công!";
  successMessage.textContent = "Cảm ơn bạn đã mua sắm tại KNG Store";

  // Generate order ID
  const orderId = "KNG-" + Math.floor(100000 + Math.random() * 900000);

  // Set order ID in the HTML if the element exists
  const orderIdEl = document.getElementById("successOrderId");
  if (orderIdEl) {
    orderIdEl.textContent = "#" + orderId;
  }

  // Set email note in the HTML
  const emailNote = document.getElementById("successEmailNote");
  if (emailNote) {
    if (customerEmail) {
      emailNote.innerHTML = `Hệ thống đã gửi email xác nhận kèm hóa đơn đến <strong>${customerEmail}</strong>.`;
      emailNote.style.display = "block";
    } else {
      emailNote.innerHTML = `Hệ thống đã ghi nhận đơn hàng của bạn. Xin cảm ơn!`;
      emailNote.style.display = "block";
    }
  }

  successDetails.innerHTML = `
    <div class="success-detail-item">
      <span class="success-detail-label">👤 Khách hàng:</span>
      <span class="success-detail-value">${customerName}</span>
    </div>
    <div class="success-detail-item">
      <span class="success-detail-label">💳 Phương thức:</span>
      <span class="success-detail-value">${paymentDisplay}</span>
    </div>
    <div class="success-detail-item">
      <span class="success-detail-label">💰 Tổng tiền:</span>
      <span class="success-detail-value">${total}</span>
    </div>
    <div class="success-detail-item">
      <span class="success-detail-label">📦 Trạng thái:</span>
      <span class="success-detail-value">Đã xác nhận</span>
    </div>
  `;

  // Reset success countdown elements to initial states
  const countdownEl = document.querySelector(".success-countdown");
  if (countdownEl) {
    countdownEl.style.opacity = "1";
    countdownEl.style.transition = "none";
  }
  const countdownSec = document.getElementById("countdownSec");
  if (countdownSec) {
    countdownSec.textContent = "5";
  }
  const bar = document.getElementById("countdownBar");
  if (bar) {
    bar.style.animation = "none";
    bar.style.width = "auto";
  }

  successModal.classList.add("show");

  // Clear any active timers first
  clearSuccessTimers();

  // Set countdown timer for 5 seconds
  let timeLeft = 5;
  successCountdownInterval = setInterval(() => {
    timeLeft--;
    if (countdownSec) {
      countdownSec.textContent = timeLeft;
    }
    if (timeLeft <= 0) {
      clearInterval(successCountdownInterval);
      successCountdownInterval = null;
    }
  }, 1000);

  successCountdownTimeout = setTimeout(() => {
    closeSuccessModal();
  }, 5000);
}

function viewOrderDetails() {
  clearSuccessTimers();
  closeSuccessModal();
  hienThiLichSuMuaHang();
}

// =========================
// CLOSE SUCCESS MODAL
// =========================
function closeSuccessModal() {
  clearSuccessTimers();
  const successModal = document.getElementById("successModal");
  if (successModal) {
    successModal.classList.remove("show");
  }
  // Clear cart and refresh
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  document.getElementById("checkoutModal").classList.remove("show");

  const form = document.getElementById("checkoutForm");
  if (form) {
    form.reset();
    form.style.display = "block";
  }

  // Reset address selectors
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (districtSelect) {
    districtSelect.innerHTML =
      '<option value="">-- Chọn Quận / Huyện --</option>';
    districtSelect.disabled = true;
  }
  if (wardSelect) {
    wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
    wardSelect.disabled = true;
  }

  document.getElementById("checkoutItems").innerHTML = "";
  document.getElementById("checkoutTotal").textContent = "0đ";
}

// =========================
// DOM READY
// =========================
document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // INITIAL CART COUNT
  // =========================
  updateCartCount();

  // =========================
  // PASSWORD STRENGTH
  // =========================
  initPasswordStrength();

  // =========================
  // MOBILE MENU
  // =========================
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  // =========================
  // SMOOTH SCROLL & MENU ACTIVE STATE
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Remove active from all menu links
        document.querySelectorAll(".nav-menu ul li a").forEach((link) => {
          link.classList.remove("active");
        });

        // Add active to current link
        this.classList.add("active");

        window.scrollTo({
          top: targetElement.offsetTop - 90,
          behavior: "smooth",
        });

        if (navMenu) {
          navMenu.classList.remove("show-menu");
        }
      }
    });
  });

  // (Old buy buttons removed)

  // =========================
  // CART BUTTON
  // =========================
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", showCartItems);
  }

  // (Search is now handled dynamically in initSearchAndFilter)

  // =========================
  // STICKY HEADER
  // =========================
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // =========================
  // SCROLL ANIMATION
  // =========================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".brand-card, .feature-card, .testimonial-card, .section-title h2",
    )
    .forEach((card) => {
      card.classList.add("fade-in");
      observer.observe(card);
    });

  // =========================
  // HERO ANIMATION
  // =========================
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {
      hero.style.transition = "all 1s ease";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 100);
  }

  // =========================
  // CHECKOUT MODAL
  // =========================
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckout = document.getElementById("closeCheckout");
  const checkoutForm = document.getElementById("checkoutForm");

  if (closeCheckout) {
    closeCheckout.addEventListener("click", () => {
      checkoutModal.classList.remove("show");
    });
  }

  if (checkoutModal) {
    checkoutModal.addEventListener("click", (e) => {
      if (e.target === checkoutModal) {
        checkoutModal.classList.remove("show");
      }
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Reset previous error styles
      document.querySelectorAll('.form-group-custom input, .form-group-custom select, .form-group-custom textarea').forEach(el => {
        el.style.borderColor = "";
      });

      const nameInput = document.getElementById("customerName");
      const phoneInput = document.getElementById("customerPhone");
      const provinceInput = document.getElementById("checkoutProvince");
      const districtInput = document.getElementById("checkoutDistrict");
      const wardInput = document.getElementById("checkoutWard");
      const streetInput = document.getElementById("customerAddressDetail");
      const paymentElement = document.querySelector('input[name="payment"]:checked');

      const name = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const province = provinceInput?.value;
      const district = districtInput?.value;
      const ward = wardInput?.value;
      const streetDetail = streetInput?.value.trim();

      let hasError = false;
      
      function highlightError(input) {
        if (input) {
          input.style.borderColor = "var(--accent)";
          hasError = true;
        }
      }

      if (!name) highlightError(nameInput);
      if (!phone) {
        highlightError(phoneInput);
      } else if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(phone)) {
        highlightError(phoneInput);
        showNotification("⚠️ Số điện thoại không hợp lệ.", "error");
        return;
      }
      
      if (!province) highlightError(provinceInput);
      if (!district) highlightError(districtInput);
      if (!ward) highlightError(wardInput);
      if (!streetDetail) highlightError(streetInput);

      if (hasError) {
        showNotification("⚠️ Vui lòng điền đầy đủ thông tin bắt buộc.", "error");
        return;
      }

      if (!paymentElement) {
        showNotification("⚠️ Vui lòng chọn hình thức thanh toán.", "error");
        return;
      }

      const paymentValue = paymentElement.value;
      const totalFormatted = formatPrice(getCheckoutTotal());

      // === LƯU LỊCH SỬ MUA HÀNG ===
      const productNames = cart.map((item) => {
        const p = PRODUCTS.find(prod => prod.id === item.id);
        return p ? `${p.name} (x${item.quantity})` : "Sản phẩm không rõ";
      });
      const totalAmount = getCheckoutTotal();
      luuDonHangVaoLichSu(productNames, totalAmount);

      const email = document.getElementById("customerEmail")?.value.trim() || "";
      showSuccessModal(name, paymentValue, totalFormatted, email);

      checkoutForm.style.display = "none";

      setTimeout(() => {
        checkoutModal.classList.remove("show");
      }, 300);
    });
  }

  // =========================
  // CONSULTATION MODAL
  // =========================
  const consultBtn = document.getElementById("consultBtn");
  const consultationModal = document.getElementById("consultationModal");
  const closeConsult = document.getElementById("closeConsult");
  const consultForm = document.querySelector(".consult-form");

  if (consultBtn) {
    consultBtn.addEventListener("click", (e) => {
      e.preventDefault();
      consultationModal.classList.add("show");
    });
  }

  if (closeConsult) {
    closeConsult.addEventListener("click", () => {
      consultationModal.classList.remove("show");
    });
  }

  if (consultationModal) {
    consultationModal.addEventListener("click", (e) => {
      if (e.target === consultationModal) {
        consultationModal.classList.remove("show");
      }
    });
  }

  if (consultForm) {
    consultForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = consultForm
        .querySelector('input[placeholder*="Họ và tên"]')
        .value.trim();
      const email = consultForm
        .querySelector('input[placeholder*="Email"]')
        .value.trim();
      const phone = consultForm
        .querySelector('input[placeholder*="Số điện thoại"]')
        .value.trim();
      const need = consultForm.querySelector("select").value;
      const budget = consultForm
        .querySelector('input[placeholder*="Budget"]')
        .value.trim();
      const message = consultForm.querySelector("textarea").value.trim();

      if (!name || !email || !phone || !need) {
        showNotification("⚠️ Vui lòng nhập đầy đủ thông tin bắt buộc.");
        return;
      }

      // Here you can send data to server
      console.log({
        name,
        email,
        phone,
        need,
        budget,
        message,
      });

      showNotification(`✅ Cảm ơn ${name}! Chúng tôi sẽ liên hệ bạn sớm nhất.`);

      // Reset form
      consultForm.reset();

      // Close modal
      setTimeout(() => {
        consultationModal.classList.remove("show");
      }, 1500);
    });
  }
});

/* =========================
   LỊCH SỬ MUA HÀNG - HISTORY MANAGEMENT
========================= */

// LocalStorage key cho lịch sử mua hàng
function getHistoryKey() {
  let userStr = null;
  if (localStorage.getItem("kng_remember") === "1") {
    userStr = localStorage.getItem("kng_auth_user");
  } else {
    userStr = sessionStorage.getItem("kng_auth_user");
  }
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      if (user && user.email) {
        return "kng_store_purchase_history_" + user.email.replace(/[^a-zA-Z0-9]/g, "_");
      }
    } catch(e) {}
  }
  return "kng_store_purchase_history";
}

/**
 * Hàm lưu đơn hàng vào lịch sử (gọi khi thanh toán thành công)
 * @param {Array} products - Mảng các sản phẩm đã mua (VD: ["Canon EOS R5", "Sony A7R IV"])
 * @param {Number} totalAmount - Tổng tiền thanh toán (VD: 270000000)
 */
function luuDonHangVaoLichSu(products, totalAmount) {
  // Lấy lịch sử hiện tại từ LocalStorage
  let history = JSON.parse(localStorage.getItem(getHistoryKey())) || [];

  // Tạo mã đơn hàng ngẫu nhiên: KNG-XXXXXX (6 ký tự số)
  const randomCode = Math.floor(100000 + Math.random() * 900000);
  const orderId = `KNG-${randomCode}`;

  // Tạo object đơn hàng mới
  const newOrder = {
    id: orderId,
    timestamp: new Date().toISOString(), // Lưu thời gian dạng ISO string
    products: Array.isArray(products) ? products : [products], // Đảm bảo là mảng
    total: totalAmount,
  };

  // Thêm đơn hàng mới vào đầu mảng (đơn mới nhất sẽ ở trên)
  history.unshift(newOrder);

  // Lưu lại vào LocalStorage
  localStorage.setItem(getHistoryKey(), JSON.stringify(history));

  console.log("✅ Đơn hàng đã được lưu:", newOrder);
}

/**
 * Hàm hiển thị lịch sử mua hàng
 */
function hienThiLichSuMuaHang() {
  const historyModal = document.getElementById("historyModal");
  const historyOrdersList = document.getElementById("historyOrdersList");

  if (!historyModal || !historyOrdersList) {
    console.error("❌ Không tìm thấy phần tử Modal lịch sử.");
    return;
  }

  // Lấy dữ liệu lịch sử từ LocalStorage
  const history = JSON.parse(localStorage.getItem(getHistoryKey())) || [];

  // Xóa nội dung cũ
  historyOrdersList.innerHTML = "";

  // Nếu không có đơn hàng nào
  if (history.length === 0) {
    historyOrdersList.innerHTML = `
      <div class="history-empty">
        <i class="fa-solid fa-inbox"></i>
        <p>Bạn chưa có đơn hàng nào tại KNG Store</p>
      </div>
    `;
  } else {
    // Render từng đơn hàng thành Card
    history.forEach((order) => {
      const orderDate = new Date(order.timestamp);
      const formattedDate = orderDate.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Tạo HTML cho danh sách sản phẩm
      const productsHTML = order.products
        .map(
          (product) => `<div class="order-card-product-name">${product}</div>`,
        )
        .join("");

      // Định dạng tiền tệ
      const formattedTotal = order.total.toLocaleString("vi-VN") + "đ";

      // Tạo Card đơn hàng
      const orderCard = `
        <div class="history-order-card">
          <div class="order-card-header">
            <div class="order-card-id">
              <i class="fa-solid fa-tag"></i>
              ${order.id}
            </div>
            <div class="order-card-date">${formattedDate}</div>
          </div>
          <div class="order-card-body">
            <div class="order-card-products">
              ${productsHTML}
            </div>
          </div>
          <div class="order-card-footer">
            <div class="order-card-total">
              <span class="order-card-total-label">Tổng thanh toán:</span>
              <span class="order-card-total-amount">${formattedTotal}</span>
            </div>
          </div>
        </div>
      `;

      historyOrdersList.innerHTML += orderCard;
    });
  }

  // Hiển thị Modal
  historyModal.classList.add("show");

  // Đóng modal khi click bên ngoài Modal Content
  historyModal.addEventListener("click", (e) => {
    if (e.target === historyModal) {
      dongLichSuMuaHang();
    }
  });
}

/**
 * Hàm đóng Modal lịch sử
 */
function dongLichSuMuaHang() {
  const historyModal = document.getElementById("historyModal");
  if (historyModal) {
    historyModal.classList.remove("show");
  }
}

/**
 * Hàm xóa tất cả lịch sử mua hàng
 */
function xoaTatCaLichSu() {
  // Hiển thị xác nhận trước khi xóa
  const isConfirmed = confirm(
    "⚠️ Bạn chắc chắn muốn xóa tất cả lịch sử mua hàng? Hành động này không thể hoàn tác.",
  );

  if (isConfirmed) {
    localStorage.removeItem(getHistoryKey());
    showNotification("🗑️ Lịch sử mua hàng đã được xóa hoàn toàn.");

    // Render lại danh sách để hiển thị trạng thái trống
    hienThiLichSuMuaHang();
  }
}

// =========================
// AUTH MODULE
// =========================
(function () {
  const AUTH_USERS_KEY = "kng_registered_users";
  const AUTH_TOKEN_KEY = "kng_auth_token";
  const AUTH_USER_KEY = "kng_auth_user";

  // --- API simulation (swap with real fetch calls later) ---

  /**
   * POST /api/register
   * @param {{ name: string, email: string, phone: string, password: string }} data
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  function apiRegister(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
        if (users.find((u) => u.email === data.email)) {
          reject({ success: false, message: "Email đã được đăng ký." });
          return;
        }
        users.push({
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          avatar: "",
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
        resolve({ success: true, message: "Đăng ký thành công!" });
      }, 600);
    });
  }

  /**
   * POST /api/login
   * @param {{ email: string, password: string }} data
   * @returns {Promise<{ success: boolean, token: string, user: object }>}
   */
  function apiLogin(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
        const user = users.find(
          (u) => u.email === data.email && u.password === data.password,
        );
        if (!user) {
          reject({ success: false, message: "Email hoặc mật khẩu không đúng." });
          return;
        }
        const token = "kng_" + Date.now() + "_" + Math.random().toString(36).slice(2);
        resolve({
          success: true,
          token: token,
          user: { name: user.name, email: user.email, phone: user.phone, avatar: user.avatar },
        });
      }, 600);
    });
  }

  /**
   * POST /api/forgot-password
   * @param {{ email: string }} data
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  function apiForgotPassword(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
        if (!users.find((u) => u.email === data.email)) {
          reject({ success: false, message: "Email chưa được đăng ký trong hệ thống." });
          return;
        }
        resolve({
          success: true,
          message: "Liên kết khôi phục mật khẩu đã được gửi tới email của bạn.",
        });
      }, 800);
    });
  }

  // --- DOM refs ---
  const authModal = document.getElementById("authModal");
  const authClose = document.getElementById("authClose");
  const accountBtn = document.getElementById("accountBtn");
  const userProfileWrapper = document.getElementById("userProfileWrapper");
  const userAvatar = document.getElementById("userAvatar");
  const userDropdown = document.getElementById("userDropdown");
  const dropdownAvatar = document.getElementById("dropdownAvatar");
  const dropdownName = document.getElementById("dropdownName");
  const dropdownEmail = document.getElementById("dropdownEmail");
  const logoutBtn = document.getElementById("logoutBtn");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const forgotForm = document.getElementById("forgotForm");
  const authTabs = document.querySelectorAll(".auth-tab");

  // --- Helpers ---
  function getAvatarUrl(name) {
    const encoded = encodeURIComponent(name || "User");
    return "https://ui-avatars.com/api/?name=" + encoded + "&background=0a0e27&color=00d4ff&size=80&bold=true";
  }

  function saveSession(token, user, remember) {
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(AUTH_TOKEN_KEY, token);
    storage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    if (remember) {
      localStorage.setItem("kng_remember", "1");
    }
  }

  function loadSession() {
    if (localStorage.getItem("kng_remember") === "1") {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const user = localStorage.getItem(AUTH_USER_KEY);
      if (token && user) return { token, user: JSON.parse(user) };
    }
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    const user = sessionStorage.getItem(AUTH_USER_KEY);
    if (token && user) return { token, user: JSON.parse(user) };
    return null;
  }

  function clearSession() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem("kng_remember");
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
  }

  // --- UI state ---
  function updateNavbarState() {
    const session = loadSession();
    if (session) {
      accountBtn.style.display = "none";
      userProfileWrapper.style.display = "inline-block";
      const avatarSrc = session.user.avatar || getAvatarUrl(session.user.name);
      userAvatar.src = avatarSrc;
      dropdownAvatar.src = avatarSrc;
      dropdownName.textContent = session.user.name;
      dropdownEmail.textContent = session.user.email;
    } else {
      accountBtn.style.display = "flex";
      userProfileWrapper.style.display = "none";
      userDropdown.classList.remove("show");
    }
  }

  function openAuthModal(tab) {
    authModal.classList.add("show");
    switchTab(tab || "login");
  }

  function closeAuthModal() {
    authModal.classList.remove("show");
  }

  function switchTab(tabName) {
    authTabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === tabName));
    loginForm.style.display = tabName === "login" ? "block" : "none";
    registerForm.style.display = tabName === "register" ? "block" : "none";
    forgotForm.style.display = tabName === "forgot" ? "block" : "none";
  }

  // --- Event listeners ---

  // Open modal
  if (accountBtn) {
    accountBtn.addEventListener("click", () => openAuthModal("login"));
  }

  // Close modal
  if (authClose) {
    authClose.addEventListener("click", closeAuthModal);
  }
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  // Tab switching
  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  // data-switch links
  document.querySelectorAll("[data-switch]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(link.dataset.switch);
    });
  });

  // Toggle password visibility
  document.querySelectorAll(".toggle-password").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.querySelector("i").classList.toggle("fa-eye", !isHidden);
      btn.querySelector("i").classList.toggle("fa-eye-slash", isHidden);
    });
  });

  // Avatar dropdown toggle
  if (userProfileWrapper) {
    userProfileWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle("show");
    });
  }

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    if (userDropdown && !userProfileWrapper.contains(e.target)) {
      userDropdown.classList.remove("show");
    }
  });

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      clearSession();
      updateNavbarState();
      showNotification("Đăng xuất thành công!");
    });
  }

  // --- Form submissions ---

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      const remember = document.getElementById("rememberMe").checked;

      if (!email || !password) {
        showNotification("⚠️ Vui lòng nhập đầy đủ email và mật khẩu.");
        return;
      }

      const btn = loginForm.querySelector(".auth-submit-btn");
      btn.disabled = true;
      btn.querySelector("span").textContent = "Đang xử lý...";

      apiLogin({ email, password })
        .then((res) => {
          saveSession(res.token, res.user, remember);
          closeAuthModal();
          updateNavbarState();
          loginForm.reset();
          showNotification("Đăng nhập thành công! Chào " + res.user.name);
        })
        .catch((err) => {
          showNotification("❌ " + (err.message || "Đăng nhập thất bại."));
        })
        .finally(() => {
          btn.disabled = false;
          btn.querySelector("span").textContent = "Đăng nhập";
        });
    });
  }

  // REGISTER
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const phone = document.getElementById("regPhone").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;
      const agreeTerms = document.getElementById("agreeTerms").checked;

      if (!name || !email || !password || !confirmPassword) {
        showNotification("⚠️ Vui lòng nhập đầy đủ thông tin.");
        return;
      }
      if (password.length < 6) {
        showNotification("⚠️ Mật khẩu phải có ít nhất 6 ký tự.");
        return;
      }
      if (password !== confirmPassword) {
        showNotification("⚠️ Mật khẩu nhập lại không khớp.");
        return;
      }
      if (!agreeTerms) {
        showNotification("⚠️ Bạn cần đồng ý với điều khoản dịch vụ.");
        return;
      }

      const btn = registerForm.querySelector(".auth-submit-btn");
      btn.disabled = true;
      btn.querySelector("span").textContent = "Đang xử lý...";

      apiRegister({ name, email, phone, password })
        .then((res) => {
          showNotification(res.message + " Hãy đăng nhập.");
          registerForm.reset();
          switchTab("login");
          document.getElementById("loginEmail").value = email;
        })
        .catch((err) => {
          showNotification("❌ " + (err.message || "Đăng ký thất bại."));
        })
        .finally(() => {
          btn.disabled = false;
          btn.querySelector("span").textContent = "Đăng ký";
        });
    });
  }

  // FORGOT PASSWORD
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("forgotEmail").value.trim();

      if (!email) {
        showNotification("⚠️ Vui lòng nhập email.");
        return;
      }

      const btn = forgotForm.querySelector(".auth-submit-btn");
      btn.disabled = true;
      btn.querySelector("span").textContent = "Đang gửi...";

      apiForgotPassword({ email })
        .then((res) => {
          showNotification(res.message);
          forgotForm.reset();
        })
        .catch((err) => {
          showNotification("❌ " + (err.message || "Yêu cầu thất bại."));
        })
        .finally(() => {
          btn.disabled = false;
          btn.querySelector("span").textContent = "Gửi yêu cầu";
        });
    });
  }

  // Close modal on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && authModal.classList.contains("show")) {
      closeAuthModal();
    }
  });

  // Init on load
  updateNavbarState();
})();
