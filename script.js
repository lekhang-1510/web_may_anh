// ==========================================
// KNG STORE - COMPREHENSIVE E-COMMERCE SCRIPT
// ==========================================

// ==========================================
// 1. VIETNAM ADDRESS DATA (OFFLINE-READY ENGINE)
// ==========================================
const VIETNAM_ADDRESS_DATA = [
  {
    name: "TP. Hồ Chí Minh",
    code: "79",
    districts: [
      {
        name: "Quận 1",
        code: "760",
        wards: ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Kho", "Phường Cầu Ông Lãnh", "Phường Đa Kao", "Phường Tân Định"]
      },
      {
        name: "Quận 3",
        code: "770",
        wards: ["Phường Võ Thị Sáu", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 9", "Phường 11"]
      },
      {
        name: "Quận 7",
        code: "778",
        wards: ["Phường Tân Phong", "Phường Tân Phú", "Phường Tân Quy", "Phường Bình Thuận", "Phường Phú Mỹ"]
      },
      {
        name: "TP. Thủ Đức",
        code: "769",
        wards: ["Phường Thảo Điền", "Phường An Phú", "Phường Bình An", "Phường Hiệp Phú", "Phường Linh Trung", "Phường Thủ Thiêm"]
      },
      {
        name: "Quận Bình Thạnh",
        code: "765",
        wards: ["Phường 1", "Phường 2", "Phường 15", "Phường 19", "Phường 21", "Phường 25", "Phường 26"]
      },
      {
        name: "Quận Tân Bình",
        code: "766",
        wards: ["Phường 2", "Phường 4", "Phường 12", "Phường 13", "Phường 15"]
      }
    ]
  },
  {
    name: "TP. Hà Nội",
    code: "01",
    districts: [
      {
        name: "Quận Hoàn Kiếm",
        code: "002",
        wards: ["Phường Tràng Tiền", "Phường Hàng Trống", "Phường Hàng Bạc", "Phường Cửa Nam", "Phường Hàng Buồm"]
      },
      {
        name: "Quận Ba Đình",
        code: "001",
        wards: ["Phường Điện Biên", "Phường Đội Cấn", "Phường Kim Mã", "Phường Giảng Võ", "Phường Liễu Giai"]
      },
      {
        name: "Quận Cầu Giấy",
        code: "005",
        wards: ["Phường Dịch Vọng", "Phường Dịch Vọng Hậu", "Phường Nghĩa Tân", "Phường Quan Hoa", "Phường Trung Hòa"]
      },
      {
        name: "Quận Đống Đa",
        code: "006",
        wards: ["Phường Cát Linh", "Phường Láng Hạ", "Phường Láng Thượng", "Phường Ô Chợ Dừa", "Phường Văn Miếu"]
      },
      {
        name: "Quận Hai Bà Trưng",
        code: "007",
        wards: ["Phường Bạch Mai", "Phường Bách Khoa", "Phường Đồng Tâm", "Phường Lê Đại Hành", "Phường Phố Huế"]
      },
      {
        name: "Quận Tây Hồ",
        code: "003",
        wards: ["Phường Bưởi", "Phường Nhật Tân", "Phường Quảng An", "Phường Thụy Khuê", "Phường Xuân La"]
      }
    ]
  },
  {
    name: "TP. Đà Nẵng",
    code: "48",
    districts: [
      {
        name: "Quận Hải Châu",
        code: "490",
        wards: ["Phường Hải Châu 1", "Phường Hải Châu 2", "Phường Thạch Thang", "Phường Thuận Phước", "Phường Nam Dương"]
      },
      {
        name: "Quận Thanh Khê",
        code: "491",
        wards: ["Phường An Khê", "Phường Chính Gián", "Phường Tam Thuận", "Phường Vĩnh Trung", "Phường Xuân Hà"]
      },
      {
        name: "Quận Sơn Trà",
        code: "492",
        wards: ["Phường An Hải Bắc", "Phường An Hải Tây", "Phường Mân Thái", "Phường Nại Hiên Đông", "Phường Phước Mỹ"]
      },
      {
        name: "Quận Ngũ Hành Sơn",
        code: "493",
        wards: ["Phường Hòa Hải", "Phường Hòa Quý", "Phường Khuê Mỹ", "Phường Mỹ An"]
      }
    ]
  },
  {
    name: "TP. Hải Phòng",
    code: "31",
    districts: [
      {
        name: "Quận Hồng Bàng",
        code: "303",
        wards: ["Phường Hạ Lý", "Phường Hoàng Văn Thụ", "Phường Minh Khai", "Phường Phan Bội Châu"]
      },
      {
        name: "Quận Ngô Quyền",
        code: "304",
        wards: ["Phường Cầu Đất", "Phường Đằng Giang", "Phường Lạch Tray", "Phường Máy Chai"]
      },
      {
        name: "Quận Lê Chân",
        code: "305",
        wards: ["Phường An Biên", "Phường An Dương", "Phường Cát Dài", "Phường Dư Hàng"]
      }
    ]
  },
  {
    name: "TP. Cần Thơ",
    code: "92",
    districts: [
      {
        name: "Quận Ninh Kiều",
        code: "916",
        wards: ["Phường An Cư", "Phường An Hòa", "Phường Cái Khế", "Phường Tân An", "Phường Xuân Khánh"]
      },
      {
        name: "Quận Bình Thủy",
        code: "917",
        wards: ["Phường An Thới", "Phường Bình Thủy", "Phường Trà An", "Phường Trà Nóc"]
      },
      {
        name: "Quận Cái Răng",
        code: "918",
        wards: ["Phường Ba Láng", "Phường Hưng Phú", "Phường Hưng Thạnh", "Phường Lê Bình"]
      }
    ]
  }
];

// ==========================================
// 2. TOAST NOTIFICATION ENGINE
// ==========================================
function showNotification(message, forceType = null) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.innerHTML = message;
  notification.classList.remove("show", "success", "error");

  let type = forceType;
  if (!type) {
    const msgLower = message.toLowerCase();
    if (message.includes("❌") || message.includes("⚠️") || msgLower.includes("thất bại") || msgLower.includes("hết hàng") || msgLower.includes("lỗi")) {
      type = "error";
    } else {
      type = "success";
    }
  }

  notification.classList.add(type);
  notification.classList.add("show");

  clearTimeout(notification._timer);
  notification._timer = setTimeout(() => {
    notification.classList.remove("show");
  }, 2800);
}

// ==========================================
// 3. CART SYSTEM (LOCALSTORAGE ENGINE)
// ==========================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  const cartBtn = document.querySelector(".cart-btn");
  
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }

  if (cartBtn) {
    cartBtn.classList.remove("cart-bounce-anim");
    void cartBtn.offsetWidth; // Force reflow
    cartBtn.classList.add("cart-bounce-anim");
  }
}

