/* ============================================================
   SHUTTLEBOND — edit everything in this CONFIG block.
   No other file needs to change for day-to-day updates.
   ============================================================ */
const CONFIG = {
  businessName: "Shuttlebond",
  area: "Perth, WA",
  phone: "0400 000 000",       // used for SMS/WhatsApp link — digits only version is derived below
  email: "orders@shuttlebond.com.au",
  payid: "0400 000 000",       // your PayID (phone, email, or ABN)

  products: [
    {
      id: "shuttle-feather-tourney",
      name: "Feather shuttlecocks — Tournament",
      category: "Shuttlecocks",
      spec: "Tube of 12, goose feather, speed 77",
      price: 42,
      icon: "shuttle",
      badge: "bestseller"
    },
    {
      id: "shuttle-feather-club",
      name: "Feather shuttlecocks — Club",
      category: "Shuttlecocks",
      spec: "Tube of 12, duck feather, speed 76",
      price: 32,
      icon: "shuttle"
    },
    {
      id: "shuttle-nylon",
      name: "Nylon shuttlecocks",
      category: "Shuttlecocks",
      spec: "Tube of 6, durable nylon skirt, all levels",
      price: 18,
      icon: "shuttle"
    },
    {
      id: "racket-carlton-yellow",
      name: "Carlton — Yellow/Black",
      category: "Rackets",
      spec: "Even balance, 3U, medium flex, 85±2g, 675mm",
      price: 79,
      image: "images/racket-carlton-yellow.png",
      badge: "bestseller"
    },
    {
      id: "racket-carlton-lavender",
      name: "Carlton — Lavender",
      category: "Rackets",
      spec: "Lightweight aero frame, all-round play",
      price: 69,
      image: "images/racket-carlton-lavender.png"
    },
    {
      id: "racket-carlton-graphite",
      name: "Carlton — Graphite/Yellow",
      category: "Rackets",
      spec: "Full graphite aero head, fast swing",
      price: 75,
      image: "images/racket-carlton-graphite.png"
    },
    {
      id: "racket-white-blue",
      name: "All-round racket — White/Blue",
      category: "Rackets",
      spec: "Balanced frame, control-focused",
      price: 65,
      image: "images/racket-white-blue.png"
    },
    {
      id: "racket-maroon",
      name: "Attack racket — Maroon",
      category: "Rackets",
      spec: "Head-light, built for fast net play",
      price: 59,
      image: "images/racket-maroon-grip.png"
    },
    {
      id: "racket-yonex-astrox",
      name: "Yonex Astrox + racket bag",
      category: "Rackets",
      spec: "Includes padded cover bag",
      price: 189,
      image: "images/racket-yonex-astrox.png",
      badge: "new"
    },
    {
      id: "racket-lining-halbertec9000",
      name: "Li-Ning Halbertec 9000 Power",
      category: "Rackets",
      spec: "Head-heavy power frame",
      price: 249,
      image: "images/racket-lining-halbertec9000.png",
      badge: "new"
    },
    {
      id: "string-yonex-exbolt63",
      name: "Yonex Exbolt 63",
      category: "Strings",
      spec: "0.63mm, quick repulsion — per set, strung on request",
      price: 22,
      image: "images/string-yonex-exbolt63.png",
      badge: "bestseller"
    },
    {
      id: "string-yonex-aerobite-boost",
      name: "Yonex Aerobite Boost",
      category: "Strings",
      spec: "Hybrid control string — per set, strung on request",
      price: 25,
      image: "images/string-yonex-aerobite-boost.png"
    },
    {
      id: "string-yonex-nanogy95",
      name: "Yonex Nanogy 95",
      category: "Strings",
      spec: "0.65mm, durable, medium feel — per set",
      price: 20,
      image: "images/string-yonex-nanogy95.png"
    },
    {
      id: "grip-yonex-towel",
      name: "Yonex Towel Grip",
      category: "Grips",
      spec: "100% cotton, sweat absorption",
      price: 8,
      image: "images/grip-yonex-towel.png"
    },
    {
      id: "grip-yonex-yellow",
      name: "Yonex Replacement Grip",
      category: "Grips",
      spec: "Cushioned, spiral wrap, yellow",
      price: 10,
      image: "images/grip-yonex-yellow-spiral.png"
    },
    {
      id: "grip-yonex-supergrip",
      name: "Yonex Super Grip",
      category: "Grips",
      spec: "Synthetic overgrip, pack of 3",
      price: 9,
      image: "images/grip-yonex-supergrip-orange.png",
      badge: "bestseller"
    },
    {
      id: "grip-yonex-overgrip-multi",
      name: "Yonex Overgrip — assorted",
      category: "Grips",
      spec: "Pack of 5, assorted colours",
      price: 15,
      image: "images/grip-yonex-overgrip-multicolor.png"
    },
    {
      id: "shoes-court-white",
      name: "Court shoe — White/Navy",
      category: "Shoes",
      spec: "Non-marking sole, cushioned midsole",
      price: 99,
      icon: "shoe",
      badge: "new"
    },
    {
      id: "shoes-court-red",
      name: "Court shoe — Red/Black",
      category: "Shoes",
      spec: "Lightweight, reinforced toe guard",
      price: 109,
      icon: "shoe"
    }
  ]
};
/* ============================================================ */

