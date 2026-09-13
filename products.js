// ==========================================
// KNG STORE - CENTRALIZED PRODUCT DATA ENGINE
// ==========================================

/**
 * Mảng dữ liệu sản phẩm gốc - Nguồn thông tin duy nhất cho toàn bộ website
 * Bao gồm đầy đủ: id, name, brand, category, priceRaw, oldPriceRaw, image,
 * imageAlt, shortDesc, fullDesc, specs, stock, badge, rating (số thực), reviews
 */
const MASTER_PRODUCTS = [
  {
    id: 0,
    name: "Canon EOS R5",
    brand: "Canon",
    category: "Mirrorless Full-frame",
    priceRaw: 150000000,
    oldPriceRaw: 175000000,
    stock: 15,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canon EOS R5 Full-frame Mirrorless",
    shortDesc: "Quay 8K RAW đỉnh cao, cảm biến 45MP full-frame thế hệ mới và chống rung IBIS 8 stop.",
    fullDesc: "Canon EOS R5 là mẫu máy ảnh mirrorless full-frame tiên phong của Canon mang đến chất lượng hình ảnh vượt bậc với cảm biến CMOS 45MP cùng khả năng quay video 8K RAW nội bộ. Trang bị hệ thống lấy nét Dual Pixel CMOS AF II với 1.053 điểm nét tự động bao phủ 100% khung hình, nhận diện mắt, khuôn mặt và cơ thể cả người lẫn động vật với độ chính xác tuyệt đối.",
    specs: [
      "Cảm biến Full-frame 45MP CMOS",
      "Quay video 8K RAW 24/30fps & 4K 120fps",
      "Hệ thống lấy nét Dual Pixel CMOS AF II",
      "Chống rung IBIS trong thân máy lên đến 8 stop",
      "Dải ISO tiêu chuẩn 100 - 51.200 (mở rộng 102.400)",
      "Kết nối Wi-Fi 5GHz & Bluetooth 5.0 truyền tải siêu tốc"
    ],
    isHero: true,
    heroSubtitle: "Ưu đãi đặc biệt giảm đến 15%",
    heroDesc: "Chuyên nghiệp 8K RAW, lấy nét thông minh AI - Độc quyền tại KNG Store",
    heroBg: "linear-gradient(rgba(10, 14, 39, 0.5), rgba(10, 14, 39, 0.7)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80')"
  },
  {
    id: 1,
    name: "Sony A7R IV",
    brand: "Sony",
    category: "Mirrorless 61MP",
    priceRaw: 120000000,
    oldPriceRaw: 145000000,
    stock: 8,
    badge: "Hot",
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sony A7R IV 61MP",
    shortDesc: "Độ phân giải siêu khủng 61MP BSI CMOS, tối ưu tuyệt hảo cho nhiếp ảnh phong cảnh và studio.",
    fullDesc: "Sony Alpha 7R IV xác lập kỷ lục mới về độ chi tiết cho dòng máy ảnh không gương lật full-frame 35mm. Với cảm biến Exmor R BSI-CMOS 61.0 MP và bộ xử lý BIONZ X, máy mang lại dải tương phản động 15 stop cùng khả năng chụp liên tục 10 fps với bám nét AF/AE toàn thời gian.",
    specs: [
      "Cảm biến 61MP Full-frame Exmor R BSI CMOS",
      "Hệ thống AF 567 điểm lấy nét theo pha",
      "Real-time Eye AF cho người, thú cưng và chim chóc",
      "Quay video 4K HDR định dạng S-Log2 / S-Log3",
      "Kính ngắm điện tử UXGA OLED 5.76 triệu điểm ảnh",
      "Thân máy hợp kim Magie gia cố chống bụi và nước ẩm"
    ],
    isHero: true,
    heroSubtitle: "Khuyến mãi siêu phẩm - Giảm 18%",
    heroDesc: "Cảm biến Full Frame 61MP, AI Real-time Focus - Giới hạn 50 chiếc",
    heroBg: "linear-gradient(rgba(10, 14, 39, 0.5), rgba(10, 14, 39, 0.7)), url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=1920&q=80')"
  },
  {
    id: 2,
    name: "Nikon Z9",
    brand: "Nikon",
    category: "Pro Mirrorless",
    priceRaw: 140000000,
    oldPriceRaw: 155000000,
    stock: 5,
    badge: "New",
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nikon Z9 Flagship",
    shortDesc: "Flagship mạnh mẽ nhất không màn trập cơ, quay 8K 60p và chụp 120fps cho thể thao & báo chí.",
    fullDesc: "Nikon Z9 là bước nhảy vọt cách mạng trong ngành máy ảnh. Loại bỏ hoàn toàn màn trập cơ học để loại bỏ hiện tượng méo Rolling Shutter nhờ cảm biến xếp chồng Stacked CMOS 45.7MP và bộ xử lý EXPEED 7 siêu tốc độ. Khả năng quay 8K 60p RAW nội bộ và chụp liên tục lên tới 120 fps.",
    specs: [
      "Cảm biến Stacked CMOS 45.7MP Full-frame",
      "Bộ vi xử lý kép tân tiến EXPEED 7",
      "Thiết kế 100% màn trập điện tử không cơ học",
      "Quay phim 8K 60p N-RAW & 4K 120p không crop",
      "Nhận diện 9 đối tượng bằng công nghệ Deep Learning AI",
      "Màn hình cảm ứng lật 4 trục linh hoạt đa góc chụp"
    ],
    isHero: true,
    heroSubtitle: "Bộ sưu tập Pro - Giảm 20%",
    heroDesc: "Không màn trập cơ học, 8K 60p RAW, tối ưu cho content creator & thể thao",
    heroBg: "linear-gradient(rgba(10, 14, 39, 0.5), rgba(10, 14, 39, 0.7)), url('nikon_z9_banner.png')"
  },
  {
    id: 3,
    name: "Fujifilm X-T5",
    brand: "Fujifilm",
    category: "APS-C Creative",
    priceRaw: 45000000,
    oldPriceRaw: 50000000,
    stock: 20,
    badge: "Retro",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fujifilm X-T5 Cổ điển",
    shortDesc: "Thiết kế hoài cổ tinh tế với cảm biến 40MP X-Trans CMOS 5 HR và 19 bộ lọc giả lập màu film nổi tiếng.",
    fullDesc: "Fujifilm X-T5 sở hữu phong cách thiết kế đậm chất nhiếp ảnh truyền thống với hệ thống vòng xoay cơ học quen thuộc. Bên trong vẻ ngoài hoài cổ là cảm biến APS-C 40MP thế hệ thứ 5 mang lại độ sắc nét đáng kinh ngạc, cùng công nghệ ổn định hình ảnh 5 trục 7 stop và 19 chế độ mô phỏng Film trứ danh như Classic Chrome, Nostalgic Neg.",
    specs: [
      "Cảm biến 40.2MP X-Trans CMOS 5 HR",
      "Bộ xử lý hình ảnh thế hệ mới X-Processor 5",
      "19 chế độ giả lập màu film độc quyền Fujifilm",
      "Quay phim chuẩn điện ảnh 6.2K 30p 4:2:2 10-bit",
      "Hệ thống chống rung trong thân máy IBIS 7.0 stop",
      "Hệ thống vòng xoay cơ học kim loại cao cấp kháng thời tiết"
    ],
    isHero: true,
    heroSubtitle: "Flash Sale cuối tháng - Giảm 16%",
    heroDesc: "Phong cách hoài cổ, cảm biến 40MP X-Trans, 19 chế độ màu Film sống động",
    heroBg: "linear-gradient(rgba(10, 14, 39, 0.5), rgba(10, 14, 39, 0.7)), url('https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1920&q=80')"
  },
  {
    id: 4,
    name: "Nikon Z6 II",
    brand: "Nikon",
    category: "Hybrid Camera",
    priceRaw: 80000000,
    oldPriceRaw: 88000000,
    stock: 12,
    badge: "Hybrid",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nikon Z6 II All-rounder",
    shortDesc: "Hiệu năng cân bằng hoàn hảo giữa chụp ảnh và quay phim 4K với bộ xử lý kép Dual EXPEED 6.",
    fullDesc: "Nikon Z6 II nâng tầm khả năng sáng tạo toàn diện với cảm biến 24.5MP BSI kết hợp bộ vi xử lý kép Dual EXPEED 6. Tốc độ chụp liên tục tăng lên 14fps cùng khả năng quay video 4K 60fps mượt mà, hỗ trợ xuất định dạng ProRes RAW 12-bit thông qua cổng HDMI.",
    specs: [
      "Cảm biến 24.5MP Full-frame BSI CMOS",
      "Bộ xử lý kép Dual EXPEED 6 nhân đôi sức mạnh",
      "Lấy nét lai Hybrid AF 273 điểm pha",
      "Quay video 4K 60p & xuất tín hiệu 12-bit RAW",
      "Chụp liên tục 14 khung hình/giây có bám nét",
      "Khe thẻ nhớ kép: CFexpress/XQD và SD UHS-II"
    ],
    isHero: false
  },
  {
    id: 5,
    name: "Canon EOS 5D Mark IV",
    brand: "Canon",
    category: "DSLR Full-frame",
    priceRaw: 90000000,
    oldPriceRaw: null,
    stock: 2,
    badge: "Pro DSLR",
    rating: 4.9,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Canon EOS 5D Mark IV Huyền thoại",
    shortDesc: "Chiếc DSLR huyền thoại, tiêu chuẩn vàng của giới nhiếp ảnh thương mại, dịch vụ cưới và studio.",
    fullDesc: "Canon EOS 5D Mark IV là biểu tượng trường tồn trong ngành nhiếp ảnh chuyên nghiệp. Cảm biến 30.4MP mang lại chất màu da người ấm áp, dải dynamic range rộng và độ tin cậy tuyệt đối trong mọi môi trường tác nghiệp khắc nghiệt.",
    specs: [
      "Cảm biến 30.4MP Full-frame CMOS",
      "Hệ thống lấy nét 61 điểm High-Density Reticular AF",
      "Dual Pixel CMOS AF cho Live View cực êm",
      "Quay video chuẩn điện ảnh 4K DCI 30fps",
      "Thân máy hợp kim Magie bọc seal chống ẩm/bụi chuẩn quân đội",
      "Tích hợp GPS & Wi-Fi tiện lợi gắn tọa độ ảnh chụp"
    ],
    isHero: false
  },
  {
    id: 6,
    name: "Sony A9 II",
    brand: "Sony",
    category: "Speed Performance",
    priceRaw: 110000000,
    oldPriceRaw: 125000000,
    stock: 0, // Out of stock for testing & demonstration
    badge: "Sports",
    rating: 4.8,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sony A9 II Siêu tốc độ",
    shortDesc: "Tốc độ chụp 20fps không chớp đen màn hình (no blackout), vũ khí tối thượng của nhiếp ảnh gia thể thao.",
    fullDesc: "Sony A9 II hướng tới tốc độ vô tiền khoáng hậu với cảm biến xếp chồng Stacked CMOS 24.2MP có bộ nhớ đệm tích hợp. Cho phép chụp liên tục 20fps hoàn toàn im lặng không hề giật đen màn hình, cùng cổng LAN 1000BASE-T hỗ trợ truyền file FTP tốc độ cao ngay trong trận đấu.",
    specs: [
      "Cảm biến 24.2MP Stacked CMOS có bộ nhớ tích hợp",
      "Chụp liên tiếp 20fps với AF/AE 60 lần mỗi giây",
      "Không hiện tượng chớp đen (Blackout-free viewfinder)",
      "Hệ thống AF 693 điểm theo pha bao phủ 93% khung hình",
      "Cổng mạng Gigabit Ethernet LAN truyền dữ liệu FTP",
      "Real-time Eye AF & Tracking bám dính chủ thể tức thì"
    ],
    isHero: false
  }
];

