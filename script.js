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

// =========================
// SHOW CHECKOUT MODAL
// =========================
function showCartItems() {
  if (cart.length === 0) {
    showNotification("Giỏ hàng của bạn đang trống.");
    return;
  }

  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (!checkoutModal || !checkoutItems || !checkoutTotal) return;

  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const priceNumber = parsePrice(item.price);
    total += priceNumber;

    checkoutItems.innerHTML += `
      <div class="checkout-item">
        <div>
          <h4>${item.name}</h4>
          <p>${item.price}</p>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Xóa sản phẩm">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  });

  checkoutTotal.textContent = formatPrice(total);

  // Update both total displays
  const checkoutTotalRight = document.getElementById("checkoutTotalRight");
  if (checkoutTotalRight) {
    checkoutTotalRight.textContent = formatPrice(total);
  }

  checkoutModal.classList.add("show");
}

// =========================
// REMOVE FROM CART
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

// =========================
// SHOW SUCCESS MODAL
// =========================
function showSuccessModal(customerName, paymentMethod, total) {
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

  successModal.classList.add("show");

  // Auto close after 5 seconds
  setTimeout(() => {
    closeSuccessModal();
  }, 5000);
}

// =========================
// CLOSE SUCCESS MODAL
// =========================
function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  if (successModal) {
    successModal.classList.remove("show");
  }
  // Clear cart and refresh
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  document.getElementById("checkoutModal").classList.remove("show");
  document.getElementById("checkoutForm").reset();
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

    // Add hover effect - expand underline on hover and keep it
    anchor.addEventListener("mouseenter", function () {
      if (this.closest(".nav-menu")) {
        this.classList.add("active");
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

  // =========================
  // PAYMENT METHODS - HOVER SELECT
  // =========================
  const paymentLabels = document.querySelectorAll(".payment-label");
  paymentLabels.forEach((label) => {
    label.addEventListener("mouseenter", function () {
      const input = this.querySelector('input[type="radio"]');
      if (input) {
        input.checked = true;
      }
    });
  });

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();
      const address = document.getElementById("customerAddress").value.trim();
      const paymentElement = document.querySelector(
        'input[name="payment"]:checked',
      );

      if (!name || !phone || !address) {
        showNotification("⚠️ Vui lòng nhập đầy đủ thông tin.");
        return;
      }

      if (!paymentElement) {
        showNotification("⚠️ Vui lòng chọn hình thức thanh toán.");
        return;
      }

      const paymentValue = paymentElement.value;

      // Get total amount
      let total = 0;
      cart.forEach((item) => {
        total += parsePrice(item.price);
      });
      const totalFormatted = formatPrice(total);

      // Show success modal with payment details
      showSuccessModal(name, paymentValue, totalFormatted);

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