const CATEGORY_ICONS = {
  Rackets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="7" rx="6" ry="6.5"/><path d="M12 13.5V21"/><path d="M8 7h8M12 1v12"/></svg>`,
  Shuttlecocks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="17" r="3"/><path d="M9 14 5 4M11 13 9 3M13 13 15 3M15 14 19 4"/><path d="M5 4Q12 -1 19 4"/></svg>`,
  Strings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M6 6l12 12M18 6 6 18"/></svg>`,
  Grips: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="9" width="16" height="6" rx="2"/><path d="M8 9v6M12 9v6M16 9v6"/></svg>`,
  Shoes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17c0-2 1-3 3-4l4-2 3 1 4-1 3 2v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M10 11V6"/></svg>`
};

const icons = {
  shuttle: `<svg viewBox="0 0 100 90"><circle cx="50" cy="66" r="12" fill="#E63946"/><path d="M40 58 L20 14 M46 55 L36 10 M54 55 L64 10 M60 58 L80 14" stroke="#0B2545" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M20 14 Q50 -2 80 14" stroke="#0B2545" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  racket: `<svg viewBox="0 0 100 90"><ellipse cx="50" cy="30" rx="26" ry="28" fill="none" stroke="#0B2545" stroke-width="2.4"/><path d="M50 58 L50 84" stroke="#E63946" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 30 L72 30 M50 8 L50 52" stroke="#0B2545" stroke-width="1" opacity="0.5"/>
    <path d="M33 14 L67 46 M67 14 L33 46" stroke="#0B2545" stroke-width="1" opacity="0.5"/></svg>`,
  grip: `<svg viewBox="0 0 100 90"><rect x="20" y="34" width="60" height="22" rx="3" fill="none" stroke="#0B2545" stroke-width="2.4"/><path d="M28 34 L28 56 M40 34 L40 56 M52 34 L52 56 M64 34 L64 56" stroke="#E63946" stroke-width="2"/></svg>`,
  string: `<svg viewBox="0 0 100 90"><circle cx="50" cy="45" r="30" fill="none" stroke="#0B2545" stroke-width="2.4"/><circle cx="50" cy="45" r="6" fill="#E63946"/></svg>`,
  shoe: `<svg viewBox="0 0 100 90"><path d="M12 62c0-8 4-12 12-16l16-8 12 4 16-4 12 8v16a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4Z" fill="none" stroke="#0B2545" stroke-width="2.4"/><path d="M40 42V24" stroke="#E63946" stroke-width="2.4" stroke-linecap="round"/></svg>`
};

const money = n => `$${n}`;

/* ---------- state ---------- */
let cart = {}; // id -> qty
let activeFilter = "All";

/* ---------- category tiles ---------- */
const catTilesEl = document.getElementById("catTiles");

function renderCategoryTiles() {
  const cats = [...new Set(CONFIG.products.map(p => p.category))];
  catTilesEl.innerHTML = cats.map(cat => `
    <button class="cat-tile" data-cat="${cat}">
      ${CATEGORY_ICONS[cat] || ""}
      <span>${cat}</span>
    </button>
  `).join("");
}

catTilesEl.addEventListener("click", e => {
  const tile = e.target.closest(".cat-tile");
  if (!tile) return;
  activeFilter = tile.dataset.cat;
  renderFilters();
  renderProducts();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

/* ---------- product card markup ---------- */
function productImages(p) {
  if (p.images) return p.images;
  if (p.image) return [p.image];
  return [];
}

function productCard(p) {
  const qty = cart[p.id] || 0;
  const imgs = productImages(p);
  const media = imgs.length
    ? `<div class="product-photo"><img src="${imgs[0]}" alt="${p.name}" loading="lazy"></div>`
    : `<div class="product-icon">${icons[p.icon] || ""}</div>`;
  const badge = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badge === "new" ? "New" : "Best seller"}</span>`
    : "";
  return `
    <div class="product-card" data-open="${p.id}">
      ${badge}
      ${media}
      <p class="product-cat">${p.category}</p>
      <h3>${p.name}</h3>
      <p class="product-spec">${p.spec}</p>
      <div class="product-footer">
        <span class="price">${money(p.price)}</span>
        <div class="qty-control">
          <button data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">–</button>
          <span data-qty="${p.id}">${qty}</span>
          <button data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
    </div>`;
}