function addToCart(productId, quantity = 1, showToast = true) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showNotification(`❌ Máy ảnh <strong>${product.name}</strong> hiện đã hết hàng!`, "error");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      showNotification(`⚠️ Chỉ còn <strong>${product.stock}</strong> sản phẩm trong kho!`, "error");
      return;
    }
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  if (showToast) {
    showNotification(`🛒 Đã thêm <strong>${product.name}</strong> vào giỏ hàng!`);
  }
}

function buyNow(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showNotification(`❌ Máy ảnh <strong>${product.name}</strong> đã hết hàng!`, "error");
    return;
  }

  addToCart(productId, 1, false);
  closeProductModal();
  showCartItems();
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
      showNotification(`⚠️ Chỉ còn <strong>${product.stock}</strong> sản phẩm trong kho!`, "error");
      return;
    }

    cart[itemIndex].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCartItems();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    showNotification(`🗑️ Đã xóa <strong>${product.name}</strong> khỏi giỏ hàng.`);
  }

  showCartItems();
}

// ==========================================
// 4. PRODUCT RENDERING & SKELETON LOADER
// ==========================================
function renderProductCards(productsToRender = PRODUCTS) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-camera-rotate" style="font-size: 3.5rem; margin-bottom: 18px; display: block; opacity: 0.4; color: var(--primary);"></i>
        <h3 style="margin-bottom: 10px; font-size: 1.4rem; color: var(--text);">Không tìm thấy sản phẩm phù hợp</h3>
        <p>Thử điều chỉnh từ khóa tìm kiếm hoặc bấm nút đặt lại bộ lọc bên dưới.</p>
        <button class="primary-btn" style="margin-top: 20px; padding: 10px 24px;" onclick="resetFilters()">
          <i class="fa-solid fa-rotate-left"></i> Xóa tất cả bộ lọc
        </button>
      </div>
    `;
    updateResultsCount(0);
    return;
  }

  grid.innerHTML = productsToRender.map((p) => {
    const isOutOfStock = p.stock <= 0;
    const isLowStock = p.stock > 0 && p.stock <= 3;

    const oldPriceHtml = p.oldPriceRaw 
      ? `<span class="old-price" style="text-decoration: line-through; font-size: 0.85em; color: var(--text-muted); margin-left: 8px;">${formatPrice(p.oldPriceRaw)}</span>` 
      : '';

    const discountBadgeHtml = p.oldPriceRaw 
      ? `<span class="product-discount-badge" style="position: absolute; top: 14px; left: 14px; background: linear-gradient(135deg, var(--accent), #e63c2b); color: white; padding: 4px 10px; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 800; z-index: 3; box-shadow: 0 4px 12px rgba(255, 107, 91, 0.4);"><i class="fa-solid fa-tag"></i> -${Math.round((1 - p.priceRaw / p.oldPriceRaw) * 100)}%</span>` 
      : '';

    const outOfStockOverlayHtml = isOutOfStock 
      ? `<div class="out-of-stock-overlay" style="position: absolute; inset: 0; background: rgba(10, 14, 39, 0.85); backdrop-filter: blur(4px); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 4;">
           <span style="background: var(--accent); color: white; padding: 8px 18px; border-radius: 999px; font-weight: 800; letter-spacing: 1.5px; font-size: 0.85rem; box-shadow: 0 4px 15px rgba(255, 107, 91, 0.6);"><i class="fa-solid fa-ban"></i> HẾT HÀNG</span>
           <span style="color: var(--text-muted); font-size: 0.8rem; margin-top: 6px;">Đang về thêm</span>
         </div>` 
      : '';

    const stockIndicatorHtml = isLowStock 
      ? `<div style="font-size: 0.8rem; color: #ffcc00; margin-top: 6px; font-weight: 600;"><i class="fa-solid fa-bolt"></i> Chỉ còn ${p.stock} sản phẩm</div>` 
      : (isOutOfStock ? `<div style="font-size: 0.8rem; color: var(--accent); margin-top: 6px; font-weight: 600;"><i class="fa-solid fa-circle-xmark"></i> Tạm hết hàng</div>` : '');

    return `
      <div class="product-card" onclick="openProductModal(${p.id})">
        ${discountBadgeHtml}
        ${!p.oldPriceRaw && p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        
        <div style="position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius-sm) var(--radius-sm) 0 0;">
          ${outOfStockOverlayHtml}
          <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <div class="content" style="display: flex; flex-direction: column; height: 100%;">
          <p class="product-category">${p.brand} &bull; ${p.category}</p>
          <h3 style="flex-grow: 1; margin-bottom: 6px;">${p.name}</h3>
          
          <div class="rating" style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
            <span style="color: #ffd166; font-size: 0.95rem;">★</span>
            <strong style="color: var(--text); font-size: 0.9rem;">${p.rating}</strong>
            <span style="color: var(--text-muted); font-size: 0.8rem;">(${p.reviews} đánh giá)</span>
          </div>

          <p class="product-desc" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${p.shortDesc}
          </p>

          <p class="price" style="margin-top: auto; padding-top: 6px;">
            ${p.price}${oldPriceHtml}
          </p>
          ${stockIndicatorHtml}

          <div class="card-actions-grid">
            <button class="view-detail-btn" onclick="event.stopPropagation(); openProductModal(${p.id})" title="Xem chi tiết">
              <i class="fa-solid fa-eye"></i> Chi tiết
            </button>
            <button class="card-add-btn" onclick="event.stopPropagation(); addToCart(${p.id}, 1)" ${isOutOfStock ? 'disabled' : ''} style="width: 100%; padding: 10px; background: ${isOutOfStock ? 'rgba(255,255,255,0.05)' : 'rgba(0, 212, 255, 0.15)'}; border: 1px solid ${isOutOfStock ? 'var(--border)' : 'var(--primary)'}; color: ${isOutOfStock ? 'var(--text-muted)' : 'var(--primary)'}; border-radius: var(--radius-sm); cursor: ${isOutOfStock ? 'not-allowed' : 'pointer'}; font-weight: 700; transition: var(--transition);" title="Thêm vào giỏ hàng">
              <i class="fa-solid fa-cart-plus"></i> Thêm
            </button>
            <button class="card-buy-now-btn" onclick="event.stopPropagation(); buyNow(${p.id})" ${isOutOfStock ? 'disabled' : ''} title="Mua ngay và thanh toán">
              <i class="fa-solid fa-bolt"></i> Mua ngay
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  updateResultsCount(productsToRender.length);
}