// ==========================================
// STOCK & LOCAL STORAGE SYNCHRONIZATION
// ==========================================

const STOCK_STORAGE_KEY = "kng_product_stocks";

/**
 * Khởi tạo và lấy danh sách sản phẩm đã được đồng bộ số lượng tồn kho từ localStorage
 */
function getSynchronizedProducts() {
  const storedStocks = localStorage.getItem(STOCK_STORAGE_KEY);
  let stockMap = {};

  if (storedStocks) {
    try {
      stockMap = JSON.parse(storedStocks);
    } catch (e) {
      console.warn("Lỗi đọc stockMap từ localStorage, sử dụng tồn kho gốc");
    }
  }

  // Clone mảng MASTER_PRODUCTS và cập nhật stock theo stockMap
  return MASTER_PRODUCTS.map((item) => {
    const currentStock = stockMap[item.id] !== undefined ? stockMap[item.id] : item.stock;
    return {
      ...item,
      stock: currentStock,
      price: formatPrice(item.priceRaw)
    };
  });
}

/**
 * Trừ số lượng tồn kho sau khi đặt hàng thành công
 * @param {Array<{id: number, quantity: number}>} cartItems 
 */
function deductProductStocks(cartItems) {
  const storedStocks = localStorage.getItem(STOCK_STORAGE_KEY);
  let stockMap = {};

  if (storedStocks) {
    try {
      stockMap = JSON.parse(storedStocks);
    } catch (e) {}
  } else {
    // Khởi tạo từ MASTER_PRODUCTS
    MASTER_PRODUCTS.forEach((p) => {
      stockMap[p.id] = p.stock;
    });
  }

  cartItems.forEach((item) => {
    const pId = item.id;
    const currentStock = stockMap[pId] !== undefined ? stockMap[pId] : (MASTER_PRODUCTS.find(p => p.id === pId)?.stock || 0);
    const newStock = Math.max(0, currentStock - item.quantity);
    stockMap[pId] = newStock;
  });

  localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(stockMap));
  
  // Cập nhật lại mảng PRODUCTS đang hoạt động
  PRODUCTS = getSynchronizedProducts();
}

/**
 * Khôi phục tồn kho về mặc định (dùng khi reset/test)
 */
function resetProductStocks() {
  localStorage.removeItem(STOCK_STORAGE_KEY);
  PRODUCTS = getSynchronizedProducts();
}

/**
 * Định dạng tiền tệ chuẩn VNĐ
 * @param {number} amount 
 * @returns {string} Ví dụ: "150.000.000 đ"
 */
function formatPrice(amount) {
  if (typeof amount !== "number" || isNaN(amount)) return "0 đ";
  return amount.toLocaleString("vi-VN") + " đ";
}

// Biến toàn cục PRODUCTS sử dụng trên toàn hệ thống
let PRODUCTS = getSynchronizedProducts();