/* ---------- render products ---------- */
const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("filters");
const newArrivalsGrid = document.getElementById("newArrivalsGrid");
const bestSellersGrid = document.getElementById("bestSellersGrid");

function categories() {
  return ["All", ...new Set(CONFIG.products.map(p => p.category))];
}

function renderFilters() {
  filtersEl.innerHTML = categories().map(cat =>
    `<button class="filter-btn ${cat === activeFilter ? "active" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");
}

function renderProducts() {
  const items = CONFIG.products.filter(p => activeFilter === "All" || p.category === activeFilter);
  grid.innerHTML = items.map(productCard).join("");
}

function renderRails() {
  newArrivalsGrid.innerHTML = CONFIG.products.filter(p => p.badge === "new").map(productCard).join("");
  bestSellersGrid.innerHTML = CONFIG.products.filter(p => p.badge === "bestseller").map(productCard).join("");
}

filtersEl.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeFilter = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

document.querySelectorAll(".main-nav a[data-cat]").forEach(link => {
  link.addEventListener("click", e => {
    activeFilter = link.dataset.cat;
    renderFilters();
    renderProducts();
  });
});

document.querySelectorAll(".rail-link[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = "All";
    renderFilters();
    renderProducts();
    document.getElementById(btn.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  });
});

function handleQtyClick(e) {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  e.stopPropagation();
  const id = btn.dataset.id;
  const cur = cart[id] || 0;
  if (btn.dataset.action === "inc") cart[id] = cur + 1;
  if (btn.dataset.action === "dec") cart[id] = Math.max(0, cur - 1);
  if (cart[id] === 0) delete cart[id];
  renderProducts();
  renderRails();
  renderCart();
}

function handleCardOpen(e) {
  if (e.target.closest("button[data-action]")) return;
  const card = e.target.closest(".product-card[data-open]");
  if (!card) return;
  openProductModal(card.dataset.open);
}

grid.addEventListener("click", handleQtyClick);
newArrivalsGrid.addEventListener("click", handleQtyClick);
bestSellersGrid.addEventListener("click", handleQtyClick);
grid.addEventListener("click", handleCardOpen);
newArrivalsGrid.addEventListener("click", handleCardOpen);
bestSellersGrid.addEventListener("click", handleCardOpen);

/* ---------- product detail modal ---------- */
const productModal = document.getElementById("productModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalMainPhoto = document.getElementById("modalMainPhoto");
const modalThumbs = document.getElementById("modalThumbs");
const modalCat = document.getElementById("modalCat");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalQty = document.getElementById("modalQty");
const modalQtyControl = document.getElementById("modalQtyControl");
const modalAddBtn = document.getElementById("modalAddBtn");

let modalProductId = null;

function setModalMainImage(product, src) {
  if (src) {
    modalMainPhoto.innerHTML = `<img src="${src}" alt="${product.name}">`;
  } else {
    modalMainPhoto.innerHTML = icons[product.icon] || "";
  }
}

function openProductModal(id) {
  const product = CONFIG.products.find(p => p.id === id);
  if (!product) return;
  modalProductId = id;

  const imgs = productImages(product);
  setModalMainImage(product, imgs[0]);

  modalThumbs.innerHTML = imgs.length > 1
    ? imgs.map((src, i) => `<button class="modal-thumb ${i === 0 ? "active" : ""}" data-src="${src}"><img src="${src}" alt=""></button>`).join("")
    : "";

  modalCat.textContent = product.category;
  modalName.textContent = product.name;
  modalPrice.textContent = money(product.price);
  modalDesc.textContent = product.description || product.spec;
  modalQty.textContent = cart[id] || 0;

  productModal.classList.add("open");
  modalBackdrop.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  productModal.classList.remove("open");
  modalBackdrop.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  modalProductId = null;
}

modalThumbs.addEventListener("click", e => {
  const thumb = e.target.closest(".modal-thumb");
  if (!thumb) return;
  const product = CONFIG.products.find(p => p.id === modalProductId);
  setModalMainImage(product, thumb.dataset.src);
  modalThumbs.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
  thumb.classList.add("active");
});

modalQtyControl.addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn || !modalProductId) return;
  const cur = cart[modalProductId] || 0;
  if (btn.dataset.action === "inc") cart[modalProductId] = cur + 1;
  if (btn.dataset.action === "dec") cart[modalProductId] = Math.max(0, cur - 1);
  if (cart[modalProductId] === 0) delete cart[modalProductId];
  modalQty.textContent = cart[modalProductId] || 0;
  renderProducts();
  renderRails();
  renderCart();
});

modalAddBtn.addEventListener("click", () => {
  if (!modalProductId) return;
  cart[modalProductId] = (cart[modalProductId] || 0) + 1;
  modalQty.textContent = cart[modalProductId];
  renderProducts();
  renderRails();
  renderCart();
});

modalClose.addEventListener("click", closeProductModal);
modalBackdrop.addEventListener("click", closeProductModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProductModal(); });

/* ---------- cart drawer ---------- */
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotalRow = document.getElementById("cartTotalRow");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const paymentChoice = document.getElementById("paymentChoice");

function cartEntries() {
  return Object.entries(cart).map(([id, qty]) => {
    const product = CONFIG.products.find(p => p.id === id);
    return { product, qty };
  }).filter(e => e.product);
}

function renderCart() {
  const entries = cartEntries();
  const totalQty = entries.reduce((s, e) => s + e.qty, 0);
  const totalPrice = entries.reduce((s, e) => s + e.qty * e.product.price, 0);

  cartCountEl.textContent = totalQty;

  if (entries.length === 0) {
    cartList.innerHTML = "";
    cartEmpty.hidden = false;
    cartTotalRow.hidden = true;
    paymentChoice.hidden = true;
    return;
  }

  cartEmpty.hidden = true;
  cartTotalRow.hidden = false;
  paymentChoice.hidden = false;

  cartList.innerHTML = entries.map(({ product, qty }) => `
    <li>
      <div>
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-meta">${qty} × ${money(product.price)}</div>
      </div>
      <button class="cart-item-remove" data-remove="${product.id}">Remove</button>
    </li>
  `).join("");

  cartTotalEl.textContent = money(totalPrice);
  updateSendLinks(entries, totalPrice);
}

cartList.addEventListener("click", e => {
  const btn = e.target.closest("button[data-remove]");
  if (!btn) return;
  delete cart[btn.dataset.remove];
  renderProducts();
  renderRails();
  renderCart();
});

/* ---------- order message + send links ---------- */
const sendWhatsapp = document.getElementById("sendWhatsapp");
const sendEmail = document.getElementById("sendEmail");

function buildOrderText(entries, total) {
  const method = document.querySelector('input[name="payMethod"]:checked').value;
  const lines = entries.map(({ product, qty }) => `${qty} × ${product.name} — ${money(product.price * qty)}`);
  const payLine = method === "payid"
    ? `Payment: PayID transfer to ${CONFIG.payid} (I'll send ${money(total)} with my name as the reference)`
    : `Payment: Cash on pickup`;

  return [
    `Hi ${CONFIG.businessName}, I'd like to order:`,
    ...lines,
    `Total: ${money(total)}`,
    payLine,
    `Name: `,
    `Preferred pickup/delivery time: `
  ].join("\n");
}

function updateSendLinks(entries, total) {
  const text = buildOrderText(entries, total);
  const digitsPhone = CONFIG.phone.replace(/\D/g, "");
  sendWhatsapp.href = `https://wa.me/61${digitsPhone.replace(/^0/, "")}?text=${encodeURIComponent(text)}`;
  sendEmail.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Order — " + CONFIG.businessName)}&body=${encodeURIComponent(text)}`;
}

document.getElementById("paymentChoice").addEventListener("change", () => {
  const entries = cartEntries();
  const total = entries.reduce((s, e) => s + e.qty * e.product.price, 0);
  updateSendLinks(entries, total);
});

/* ---------- drawer open/close ---------- */
const drawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("drawerBackdrop");
const openBtn = document.getElementById("cartToggle");
const closeBtn = document.getElementById("drawerClose");

function openDrawer() {
  drawer.classList.add("open");
  backdrop.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}
openBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

/* ---------- fill in contact/PayID placeholders ---------- */
document.getElementById("contactPhone").textContent = CONFIG.phone;
document.getElementById("contactEmail").textContent = CONFIG.email;
document.getElementById("headerPhone").textContent = CONFIG.phone;
document.getElementById("headerEmail").textContent = CONFIG.email;
document.getElementById("payidDisplay").textContent = CONFIG.payid;

/* ---------- header search ---------- */
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
let searchTerm = "";

function openSearch() {
  searchBar.hidden = false;
  searchToggle.setAttribute("aria-expanded", "true");
  searchInput.focus();
}
function closeSearch() {
  searchBar.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchTerm = "";
  searchInput.value = "";
  renderProducts();
}

searchToggle.addEventListener("click", () => {
  if (searchBar.hidden) openSearch(); else closeSearch();
});
searchClose.addEventListener("click", closeSearch);

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  const items = searchTerm
    ? CONFIG.products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm))
    : CONFIG.products.filter(p => activeFilter === "All" || p.category === activeFilter);
  grid.innerHTML = items.map(productCard).join("");
  if (searchTerm) document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !searchBar.hidden) closeSearch();
});
document.getElementById("payidInlineValue").textContent = CONFIG.payid;

/* ---------- init ---------- */
renderCategoryTiles();
renderFilters();
renderProducts();
renderRails();
renderCart();
