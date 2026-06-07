// =========================
// KNG STORE - MAIN SCRIPT
// =========================

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
});

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
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
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
  if (couponMessage) { couponMessage.textContent = ""; couponMessage.className = "coupon-message"; }
  if (discountRow) discountRow.style.display = "none";

  // Product image map for known products
  const productImages = {
    "Canon EOS R5": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=80&q=80",
    "Sony A7R IV": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=80&q=80",
    "Nikon Z6 II": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=80&q=80",
    "Fujifilm X-T4": "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=80&q=80",
    "Canon EOS 5D Mark IV": "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=80&q=80",
    "Sony A9 II": "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=80&q=80",
  };

  // Populate summary list
  if (checkoutItems) {
    checkoutItems.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const priceNumber = parsePrice(item.price);
      subtotal += priceNumber;
      const imgSrc = productImages[item.name] || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=80&q=80";

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
  districtSelect.innerHTML = '<option value="">-- Chọn Quận / Huyện --</option>';
  wardSelect.innerHTML = '<option value="">-- Chọn Phường / Xã --</option>';
  districtSelect.disabled = true;
  wardSelect.disabled = true;

  if (!code) return;

  districtSelect.innerHTML = '<option value="">Đang tải...</option>';

  try {
    const res = await fetch(`https://provinces.open-api.vn/api/p/${code}?depth=2`);
    if (!res.ok) throw new Error("API error");
    const pData = await res.json();

    districtSelect.innerHTML = '<option value="">-- Chọn Quận / Huyện --</option>';
    pData.districts.forEach((d) => {
      const o = document.createElement("option");
      o.value = d.code;
      o.textContent = d.name;
      districtSelect.appendChild(o);
    });
    districtSelect.disabled = false;
  } catch (error) {
    console.error("Error loading districts:", error);
    districtSelect.innerHTML = '<option value="">Lỗi tải dữ liệu - thử lại</option>';
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
    const res = await fetch(`https://provinces.open-api.vn/api/d/${dCode}?depth=2`);
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
    wardSelect.innerHTML = '<option value="">Lỗi tải dữ liệu - thử lại</option>';
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
    select.innerHTML = '<option value="">Lỗi tải tỉnh thành - F5 thử lại</option>';
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
      document.querySelectorAll(".dynamic-area").forEach((a) => a.classList.remove("active"));
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
  cart.forEach((item) => { subtotal += parsePrice(item.price); });
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
    if (qrLoading) qrLoading.textContent = "Không tạo được QR. Vui lòng chuyển khoản thủ công.";
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

  freshTerm.addEventListener("change", () => updateInstallmentDisplay(getCheckoutTotal()));
  if (bankSelect) {
    const freshBank = bankSelect.cloneNode(true);
    bankSelect.parentNode.replaceChild(freshBank, bankSelect);
    freshBank.addEventListener("change", () => updateInstallmentDisplay(getCheckoutTotal()));
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
  "KNGSUMMER": 10,   // 10% off
  "CAMERAPRO": 15,   // 15% off
  "KNG5": 5,         // 5% off
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
      document.querySelectorAll(".ewallet-logo-select").forEach((e) => e.classList.remove("active"));
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
    districtSelect.innerHTML = '<option value="">-- Chọn Quận / Huyện --</option>';
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
      const streetDetail = document.getElementById("customerAddressDetail")?.value.trim();
      const paymentElement = document.querySelector('input[name="payment"]:checked');

      // Validate required fields
      if (!name || !phone) {
        showNotification("⚠️ Vui lòng nhập đầy đủ họ tên và số điện thoại.");
        return;
      }

      if (!province?.value || !district?.value || !ward?.value || !streetDetail) {
        showNotification("⚠️ Vui lòng chọn đầy đủ địa chỉ giao hàng.");
        return;
      }

      if (!paymentElement) {
        showNotification("⚠️ Vui lòng chọn hình thức thanh toán.");
        return;
      }

      const paymentValue = paymentElement.value;
      const totalFormatted = formatPrice(getCheckoutTotal());

      // Show success modal with payment details
      const email = document.getElementById("customerEmail")?.value.trim() || "";
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
