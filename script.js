// =========================
// KNG STORE - MAIN SCRIPT
// =========================

// =========================
// PRODUCTS DATA
// =========================
const PRODUCTS = [
  {
    id: 0,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canon EOS R5",
    category: "Mirrorless Full-frame",
    name: "Canon EOS R5",
    rating: "★★★★★",
    price: "150.000.000 VNĐ",
    priceRaw: 150000000,
    description: "Quay 8K, lấy nét siêu nhanh, chuẩn cho nhiếp ảnh chuyên nghiệp. Canon EOS R5 là chiếc máy ảnh mirrorless hàng đầu với khả năng quay video 8K RAW cùng cảm biến 45MP full-frame thế hệ mới.",
    specs: [
      "Cảm biến Full-frame 45MP CMOS",
      "Quay video 8K RAW 24fps",
      "Lấy nét siêu nhanh DPAF II (0.05s)",
      "ISO native 100-51,200",
      "Chống rung IBIS 8 bậc",
      "Kết nối Wi-Fi 6 & Bluetooth 5.0"
    ]
  },
  {
    id: 1,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sony A7R IV",
    category: "Mirrorless 61MP",
    name: "Sony A7R IV",
    rating: "★★★★★",
    price: "120.000.000 VNĐ",
    priceRaw: 120000000,
    description: "Độ phân giải cực cao, hoàn hảo cho studio và nhiếp ảnh thương mại. Sony A7R IV với cảm biến 61MP cho ảnh cực kỳ chi tiết, phù hợp cho in ấn khổ lớn và chụp ảnh phong cảnh.",
    specs: [
      "Cảm biến 61MP Full-frame BSI CMOS",
      "AF 425 điểm pha lấy nét",
      "Quay 4K 30fps Super 35",
      "Độ phân giải cực cao — in khổ cực lớn",
      "Real-time Eye AF & Animal AF",
      "Thân máy chống bụi/nước chuẩn IPX4"
    ]
  },
  {
    id: 2,
    badge: "New",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nikon Z6 II",
    category: "Hybrid Camera",
    name: "Nikon Z6 II",
    rating: "★★★★★",
    price: "80.000.000 VNĐ",
    priceRaw: 80000000,
    description: "Hiệu năng cân bằng cho cả quay phim và chụp ảnh chuyên sâu. Nikon Z6 II là lựa chọn hybrid hoàn hảo với bộ xử lý kép EXPEED 6, cho phép quay 4K 60fps và chụp liên tục 14fps.",
    specs: [
      "Cảm biến 24.5MP Full-frame BSI CMOS",
      "Hybrid AF 273 điểm pha",
      "Quay 4K 60fps & ProRes RAW",
      "Chụp liên tục 14fps với AF",
      "Bộ xử lý kép EXPEED 6",
      "Khe cắm kép UHS-II & CFexpress"
    ]
  },
  {
    id: 3,
    badge: "Retro",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fujifilm X-T4",
    category: "APS-C Creative",
    name: "Fujifilm X-T4",
    rating: "★★★★★",
    price: "70.000.000 VNĐ",
    priceRaw: 70000000,
    description: "Thiết kế cổ điển, màu film đẹp, cực hợp người sáng tạo nội dung. Fujifilm X-T4 nổi tiếng với 18 mô phỏng film độc quyền cho màu sắc phim analog đỉnh cao ngay trong máy.",
    specs: [
      "Cảm biến 26.1MP X-Trans CMOS IV",
      "18 mô phỏng màu Film Fujifilm",
      "Quay 4K 60fps / 240fps slow-motion",
      "Thiết kế retro, dial cơ học",
      "IBIS 6.5 bậc bù rung",
      "Pin 500 shot — dung lượng lớn nhất dòng X"
    ]
  },
  {
    id: 4,
    badge: "Pro DSLR",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canon EOS 5D Mark IV",
    category: "DSLR Full-frame",
    name: "Canon EOS 5D Mark IV",
    rating: "★★★★★",
    price: "90.000.000 VNĐ",
    priceRaw: 90000000,
    description: "Biểu tượng DSLR bền bỉ cho chụp cưới, sự kiện và studio. Canon EOS 5D Mark IV là chuẩn mực DSLR chuyên nghiệp với độ bền vượt trội, kết nối GPS/Wi-Fi tích hợp và hiệu năng đáng tin cậy trong mọi điều kiện.",
    specs: [
      "Cảm biến 30.4MP Full-frame CMOS",
      "AF 61 điểm — 41 cross-type",
      "Quay 4K 30fps / Full HD 120fps",
      "Thân máy chống bụi/nước cao cấp",
      "GPS & Wi-Fi tích hợp",
      "Khe nhớ kép CF + SD"
    ]
  },
  {
    id: 5,
    badge: "Sports",
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sony A9 II",
    category: "Speed Performance",
    name: "Sony A9 II",
    rating: "★★★★★",
    price: "110.000.000 VNĐ",
    priceRaw: 110000000,
    description: "Tốc độ chụp siêu nhanh cho thể thao, sự kiện và báo chí. Sony A9 II với tốc độ chụp 20fps silent, không bị blackout, là vũ khí tối thượng cho nhiếp ảnh thể thao và báo chí.",
    specs: [
      "Cảm biến 24.2MP Full-frame Stacked CMOS",
      "AF 693 điểm lấy nét siêu tốc",
      "Chụp 20fps liên tục, không blackout",
      "Quay 4K 60fps video chuyên nghiệp",
      "LAN port cho truyền ảnh tốc độ cao",
      "Real-time Eye AF & Bird AF"
    ]
  }
];