function renderSkeletonCards(count = 6) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = Array(count).fill(0).map(() => `
    <div class="product-card skeleton-card" style="pointer-events: none; opacity: 0.6;">
      <div style="width: 100%; aspect-ratio: 4/3; background: rgba(255,255,255,0.05); animation: pulse 1.2s infinite alternate;"></div>
      <div class="content" style="padding: 24px;">
        <div style="height: 14px; width: 35%; background: rgba(255,255,255,0.06); margin-bottom: 10px; border-radius: 4px;"></div>
        <div style="height: 22px; width: 85%; background: rgba(255,255,255,0.08); margin-bottom: 10px; border-radius: 4px;"></div>
        <div style="height: 14px; width: 45%; background: rgba(255,255,255,0.05); margin-bottom: 12px; border-radius: 4px;"></div>
        <div style="height: 24px; width: 60%; background: rgba(255,255,255,0.07); margin-bottom: 18px; border-radius: 4px;"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div style="height: 38px; background: rgba(255,255,255,0.05); border-radius: var(--radius-sm);"></div>
          <div style="height: 38px; background: rgba(255,255,255,0.05); border-radius: var(--radius-sm);"></div>
        </div>
        <div style="height: 38px; background: rgba(255,255,255,0.05); border-radius: var(--radius-sm); margin-top: 8px;"></div>
      </div>
    </div>
  `).join("");
}

function updateResultsCount(count) {
  const counter = document.getElementById("resultsCounter");
  if (!counter) return;

  let queryDetails = [];
  if (currentBrandFilter !== "all") queryDetails.push(`hãng <strong>${currentBrandFilter}</strong>`);
  if (currentCategoryFilter !== "all") queryDetails.push(`dòng <strong>${currentCategoryFilter}</strong>`);
  if (currentPriceRangeFilter !== "all") {
    const pLabel = currentPriceRangeFilter === "under50" ? "< 50 triệu" : (currentPriceRangeFilter === "50to100" ? "50 - 100 triệu" : "> 100 triệu");
    queryDetails.push(`giá <strong>${pLabel}</strong>`);
  }
  if (currentSearchTerm) queryDetails.push(`từ khóa "<strong>${currentSearchTerm}</strong>"`);

  const detailText = queryDetails.length > 0 ? ` (theo ${queryDetails.join(", ")})` : "";
  counter.innerHTML = `Hiển thị <strong>${count}</strong> trên tổng số <strong>${PRODUCTS.length}</strong> máy ảnh${detailText}`;
}

// ==========================================
// 5. ADVANCED SEARCH & FILTER SYSTEM
// ==========================================
let currentBrandFilter = "all";
let currentCategoryFilter = "all";
let currentPriceRangeFilter = "all";
let currentSortFilter = "default";
let currentSearchTerm = "";
let searchDebounceTimeout = null;

function initSearchAndFilter() {
  const searchInput = document.getElementById("searchBar") || document.querySelector(".search-bar");
  const searchBtn = document.getElementById("searchBtn");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const catSelect = document.getElementById("categoryFilter");
  const priceSelect = document.getElementById("priceFilter");
  const sortSelect = document.getElementById("sortFilter");
  const resetBtn = document.getElementById("resetFilterBtn");

  // Search input with debounce
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchDebounceTimeout);
      searchDebounceTimeout = setTimeout(() => {
        currentSearchTerm = e.target.value.toLowerCase().trim();
        applyFilters(true);
      }, 300);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        currentSearchTerm = searchInput.value.toLowerCase().trim();
        scrollToProducts();
        applyFilters(true);
      }
    });
  }

  // Search button click
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (searchInput) {
        currentSearchTerm = searchInput.value.toLowerCase().trim();
      }
      scrollToProducts();
      applyFilters(true);
    });
  }

  // Brand button tabs
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrandFilter = btn.getAttribute("data-brand") || "all";
      applyFilters(true);
    });
  });

  // Dropdown filters
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      currentCategoryFilter = e.target.value;
      applyFilters(true);
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      currentPriceRangeFilter = e.target.value;
      applyFilters(true);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSortFilter = e.target.value;
      applyFilters(false);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetFilters);
  }

  // Mega menu & Brand card clicks
  document.querySelectorAll("[data-filter-brand]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const brand = el.getAttribute("data-filter-brand");
      filterByBrand(brand);
    });
  });

  document.querySelectorAll("[data-filter-cat]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = el.getAttribute("data-filter-cat");
      filterByCategory(cat);
    });
  });
}

function scrollToProducts() {
  const section = document.getElementById("products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function filterByBrand(brand) {
  currentBrandFilter = brand;
  scrollToProducts();

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((b) => {
    if (b.getAttribute("data-brand") === brand) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  applyFilters(true);
}

function filterByCategory(cat) {
  currentCategoryFilter = cat;
  scrollToProducts();

  const catSelect = document.getElementById("categoryFilter");
  if (catSelect) catSelect.value = cat;

  applyFilters(true);
}

function applyFilters(showSkeleton = false) {
  if (showSkeleton) {
    renderSkeletonCards(3);
    setTimeout(() => {
      executeFilterPipeline();
    }, 250);
  } else {
    executeFilterPipeline();
  }
}

function executeFilterPipeline() {
  let filtered = [...PRODUCTS];

  // 1. Brand filter
  if (currentBrandFilter !== "all") {
    filtered = filtered.filter(p => p.brand.toLowerCase() === currentBrandFilter.toLowerCase());
  }

  // 2. Category filter
  if (currentCategoryFilter !== "all") {
    filtered = filtered.filter(p => p.category.toLowerCase().includes(currentCategoryFilter.toLowerCase()));
  }

  // 3. Price Range filter
  if (currentPriceRangeFilter === "under50") {
    filtered = filtered.filter(p => p.priceRaw < 50000000);
  } else if (currentPriceRangeFilter === "50to100") {
    filtered = filtered.filter(p => p.priceRaw >= 50000000 && p.priceRaw <= 100000000);
  } else if (currentPriceRangeFilter === "over100") {
    filtered = filtered.filter(p => p.priceRaw > 100000000);
  }

  // 4. Search keyword
  if (currentSearchTerm !== "") {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(currentSearchTerm) ||
      p.brand.toLowerCase().includes(currentSearchTerm) ||
      p.category.toLowerCase().includes(currentSearchTerm) ||
      p.shortDesc.toLowerCase().includes(currentSearchTerm) ||
      p.specs.some(s => s.toLowerCase().includes(currentSearchTerm))
    );
  }

  // 5. Sorting
  if (currentSortFilter === "priceAsc") {
    filtered.sort((a, b) => a.priceRaw - b.priceRaw);
  } else if (currentSortFilter === "priceDesc") {
    filtered.sort((a, b) => b.priceRaw - a.priceRaw);
  } else if (currentSortFilter === "ratingDesc") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSortFilter === "reviewDesc") {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  renderProductCards(filtered);
}

function resetFilters() {
  currentBrandFilter = "all";
  currentCategoryFilter = "all";
  currentPriceRangeFilter = "all";
  currentSortFilter = "default";
  currentSearchTerm = "";

  const searchInput = document.getElementById("searchBar") || document.querySelector(".search-bar");
  if (searchInput) searchInput.value = "";

  const catSelect = document.getElementById("categoryFilter");
  if (catSelect) catSelect.value = "all";

  const priceSelect = document.getElementById("priceFilter");
  if (priceSelect) priceSelect.value = "all";

  const sortSelect = document.getElementById("sortFilter");
  if (sortSelect) sortSelect.value = "default";

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((b) => {
    if (b.getAttribute("data-brand") === "all") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  applyFilters(true);
  showNotification("🔄 Đã đặt lại toàn bộ bộ lọc sản phẩm");
}

// ==========================================
// 6. PRODUCT DETAIL MODAL
// ==========================================
function openProductModal(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  const isOutOfStock = p.stock <= 0;
  const isLowStock = p.stock > 0 && p.stock <= 3;

  const badgeEl = document.getElementById("pdBadge");
  if (badgeEl) {
    badgeEl.textContent = p.badge || "";
    badgeEl.style.display = p.badge && !p.oldPriceRaw ? "inline-block" : "none";
  }

  document.getElementById("pdImage").src = p.image;
  document.getElementById("pdImage").alt = p.imageAlt;
  document.getElementById("pdCategory").innerHTML = `${p.brand} &bull; ${p.category}`;
  document.getElementById("pdName").textContent = p.name;
  document.getElementById("pdRating").innerHTML = `<span style="color: #ffd166;">★</span> <strong>${p.rating}</strong> <span style="color: var(--text-muted); font-size: 0.9em;">(${p.reviews} đánh giá thực tế)</span>`;

  const oldPriceHtml = p.oldPriceRaw 
    ? `<span style="text-decoration: line-through; font-size: 0.7em; color: var(--text-muted); margin-left: 10px; font-weight: 400;">${formatPrice(p.oldPriceRaw)}</span>` 
    : '';
  document.getElementById("pdPrice").innerHTML = `${p.price}${oldPriceHtml}`;

  // Description & Specs
  document.getElementById("pdDesc").innerHTML = `<strong>${p.shortDesc}</strong><br><br>${p.fullDesc}`;

  const specsList = document.getElementById("pdSpecs");
  if (specsList) {
    specsList.innerHTML = p.specs.map(s => `<li><i class="fa-solid fa-check"></i> ${s}</li>`).join("");
  }

  // Stock status notice
  let stockHtml = "";
  const addBtn = document.getElementById("pdAddCart");
  const buyNowBtn = document.getElementById("pdBuyNow");

  if (isOutOfStock) {
    stockHtml = `<div style="color: var(--accent); margin-top: 15px; font-weight: 700; font-size: 0.95rem; background: rgba(255, 107, 91, 0.1); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px solid rgba(255, 107, 91, 0.3);"><i class="fa-solid fa-circle-xmark"></i> Hiện tại sản phẩm đã hết hàng trong kho.</div>`;
    if (addBtn) {
      addBtn.disabled = true;
      addBtn.style.opacity = "0.4";
      addBtn.style.cursor = "not-allowed";
    }
    if (buyNowBtn) {
      buyNowBtn.disabled = true;
      buyNowBtn.style.opacity = "0.4";
      buyNowBtn.style.cursor = "not-allowed";
    }
  } else {
    const stockColor = isLowStock ? "#ffcc00" : "#22c55e";
    const stockBg = isLowStock ? "rgba(255, 204, 0, 0.1)" : "rgba(34, 197, 94, 0.1)";
    const stockIcon = isLowStock ? "fa-triangle-exclamation" : "fa-circle-check";
    stockHtml = `<div style="color: ${stockColor}; margin-top: 15px; font-weight: 700; font-size: 0.95rem; background: ${stockBg}; padding: 8px 14px; border-radius: var(--radius-sm); border: 1px solid ${stockColor}40;"><i class="fa-solid ${stockIcon}"></i> Còn ${p.stock} sản phẩm sẵn có tại showroom</div>`;

    if (addBtn) {
      addBtn.disabled = false;
      addBtn.style.opacity = "1";
      addBtn.style.cursor = "pointer";
      addBtn.onclick = () => addToCart(p.id, 1);
    }

    if (buyNowBtn) {
      buyNowBtn.disabled = false;
      buyNowBtn.style.opacity = "1";
      buyNowBtn.style.cursor = "pointer";
      buyNowBtn.onclick = () => buyNow(p.id);
    }
  }

  let stockEl = document.getElementById("pdStock");
  if (!stockEl && addBtn) {
    stockEl = document.createElement("div");
    stockEl.id = "pdStock";
    addBtn.parentElement.parentNode.insertBefore(stockEl, addBtn.parentElement);
  }
  if (stockEl) stockEl.innerHTML = stockHtml;

  const modal = document.getElementById("productDetailModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeProductModal() {
  const modal = document.getElementById("productDetailModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 7. HERO BANNER / SLIDER DYNAMICS
// ==========================================
let currentSlide = 0;
let totalSlides = 0;
let autoPlayInterval = null;

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
          <span style="display: inline-block; background: rgba(0, 212, 255, 0.2); border: 1px solid var(--primary); color: var(--primary); padding: 4px 14px; border-radius: 999px; font-weight: 800; font-size: 0.8rem; margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
            ${p.brand} Flagship
          </span>
          <h1 class="hero-title">${p.name}</h1>
          <p class="hero-subtitle">${p.heroSubtitle}</p>
          <p class="hero-description">${p.heroDesc}</p>
          
          <div style="display: flex; gap: 12px; margin-top: 25px; flex-wrap: wrap;">
            <a href="#products" class="hero-btn" onclick="event.preventDefault(); openProductModal(${p.id})">
              <span>Khám Phá</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button type="button" class="cta-btn secondary-btn" onclick="buyNow(${p.id})" style="padding: 12px 24px; border-radius: 999px; font-weight: 700;">
              <i class="fa-solid fa-bolt"></i> Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  heroDots.innerHTML = heroProducts.map((_, index) => `
    <span class="hero-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
  `).join("");

  showSlide(currentSlide);
  startSliderAutoPlay();
}

function showSlide(n) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;

  if (n >= totalSlides) currentSlide = 0;
  else if (n < 0) currentSlide = totalSlides - 1;
  else currentSlide = n;

  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  if (slides[currentSlide]) slides[currentSlide].classList.add("active");
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(++currentSlide);
}

function prevSlide() {
  showSlide(--currentSlide);
}

function goToSlide(n) {
  showSlide(n);
}

function startSliderAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 4500);
}

// ==========================================
// 8. CHECKOUT & PRICING ENGINE
// ==========================================
let couponDiscount = 0; // percentage

const VALID_COUPONS = {
  KNGSUMMER: 10,
  CAMERAPRO: 15,
  KNG5: 5,
  KNGSTORE: 50,
  KHANG: 99
};

function showCartItems() {
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");
  const form = document.getElementById("checkoutForm");
  if (!checkoutModal) return;

  if (form) {
    form.style.display = "block";
  }

  // Populate checkout item summary or empty view
  if (checkoutItems) {
    if (cart.length === 0) {
      checkoutItems.innerHTML = `
        <div class="cart-empty-view">
          <i class="fa-solid fa-cart-shopping"></i>
          <h3>Giỏ hàng đang trống</h3>
          <p>Bạn chưa thêm sản phẩm máy ảnh nào vào giỏ.</p>
          <button type="button" class="primary-btn" style="margin-top: 15px; padding: 10px 22px;" onclick="document.getElementById('checkoutModal').classList.remove('show'); scrollToProducts();">
            Khám phá máy ảnh ngay
          </button>
        </div>
      `;
    } else {
      checkoutItems.innerHTML = cart.map((item) => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return "";

        return `
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
      }).join("");
    }
  }

  updateCheckoutPricing();
  checkoutModal.classList.add("show");

  // Load provinces with offline-ready fallback
  loadProvinces();
  initPaymentTabs();
  initInstallmentCalc();
  initCouponEngine();
  initEwalletSelector();
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
  return Math.max(0, subtotal - discountAmount);
}

function updateCheckoutPricing() {
  let subtotal = 0;
  cart.forEach((item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      subtotal += product.priceRaw * item.quantity;
    }
  });

  const discountAmount = Math.round(subtotal * (couponDiscount / 100));
  const total = Math.max(0, subtotal - discountAmount);

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
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  updateInstallmentDisplay(total);
  updateVietQR(total);

  return total;
}

// ==========================================
// 9. ADDRESS SELECTOR (OFFLINE FALLBACK READY)
// ==========================================
function loadProvinces() {
  const select = document.getElementById("checkoutProvince");
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!select) return;

  if (select.options.length > 1) return;

  select.innerHTML = '<option value="">-- Chọn Tỉnh / Thành phố --</option>';

  // Load offline high-quality data immediately
  VIETNAM_ADDRESS_DATA.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.code;
    opt.textContent = p.name;
    select.appendChild(opt);
  });

  select.addEventListener("change", handleProvinceChange);
  if (districtSelect) districtSelect.addEventListener("change", handleDistrictChange);
}

function handleProvinceChange() {
  const provinceSelect = document.getElementById("checkoutProvince");
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!provinceSelect || !districtSelect || !wardSelect) return;

  const code = provinceSelect.value;
  districtSelect.innerHTML = '<option value="">-- Chọn Quận / Huyện --</option>';
  wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
  districtSelect.disabled = true;
  wardSelect.disabled = true;

  if (!code) return;

  const provinceData = VIETNAM_ADDRESS_DATA.find(p => p.code === code);
  if (provinceData) {
    provinceData.districts.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d.code;
      opt.textContent = d.name;
      districtSelect.appendChild(opt);
    });
    districtSelect.disabled = false;
  }
}

function handleDistrictChange() {
  const provinceSelect = document.getElementById("checkoutProvince");
  const districtSelect = document.getElementById("checkoutDistrict");
  const wardSelect = document.getElementById("checkoutWard");
  if (!provinceSelect || !districtSelect || !wardSelect) return;

  const pCode = provinceSelect.value;
  const dCode = districtSelect.value;
  wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
  wardSelect.disabled = true;

  if (!dCode) return;

  const provinceData = VIETNAM_ADDRESS_DATA.find(p => p.code === pCode);
  if (provinceData) {
    const districtData = provinceData.districts.find(d => d.code === dCode);
    if (districtData) {
      districtData.wards.forEach((w, idx) => {
        const opt = document.createElement("option");
        opt.value = w;
        opt.textContent = w;
        wardSelect.appendChild(opt);
      });
      wardSelect.disabled = false;
    }
  }
}

// ==========================================
// 10. PAYMENT METHOD & INSTALLMENT LOGIC
// ==========================================
function initPaymentTabs() {
  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.addEventListener("change", function () {
      document.querySelectorAll(".dynamic-area").forEach(a => a.classList.remove("active"));
      const area = document.getElementById("area-" + this.value);
      if (area) {
        area.classList.add("active");
        if (this.value === "bank-qr") {
          updateVietQR(getCheckoutTotal());
        }
        if (this.value === "installment") {
          updateInstallmentDisplay(getCheckoutTotal());
        }
      }
    });
  });
}

function updateVietQR(totalAmount) {
  const qrImg = document.getElementById("vietQrImg");
  const qrLoading = document.querySelector(".qr-loading");
  const vietQrMsg = document.getElementById("vietQrMsg");
  if (!qrImg) return;

  const orderId = "KNG" + Date.now().toString().slice(-6);
  if (vietQrMsg) vietQrMsg.textContent = orderId;

  const bankId = "MB";
  const accountNo = "190820268888";
  const accountName = "KNG STORE";
  const amount = totalAmount;
  const addInfo = encodeURIComponent(orderId);

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
    if (qrLoading) qrLoading.textContent = "Chuyển khoản theo số tài khoản bên cạnh";
  };
  tempImg.src = qrUrl;
}

function initInstallmentCalc() {
  const termSelect = document.getElementById("installmentTerm");
  const bankSelect = document.getElementById("installmentBank");
  if (!termSelect) return;

  termSelect.onchange = () => updateInstallmentDisplay(getCheckoutTotal());
  if (bankSelect) bankSelect.onchange = () => updateInstallmentDisplay(getCheckoutTotal());

  updateInstallmentDisplay(getCheckoutTotal());
}

function updateInstallmentDisplay(total) {
  const termSelect = document.getElementById("installmentTerm");
  const instTotal = document.getElementById("instTotalValue");
  const instFee = document.getElementById("instConversionFee");
  const instMonthly = document.getElementById("instMonthlyPay");
  if (!termSelect || !instMonthly) return;

  const months = parseInt(termSelect.value) || 3;
  const feeRate = 0.02; // 2% phí chuyển đổi hồ sơ
  const fee = Math.round(total * feeRate);
  const totalWithFee = total + fee;
  const monthly = Math.round(totalWithFee / months);

  if (instTotal) instTotal.textContent = formatPrice(total);
  if (instFee) instFee.textContent = formatPrice(fee);
  if (instMonthly) instMonthly.textContent = formatPrice(monthly) + " / tháng";
}

function initCouponEngine() {
  const btn = document.getElementById("applyCouponBtn");
  if (!btn) return;

  btn.onclick = () => {
    const input = document.getElementById("couponCode");
    const msg = document.getElementById("couponMessage");
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    msg.className = "coupon-message";
    msg.textContent = "";

    if (!code) {
      msg.className = "coupon-message error";
      msg.textContent = "⚠️ Vui lòng nhập mã ưu đãi.";
      return;
    }

    if (VALID_COUPONS[code] !== undefined) {
      couponDiscount = VALID_COUPONS[code];
      msg.className = "coupon-message success";
      msg.textContent = `✅ Áp dụng thành công! Đã giảm ${couponDiscount}% cho đơn hàng.`;
      updateCheckoutPricing();
    } else {
      couponDiscount = 0;
      msg.className = "coupon-message error";
      msg.textContent = `❌ Mã "${code}" không hợp lệ hoặc đã hết lượt dùng.`;
      updateCheckoutPricing();
    }
  };
}

function initEwalletSelector() {
  document.querySelectorAll(".ewallet-logo-select").forEach((el) => {
    el.onclick = function () {
      document.querySelectorAll(".ewallet-logo-select").forEach(e => e.classList.remove("active"));
      this.classList.add("active");
    };
  });
}

// ==========================================
// 11. ORDER PLACEMENT & SUCCESS MODAL
// ==========================================
let successCountdownInterval = null;
let successCountdownTimeout = null;

function clearSuccessTimers() {
  if (successCountdownInterval) {
    clearInterval(successCountdownInterval);
    successCountdownInterval = null;
  }
  if (successCountdownTimeout) {
    clearTimeout(successCountdownTimeout);
    successCountdownTimeout = null;
  }
}

function showSuccessModal(orderData) {
  const successModal = document.getElementById("successModal");
  const successTitle = document.getElementById("successTitle");
  const successMessage = document.getElementById("successMessage");
  const successOrderId = document.getElementById("successOrderId");
  const successDetails = document.getElementById("successDetails");
  const emailNote = document.getElementById("successEmailNote");
  const countdownSec = document.getElementById("countdownSec");

  if (!successModal) return;

  const paymentNames = {
    cash: "Tiền mặt khi nhận hàng (COD)",
    "bank-qr": "Chuyển khoản VietQR tức thì",
    installment: "Trả góp 0% qua thẻ tín dụng",
    ewallet: "Ví điện tử / Thẻ ATM"
  };

  successTitle.textContent = "🎉 Thanh toán thành công!";
  successMessage.textContent = "Cảm ơn bạn đã tin tưởng mua sắm tại KNG Store";
  if (successOrderId) successOrderId.textContent = "#" + orderData.id;

  if (emailNote) {
    if (orderData.customer.email) {
      emailNote.innerHTML = `Hệ thống đã gửi hóa đơn điện tử và chi tiết bảo hành đến <strong>${orderData.customer.email}</strong>.`;
      emailNote.style.display = "block";
    } else {
      emailNote.innerHTML = `Đơn hàng của bạn đã được ghi nhận. Nhân viên KNG Store sẽ liên hệ xác nhận trong 15 phút.`;
      emailNote.style.display = "block";
    }
  }

  if (successDetails) {
    const itemsListHtml = orderData.items.map(it => `<div>&bull; ${it.name} <strong>x${it.quantity}</strong></div>`).join("");

    successDetails.innerHTML = `
      <div class="success-detail-item">
        <span class="success-detail-label">👤 Khách hàng:</span>
        <span class="success-detail-value">${orderData.customer.name} (${orderData.customer.phone})</span>
      </div>
      <div class="success-detail-item">
        <span class="success-detail-label">📍 Giao tới:</span>
        <span class="success-detail-value">${orderData.customer.addressDetail}, ${orderData.customer.ward}, ${orderData.customer.district}, ${orderData.customer.province}</span>
      </div>
      <div class="success-detail-item">
        <span class="success-detail-label">📦 Sản phẩm:</span>
        <span class="success-detail-value">${itemsListHtml}</span>
      </div>
      <div class="success-detail-item">
        <span class="success-detail-label">💳 Phương thức:</span>
        <span class="success-detail-value">${paymentNames[orderData.paymentMethod] || orderData.paymentMethod}</span>
      </div>
      <div class="success-detail-item">
        <span class="success-detail-label">💰 Tổng thanh toán:</span>
        <span class="success-detail-value" style="color: var(--primary); font-size: 1.15rem; font-weight: 800;">${formatPrice(orderData.total)}</span>
      </div>
    `;
  }

  successModal.classList.add("show");
  clearSuccessTimers();

  let timeLeft = 6;
  if (countdownSec) countdownSec.textContent = timeLeft;

  successCountdownInterval = setInterval(() => {
    timeLeft--;
    if (countdownSec) countdownSec.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(successCountdownInterval);
      successCountdownInterval = null;
      closeSuccessModal();
    }
  }, 1000);

  successCountdownTimeout = setTimeout(() => {
    closeSuccessModal();
  }, 6000);
}

function viewOrderDetails() {
  clearSuccessTimers();
  closeSuccessModal();
  hienThiLichSuMuaHang();
}

function closeSuccessModal() {
  clearSuccessTimers();
  const modal = document.getElementById("successModal");
  if (modal) modal.classList.remove("show");

  const checkoutModal = document.getElementById("checkoutModal");
  if (checkoutModal) checkoutModal.classList.remove("show");
}

// ==========================================
// 12. ORDER HISTORY (LỊCH SỬ MUA HÀNG)
// ==========================================
const HISTORY_STORAGE_KEY = "kng_store_purchase_history";

function luuDonHangVaoLichSu(orderData) {
  let history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
  history.unshift(orderData);
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
}

function hienThiLichSuMuaHang() {
  const historyModal = document.getElementById("historyModal");
  const historyList = document.getElementById("historyOrdersList");
  if (!historyModal || !historyList) return;

  const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)) || [];
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = `
      <div class="history-empty">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <h3>Chưa có đơn hàng nào</h3>
        <p>Bạn chưa thực hiện đơn đặt hàng nào tại KNG Store.</p>
        <button type="button" class="primary-btn" style="margin-top: 15px; padding: 10px 20px;" onclick="dongLichSuMuaHang(); scrollToProducts();">
          Bắt đầu mua sắm
        </button>
      </div>
    `;
  } else {
    historyList.innerHTML = history.map((order) => {
      const orderDate = new Date(order.timestamp);
      const formattedDate = orderDate.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      const itemsHtml = (order.items || []).map((it) => `
        <div class="order-card-item">
          <img class="order-item-thumb" src="${it.image}" alt="${it.name}" />
          <div class="order-item-meta">
            <h5>${it.name}</h5>
            <span>Số lượng: <strong>x${it.quantity}</strong> &bull; Đơn giá: <strong>${formatPrice(it.priceRaw)}</strong></span>
          </div>
          <span style="font-weight: 700; color: var(--text);">${formatPrice(it.priceRaw * it.quantity)}</span>
        </div>
      `).join("");

      return `
        <div class="history-order-card">
          <div class="order-card-header">
            <div class="order-card-id">
              <i class="fa-solid fa-receipt"></i> #${order.id}
            </div>
            <span class="order-status-badge"><i class="fa-solid fa-circle-check"></i> ${order.status || 'Đã xác nhận'}</span>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${formattedDate}</div>
          </div>

          <div class="order-card-body">
            ${itemsHtml}
          </div>

          <div class="order-card-footer">
            <div class="order-shipping-info">
              <i class="fa-solid fa-location-dot"></i> Giao tới: ${order.customer?.name || 'Khách hàng'} - ${order.customer?.phone || ''} (${order.customer?.addressDetail || ''}, ${order.customer?.district || ''})
            </div>
            <div class="order-card-total">
              <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 8px;">Tổng tiền:</span>
              <span class="order-card-total-amount">${formatPrice(order.total)}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  historyModal.classList.add("show");
}

function dongLichSuMuaHang() {
  const historyModal = document.getElementById("historyModal");
  if (historyModal) historyModal.classList.remove("show");
}

function xoaTatCaLichSu() {
  const confirmed = confirm("⚠️ Bạn chắc chắn muốn xóa toàn bộ lịch sử đơn hàng? Hành động này không thể hoàn tác.");
  if (confirmed) {
    localStorage.removeItem(HISTORY_STORAGE_KEY);
    showNotification("🗑️ Đã xóa toàn bộ lịch sử mua hàng.");
    hienThiLichSuMuaHang();
  }
}

// ==========================================
// 13. DOM INITIALIZATION & FORM HANDLERS
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  // Sync products data with updated stock
  PRODUCTS = getSynchronizedProducts();

  // Initial cart badge update
  updateCartCount();

  // Render hero banner & initial product cards with skeleton
  renderHeroBanner();
  renderSkeletonCards(6);
  setTimeout(() => {
    renderProductCards(PRODUCTS);
    initSearchAndFilter();
  }, 350);

  // Close modals on overlay or escape
  const pdModal = document.getElementById("productDetailModal");
  if (pdModal) {
    pdModal.addEventListener("click", (e) => {
      if (e.target === pdModal) closeProductModal();
    });
  }

  const pdClose = document.getElementById("pdClose");
  if (pdClose) pdClose.addEventListener("click", closeProductModal);

  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckout = document.getElementById("closeCheckout");
  if (closeCheckout) {
    closeCheckout.addEventListener("click", () => {
      checkoutModal.classList.remove("show");
    });
  }
  if (checkoutModal) {
    checkoutModal.addEventListener("click", (e) => {
      if (e.target === checkoutModal) checkoutModal.classList.remove("show");
    });
  }

  const historyModal = document.getElementById("historyModal");
  if (historyModal) {
    historyModal.addEventListener("click", (e) => {
      if (e.target === historyModal) dongLichSuMuaHang();
    });
  }

  // Cart button
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", showCartItems);

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.getElementById(href.substring(1));
      if (targetEl) {
        e.preventDefault();
        window.scrollTo({
          top: targetEl.offsetTop - 85,
          behavior: "smooth"
        });
      }
    });
  });

  // Sticky header blur effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // CHECKOUT FORM SUBMISSION & VALIDATION
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (cart.length === 0) {
        showNotification("❌ Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm.", "error");
        return;
      }

      // Clear previous error styles
      document.querySelectorAll(".input-shake-error").forEach(el => el.classList.remove("input-shake-error"));

      const nameInput = document.getElementById("customerName");
      const phoneInput = document.getElementById("customerPhone");
      const emailInput = document.getElementById("customerEmail");
      const provinceInput = document.getElementById("checkoutProvince");
      const districtInput = document.getElementById("checkoutDistrict");
      const wardInput = document.getElementById("checkoutWard");
      const addressDetailInput = document.getElementById("customerAddressDetail");
      const noteInput = document.getElementById("customerNote");
      const paymentChecked = document.querySelector('input[name="payment"]:checked');

      const name = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const email = emailInput?.value.trim() || "";
      const provinceCode = provinceInput?.value;
      const districtCode = districtInput?.value;
      const ward = wardInput?.value;
      const addressDetail = addressDetailInput?.value.trim();
      const note = noteInput?.value.trim() || "";

      let hasError = false;

      function markError(el) {
        if (el) {
          el.classList.add("input-shake-error");
          el.focus();
          hasError = true;
        }
      }

      if (!name || name.length < 2) {
        markError(nameInput);
        showNotification("⚠️ Vui lòng nhập đầy đủ họ và tên người nhận.", "error");
        return;
      }

      if (!phone || !/^(0[3|5|7|8|9])+([0-9]{8})$/.test(phone)) {
        markError(phoneInput);
        showNotification("⚠️ Số điện thoại không hợp lệ (cần 10 số, bắt đầu bằng 03, 05, 07, 08, 09).", "error");
        return;
      }

      if (!provinceCode) {
        markError(provinceInput);
        showNotification("⚠️ Vui lòng chọn Tỉnh / Thành phố giao hàng.", "error");
        return;
      }

      if (!districtCode) {
        markError(districtInput);
        showNotification("⚠️ Vui lòng chọn Quận / Huyện.", "error");
        return;
      }

      if (!ward) {
        markError(wardInput);
        showNotification("⚠️ Vui lòng chọn Phường / Xã.", "error");
        return;
      }

      if (!addressDetail || addressDetail.length < 3) {
        markError(addressDetailInput);
        showNotification("⚠️ Vui lòng nhập số nhà và tên đường cụ thể.", "error");
        return;
      }

      if (!paymentChecked) {
        showNotification("⚠️ Vui lòng chọn một phương thức thanh toán.", "error");
        return;
      }

      // Check stock availability again before processing
      for (const item of cart) {
        const prod = PRODUCTS.find(p => p.id === item.id);
        if (!prod || prod.stock < item.quantity) {
          showNotification(`❌ Máy ảnh ${prod?.name || 'Sản phẩm'} không đủ số lượng tồn kho!`, "error");
          return;
        }
      }

      const provinceName = provinceInput.options[provinceInput.selectedIndex]?.text || provinceCode;
      const districtName = districtInput.options[districtInput.selectedIndex]?.text || districtCode;
      const totalAmount = getCheckoutTotal();
      const orderId = `KNG-${Math.floor(100000 + Math.random() * 900000)}`;

      const orderData = {
        id: orderId,
        timestamp: new Date().toISOString(),
        customer: {
          name,
          phone,
          email,
          province: provinceName,
          district: districtName,
          ward,
          addressDetail,
          note
        },
        paymentMethod: paymentChecked.value,
        items: cart.map(item => {
          const p = PRODUCTS.find(prod => prod.id === item.id);
          return {
            id: item.id,
            name: p?.name || "Máy ảnh KNG",
            brand: p?.brand || "",
            priceRaw: p?.priceRaw || 0,
            quantity: item.quantity,
            image: p?.image || ""
          };
        }),
        subtotal: cart.reduce((sum, it) => sum + (PRODUCTS.find(p => p.id === it.id)?.priceRaw || 0) * it.quantity, 0),
        discount: couponDiscount,
        total: totalAmount,
        status: "Đã xác nhận"
      };

      // 1. Trừ tồn kho thực tế
      deductProductStocks(cart);

      // 2. Lưu đơn hàng vào lịch sử
      luuDonHangVaoLichSu(orderData);

      // 3. Làm sạch giỏ hàng
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      // 4. Reset form & đóng checkout
      checkoutForm.reset();
      checkoutModal.classList.remove("show");

      // 5. Cập nhật lại giao diện sản phẩm với số tồn kho mới
      renderProductCards(PRODUCTS);

      // 6. Hiển thị modal thành công
      showSuccessModal(orderData);
    });
  }

  // Consultation Modal handler
  const consultBtn = document.getElementById("consultBtn");
  const consultModal = document.getElementById("consultationModal");
  const closeConsult = document.getElementById("closeConsult");
  const consultForm = document.querySelector(".consult-form");

  if (consultBtn && consultModal) {
    consultBtn.addEventListener("click", (e) => {
      e.preventDefault();
      consultModal.classList.add("show");
    });
  }
  if (closeConsult && consultModal) {
    closeConsult.addEventListener("click", () => consultModal.classList.remove("show"));
  }
  if (consultModal) {
    consultModal.addEventListener("click", (e) => {
      if (e.target === consultModal) consultModal.classList.remove("show");
    });
  }
  if (consultForm) {
    consultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification("✅ Cảm ơn bạn! Chuyên gia KNG Store sẽ liên hệ tư vấn trong 10 phút.");
      consultForm.reset();
      setTimeout(() => {
        if (consultModal) consultModal.classList.remove("show");
      }, 1200);
    });
  }
});