// =========================
// RENDER PRODUCT CARDS
// =========================
function renderProductCards() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card" onclick="openProductModal(${p.id})">
      <span class="product-badge">${p.badge}</span>
      <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" />
      <div class="content">
        <p class="product-category">${p.category}</p>
        <h3>${p.name}</h3>
        <div class="rating">${p.rating}</div>
        <p class="price">${p.price}</p>
        <button class="view-detail-btn" onclick="event.stopPropagation(); openProductModal(${p.id})">
          <i class="fa-solid fa-eye"></i> Xem chi tiết
        </button>
      </div>
    </div>
  `).join("");
}

// =========================
// PRODUCT DETAIL MODAL
// =========================
function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  document.getElementById("pdBadge").textContent = p.badge;
  document.getElementById("pdImage").src = p.image;
  document.getElementById("pdImage").alt = p.imageAlt;
  document.getElementById("pdCategory").textContent = p.category;
  document.getElementById("pdName").textContent = p.name;
  document.getElementById("pdRating").textContent = p.rating;
  document.getElementById("pdPrice").textContent = p.price;
  document.getElementById("pdDesc").textContent = p.description;

  const specsList = document.getElementById("pdSpecs");
  specsList.innerHTML = p.specs.map((s) => `<li><i class="fa-solid fa-check"></i>${s}</li>`).join("");

  const addBtn = document.getElementById("pdAddCart");
  addBtn.onclick = function () {
    addToCart(p.name, p.priceRaw);
  };

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

  // Render cards
  renderProductCards();
});


// =========================
// HERO BANNER / SLIDER
// =========================
let currentSlide = 0;
const totalSlides = 4;
let autoPlayInterval;

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
  const count = cart.length;
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
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification(`🛒 ${productName} đã được thêm vào giỏ hàng!`);
}

// =========================
// PRICE HELPERS
// =========================
function parsePrice(priceText) {
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
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutTotal = document.getElementById("checkoutTotal");

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

  // Product image map for known products
  const productImages = {
    "Canon EOS R5":
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=80&q=80",
    "Sony A7R IV":
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=80&q=80",
    "Nikon Z6 II":
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=80&q=80",
    "Fujifilm X-T4":
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=80&q=80",
    "Canon EOS 5D Mark IV":
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=80&q=80",
    "Sony A9 II":
      "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=80&q=80",
  };

  // Populate summary list
  if (checkoutItems) {
    checkoutItems.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const priceNumber = parsePrice(item.price);
      subtotal += priceNumber;
      const imgSrc =
        productImages[item.name] ||
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=80&q=80";

      checkoutItems.innerHTML += `
        <div class="checkout-summary-item">
          <img class="summary-item-img" src="${imgSrc}" alt="${item.name}" />
          <div class="summary-item-info">
            <h4>${item.name}</h4>
            <span>Số lượng: 1 &nbsp;·&nbsp;
              <button onclick="removeFromCart(${index})" style="background:none;border:none;color:#ff5252;cursor:pointer;font-size:0.75rem;font-weight:600;padding:0;">✕ Xóa</button>
            </span>
          </div>
          <span class="summary-item-price">${item.price}</span>
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
    subtotal += parsePrice(item.price);
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
    subtotal += parsePrice(item.price);
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
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  if (cart.length === 0) {
    document.getElementById("checkoutModal").classList.remove("show");
    showNotification("Sản phẩm đã được xóa khỏi giỏ hàng");
  } else {
    showCartItems();
    showNotification("Sản phẩm đã được xóa khỏi giỏ hàng");
  }
}

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
  showNotification("🔍 Tính năng Xem chi tiết đơn hàng đang được phát triển!");
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
  document.getElementById("checkoutTotalRight").textContent = "0đ";
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

  // =========================
  // BUY BUTTONS
  // =========================
  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = productCard.querySelector(".price").textContent;

      addToCart(productName, productPrice);

      this.textContent = "Đã thêm ✓";
      this.disabled = true;

      setTimeout(() => {
        this.textContent = "Thêm vào giỏ";
        this.disabled = false;
      }, 1500);
    });
  });

  // =========================
  // CART BUTTON
  // =========================
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", showCartItems);
  }

  // =========================
  // SEARCH FUNCTION
  // =========================
  const searchBtn = document.querySelector(".search-btn");
  const searchBar = document.querySelector(".search-bar");
  const productCards = document.querySelectorAll(".product-card");

  function searchProducts() {
    if (!searchBar) return;

    const query = searchBar.value.trim().toLowerCase();
    let found = false;

    productCards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const category =
        card.querySelector(".product-category")?.textContent.toLowerCase() ||
        "";
      const description =
        card.querySelector(".product-desc")?.textContent.toLowerCase() || "";

      if (
        !query ||
        title.includes(query) ||
        category.includes(query) ||
        description.includes(query)
      ) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!query) return;

    if (found) {
      showNotification(`🔍 Đã tìm thấy kết quả cho: "${query}"`);
    } else {
      showNotification("❌ Không tìm thấy sản phẩm phù hợp.");
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", searchProducts);
  }

  if (searchBar) {
    searchBar.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchProducts();
      }
    });
  }

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
      ".product-card, .brand-card, .feature-card, .testimonial-card, .section-title h2",
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

      const name = document.getElementById("customerName")?.value.trim();
      const phone = document.getElementById("customerPhone")?.value.trim();
      const province = document.getElementById("checkoutProvince");
      const district = document.getElementById("checkoutDistrict");
      const ward = document.getElementById("checkoutWard");
      const streetDetail = document
        .getElementById("customerAddressDetail")
        ?.value.trim();
      const paymentElement = document.querySelector(
        'input[name="payment"]:checked',
      );

      // Validate required fields
      if (!name || !phone) {
        showNotification("⚠️ Vui lòng nhập đầy đủ họ tên và số điện thoại.");
        return;
      }

      if (
        !province?.value ||
        !district?.value ||
        !ward?.value ||
        !streetDetail
      ) {
        showNotification("⚠️ Vui lòng chọn đầy đủ địa chỉ giao hàng.");
        return;
      }

      if (!paymentElement) {
        showNotification("⚠️ Vui lòng chọn hình thức thanh toán.");
        return;
      }

      const paymentValue = paymentElement.value;
      const totalFormatted = formatPrice(getCheckoutTotal());

      // === LƯU LỊCH SỬ MUA HÀNG ===
      // Lấy danh sách tên sản phẩm từ giỏ hàng
      const productNames = cart.map((item) => item.name);
      // Lấy tổng tiền (số, không phải string)
      const totalAmount = getCheckoutTotal();
      // Gọi hàm lưu lịch sử
      luuDonHangVaoLichSu(productNames, totalAmount);

      // Show success modal with payment details
      const email =
        document.getElementById("customerEmail")?.value.trim() || "";
      showSuccessModal(name, paymentValue, totalFormatted, email);

      // Hide checkout form
      checkoutForm.style.display = "none";

      // Close checkout modal after showing success modal
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