// ==========================================
// 14. AUTH & ACCOUNT MANAGEMENT
// ==========================================
(function () {
  const AUTH_USERS_KEY = "kng_registered_users";
  const AUTH_TOKEN_KEY = "kng_auth_token";
  const AUTH_USER_KEY = "kng_auth_user";

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

  function getAvatarUrl(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "User")}&background=0a0e27&color=00d4ff&size=80&bold=true`;
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

  function updateNavbarState() {
    const session = loadSession();
    if (session && session.user) {
      if (accountBtn) accountBtn.style.display = "none";
      if (userProfileWrapper) userProfileWrapper.style.display = "inline-block";
      const avatarSrc = session.user.avatar || getAvatarUrl(session.user.name);
      if (userAvatar) userAvatar.src = avatarSrc;
      if (dropdownAvatar) dropdownAvatar.src = avatarSrc;
      if (dropdownName) dropdownName.textContent = session.user.name;
      if (dropdownEmail) dropdownEmail.textContent = session.user.email;
    } else {
      if (accountBtn) accountBtn.style.display = "flex";
      if (userProfileWrapper) userProfileWrapper.style.display = "none";
      if (userDropdown) userDropdown.classList.remove("show");
    }
  }

  function openAuthModal(tab = "login") {
    if (authModal) authModal.classList.add("show");
    switchTab(tab);
  }

  function closeAuthModal() {
    if (authModal) authModal.classList.remove("show");
  }

  function switchTab(tabName) {
    authTabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
    if (loginForm) loginForm.style.display = tabName === "login" ? "block" : "none";
    if (registerForm) registerForm.style.display = tabName === "register" ? "block" : "none";
    if (forgotForm) forgotForm.style.display = tabName === "forgot" ? "block" : "none";
  }

  if (accountBtn) accountBtn.addEventListener("click", () => openAuthModal("login"));
  if (authClose) authClose.addEventListener("click", closeAuthModal);
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  document.querySelectorAll("[data-switch]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab(link.dataset.switch);
    });
  });

  // Password toggle
  document.querySelectorAll(".toggle-password").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.querySelector("i")?.classList.toggle("fa-eye", !isHidden);
      btn.querySelector("i")?.classList.toggle("fa-eye-slash", isHidden);
    });
  });

  // User avatar dropdown
  if (userProfileWrapper) {
    userProfileWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      if (userDropdown) userDropdown.classList.toggle("show");
    });
  }

  document.addEventListener("click", (e) => {
    if (userDropdown && userProfileWrapper && !userProfileWrapper.contains(e.target)) {
      userDropdown.classList.remove("show");
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      localStorage.removeItem("kng_remember");
      sessionStorage.removeItem(AUTH_TOKEN_KEY);
      sessionStorage.removeItem(AUTH_USER_KEY);
      updateNavbarState();
      showNotification("Đăng xuất thành công!");
    });
  }

  // LOGIN FORM
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail")?.value.trim();
      const password = document.getElementById("loginPassword")?.value;
      const remember = document.getElementById("rememberMe")?.checked;

      const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        showNotification("❌ Email hoặc mật khẩu không chính xác.", "error");
        return;
      }

      const token = "kng_" + Date.now();
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(AUTH_TOKEN_KEY, token);
      storage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      if (remember) localStorage.setItem("kng_remember", "1");

      closeAuthModal();
      updateNavbarState();
      loginForm.reset();
      showNotification(`🎉 Chào mừng trở lại, ${user.name}!`);
    });
  }

  // REGISTER FORM
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName")?.value.trim();
      const email = document.getElementById("regEmail")?.value.trim();
      const phone = document.getElementById("regPhone")?.value.trim();
      const password = document.getElementById("regPassword")?.value;
      const confirmPassword = document.getElementById("regConfirmPassword")?.value;

      if (password.length < 6) {
        showNotification("⚠️ Mật khẩu phải có tối thiểu 6 ký tự.", "error");
        return;
      }
      if (password !== confirmPassword) {
        showNotification("⚠️ Mật khẩu nhập lại không khớp.", "error");
        return;
      }

      const users = JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || "[]");
      if (users.find(u => u.email === email)) {
        showNotification("❌ Email này đã được đăng ký tài khoản.", "error");
        return;
      }

      users.push({ name, email, phone, password, createdAt: new Date().toISOString() });
      localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));

      showNotification("✅ Đăng ký tài khoản thành công! Vui lòng đăng nhập.");
      registerForm.reset();
      switchTab("login");
      const loginEmailInput = document.getElementById("loginEmail");
      if (loginEmailInput) loginEmailInput.value = email;
    });
  }

  updateNavbarState();
})();
