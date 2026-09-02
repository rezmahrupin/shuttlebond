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
      description: "Our top-tier tube for match play — goose feather skirt for a true, consistent flight and durable enough to last a full competitive game. Speed 77 suits most indoor courts at sea level.",
      price: 42,
      icon: "shuttle",
      badge: "bestseller"
    },
    {
      id: "shuttle-feather-club",
      name: "Feather shuttlecocks — Club",
      category: "Shuttlecocks",
      spec: "Tube of 12, duck feather, speed 76",
      description: "A reliable, everyday feather shuttle for weeknight club sessions. Duck feather keeps the price down while still giving a proper feather-flight feel over nylon alternatives.",
      price: 32,
      icon: "shuttle"
    },
    {
      id: "shuttle-nylon",
      name: "Nylon shuttlecocks",
      category: "Shuttlecocks",
      spec: "Tube of 6, durable nylon skirt, all levels",
      description: "The toughest option in the range — a nylon skirt that shrugs off mishits and rough courts, so it's ideal for backyard games, beginners, or anyone who goes through shuttles fast.",
      price: 18,
      icon: "shuttle"
    },
    {
      id: "shuttle-feather-match",
      name: "Feather shuttlecocks — Match Grade",
      category: "Shuttlecocks",
      spec: "Tube of 12, goose feather, speed 78",
      description: "A slightly faster speed 78 build for cooler venues or higher-altitude courts, where shuttles naturally fly slower. Same tournament-grade goose feather construction as our Tournament tube.",
      price: 45,
      icon: "shuttle"
    },
    {
      id: "shuttle-feather-training",
      name: "Feather shuttlecocks — Training",
      category: "Shuttlecocks",
      spec: "Tube of 12, duck feather, speed 75, budget-friendly",
      description: "Built for repetition drills and coaching sessions where you're going through a lot of shuttles — a lower-cost feather option so practice doesn't get expensive.",
      price: 28,
      icon: "shuttle"
    },
    {
      id: "shuttle-hybrid",
      name: "Hybrid shuttlecocks",
      category: "Shuttlecocks",
      spec: "Tube of 6, nylon base with feather-style skirt",
      description: "A middle ground between feather and nylon — a synthetic skirt shaped to mimic real feather flight, with much better durability. Good value for regular social play.",
      price: 24,
      icon: "shuttle",
      badge: "new"
    },
    {
      id: "racket-carlton-yellow",
      name: "Carlton — Yellow/Black",
      category: "Rackets",
      spec: "Even balance, 3U, medium flex, 85±2g, 675mm",
      description: "An even-balance frame that suits players who want one racket for both attack and defence. Medium flex gives forgiving power without needing a fast, technical swing.",
      price: 79,
      image: "images/racket-carlton-yellow.png",
      badge: "bestseller"
    },
    {
      id: "racket-carlton-lavender",
      name: "Carlton — Lavender",
      category: "Rackets",
      spec: "Lightweight aero frame, all-round play",
      description: "A lighter aero-shaped frame built for quick hand speed at the net and fast recovery between shots — a comfortable, all-round pick for social and club players.",
      price: 69,
      image: "images/racket-carlton-lavender.png"
    },
    {
      id: "racket-carlton-graphite",
      name: "Carlton — Graphite/Yellow",
      category: "Rackets",
      spec: "Full graphite aero head, fast swing",
      description: "Full graphite construction keeps this frame light and stiff, rewarding a faster swing with crisper, more direct shots. A step up for players moving beyond a beginner racket.",
      price: 75,
      image: "images/racket-carlton-graphite.png"
    },
    {
      id: "racket-white-blue",
      name: "All-round racket — White/Blue",
      category: "Rackets",
      spec: "Balanced frame, control-focused",
      description: "A control-first frame that favours placement over raw power — well suited to doubles players who rely on tight net play and quick redirection.",
      price: 65,
      image: "images/racket-white-blue.png"
    },
    {
      id: "racket-maroon",
      name: "Attack racket — Maroon",
      category: "Rackets",
      spec: "Head-light, built for fast net play",
      description: "Head-light weighting makes this frame quick through the air, favouring players who like to intercept at the net and finish points fast rather than trade smashes from the back.",
      price: 59,
      image: "images/racket-maroon-grip.png"
    },
    {
      id: "racket-yonex-astrox",
      name: "Yonex Astrox + racket bag",
      category: "Rackets",
      spec: "Includes padded cover bag",
      description: "A control-oriented Astrox frame built for players who want fast redirection at the net without giving up smash power. Comes complete with a padded single-racket cover bag, so it's ready to go straight from pickup. Genuine Yonex stock, restrung on request before collection.",
      price: 189,
      image: "images/racket-yonex-astrox.png",
      badge: "new"
    },
    {
      id: "racket-lining-halbertec9000",
      name: "Li-Ning Halbertec 9000 Power",
      category: "Rackets",
      spec: "Head-heavy power frame",
      description: "Li-Ning's power-focused Halbertec build, weighted toward the head for players who want maximum smash pace and are comfortable trading a little manoeuvrability for it. Best suited to intermediate–advanced singles or doubles attackers with an established swing.",
      price: 249,
      image: "images/racket-lining-halbertec9000.png",
      badge: "new"
    },
    {
      id: "racket-allround-speed",
      name: "All-Round Speed Racket",
      category: "Rackets",
      spec: "Even balance, fast frame, all levels",
      description: "A fast, even-balance frame designed to react quickly at the net while still holding enough weight in the head for a solid clear or smash. A dependable everyday racket.",
      price: 89,
      icon: "racket"
    },
    {
      id: "racket-power-attack",
      name: "Power Attack Racket — Black/Red",
      category: "Rackets",
      spec: "Head-heavy, stiff shaft, built for smashing",
      description: "Built for players who want to hit hard — a head-heavy build paired with a stiffer shaft channels swing speed straight into smash pace, at some cost to net quickness.",
      price: 99,
      icon: "racket"
    },
    {
      id: "racket-junior",
      name: "Junior Racket — Lightweight",
      category: "Rackets",
      spec: "Shorter shaft, ultra-light frame, ages 6–12",
      description: "A properly scaled-down racket for younger players — lighter overall weight and a shorter shaft make it easier to control and swing correctly while their technique develops.",
      price: 39,
      icon: "racket"
    },
    {
      id: "string-yonex-exbolt63",
      name: "Yonex Exbolt 63",
      category: "Strings",
      spec: "0.63mm, quick repulsion — per set, strung on request",
      description: "A thin, high-repulsion string that gives noticeably more shuttle speed off the strings without sacrificing much control — a favourite among club and tournament players who smash often. Strung fresh to your preferred tension before pickup.",
      price: 22,
      image: "images/string-yonex-exbolt63.png",
      badge: "bestseller"
    },
    {
      id: "string-yonex-aerobite-boost",
      name: "Yonex Aerobite Boost",
      category: "Strings",
      spec: "Hybrid control string — per set, strung on request",
      description: "A hybrid string setup blending different gauges across the mains and crosses, aimed at players who want extra control on the drop and net shots without losing smash power.",
      price: 25,
      image: "images/string-yonex-aerobite-boost.png"
    },
    {
      id: "string-yonex-nanogy95",
      name: "Yonex Nanogy 95",
      category: "Strings",
      spec: "0.65mm, durable, medium feel — per set",
      description: "A durable, medium-gauge all-rounder that holds tension well over time — a solid default choice if you're not chasing a specific playstyle and just want a string that lasts.",
      price: 20,
      image: "images/string-yonex-nanogy95.png"
    },
    {
      id: "string-durability",
      name: "Durability String — 0.70mm",
      category: "Strings",
      spec: "0.70mm thick gauge, long-lasting — per set",
      description: "A thicker 0.70mm gauge built to survive frequent, hard-hitting sessions. Trades a little feel for a noticeably longer lifespan between restrings — good value for heavy racket use.",
      price: 16,
      icon: "string"
    },
    {
      id: "string-control",
      name: "Control String — 0.65mm",
      category: "Strings",
      spec: "0.65mm, soft repulsion, precision-focused — per set",
      description: "A softer-feeling string tuned for touch and placement rather than raw power — well suited to doubles players who rely on tight net shots and precise drop shots.",
      price: 19,
      icon: "string"
    },
    {
      id: "grip-yonex-towel",
      name: "Yonex Towel Grip",
      category: "Grips",
      spec: "100% cotton, sweat absorption",
      description: "A soft cotton towel wrap that soaks up sweat fast, keeping your hold secure through long rallies. Popular with players who sweat heavily or play in humid conditions.",
      price: 8,
      image: "images/grip-yonex-towel.png"
    },
    {
      id: "grip-yonex-yellow",
      name: "Yonex Replacement Grip",
      category: "Grips",
      spec: "Cushioned, spiral wrap, yellow",
      description: "A cushioned base-layer grip that goes directly on the handle, giving a slightly thicker, softer feel than the bare frame. Replace every few months as the padding wears down.",
      price: 10,
      image: "images/grip-yonex-yellow-spiral.png"
    },
    {
      id: "grip-yonex-supergrip",
      name: "Yonex Super Grip",
      category: "Grips",
      spec: "Synthetic overgrip, pack of 3",
      description: "A thin, tacky synthetic overgrip that wraps over your existing grip for extra hold — quick to replace and a favourite for players who like to change grips often.",
      price: 9,
      image: "images/grip-yonex-supergrip-orange.png",
      badge: "bestseller"
    },
    {
      id: "grip-yonex-overgrip-multi",
      name: "Yonex Overgrip — assorted",
      category: "Grips",
      spec: "Pack of 5, assorted colours",
      description: "The same tacky synthetic overgrip in a five-pack of assorted colours, so you've always got a fresh one on hand and can colour-code multiple rackets.",
      price: 15,
      image: "images/grip-yonex-overgrip-multicolor.png"
    },
    {
      id: "grip-cushion-black",
      name: "Cushioned Replacement Grip — Black",
      category: "Grips",
      spec: "Shock-absorbing base grip, black",
      description: "A denser cushioned base grip aimed at players who feel shock through the handle on off-centre hits — softer impact on the hand during long sessions.",
      price: 10,
      icon: "grip"
    },
    {
      id: "grip-towel-blue",
      name: "Towel Grip — Blue",
      category: "Grips",
      spec: "100% cotton, sweat absorption, blue",
      description: "Same cotton towel construction as our standard towel grip, in blue — soaks up sweat quickly and gives a soft, secure hold through long matches.",
      price: 8,
      icon: "grip"
    },
    {
      id: "grip-overgrip-tacky",
      name: "Tacky Overgrip — 3 pack",
      category: "Grips",
      spec: "Extra-tack synthetic overgrip, pack of 3",
      description: "A stickier overgrip formula for players whose hands sweat mid-match — holds tack for longer than a standard overgrip before it needs replacing.",
      price: 11,
      icon: "grip"
    },
    {
      id: "shoes-court-white",
      name: "Court shoe — White/Navy",
      category: "Shoes",
      spec: "Non-marking sole, cushioned midsole",
      description: "A non-marking court sole that's safe on indoor courts, paired with a cushioned midsole for the repeated lunges and direction changes badminton demands.",
      price: 99,
      icon: "shoe",
      badge: "new"
    },
    {
      id: "shoes-court-red",
      name: "Court shoe — Red/Black",
      category: "Shoes",
      spec: "Lightweight, reinforced toe guard",
      description: "A lighter build with a reinforced toe guard for players who drag their front foot on lunges — good balance between speed and durability for regular match play.",
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

let selectedQty = {}; // id -> qty chosen before adding to cart (not yet in cart)

function getSelected(id) {
  return selectedQty[id] || 1;
}

function productCard(p) {
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
        <div class="footer-actions">
          <div class="qty-control">
            <button data-role="qty" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">–</button>
            <span data-qty="${p.id}">${getSelected(p.id)}</span>
            <button data-role="qty" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-add-cart" data-role="add" data-id="${p.id}">Add to cart</button>
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

function handleQtySelect(e) {
  const btn = e.target.closest('button[data-role="qty"]');
  if (!btn) return;
  e.stopPropagation();
  const id = btn.dataset.id;
  const cur = getSelected(id);
  if (btn.dataset.action === "inc") selectedQty[id] = cur + 1;
  if (btn.dataset.action === "dec") selectedQty[id] = Math.max(1, cur - 1);
  const span = e.currentTarget.querySelector(`span[data-qty="${id}"]`);
  if (span) span.textContent = getSelected(id);
}

function handleAddToCart(e) {
  const btn = e.target.closest('button[data-role="add"]');
  if (!btn) return;
  e.stopPropagation();
  const id = btn.dataset.id;
  const qtyToAdd = getSelected(id);
  cart[id] = (cart[id] || 0) + qtyToAdd;
  selectedQty[id] = 1;
  renderCart();
  const span = e.currentTarget.querySelector(`span[data-qty="${id}"]`);
  if (span) span.textContent = getSelected(id);

  const originalText = btn.textContent;
  btn.textContent = "Added ✓";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.remove("added");
  }, 1200);
}

function handleCardOpen(e) {
  if (e.target.closest("button")) return;
  const card = e.target.closest(".product-card[data-open]");
  if (!card) return;
  openProductModal(card.dataset.open);
}

grid.addEventListener("click", handleQtySelect);
newArrivalsGrid.addEventListener("click", handleQtySelect);
bestSellersGrid.addEventListener("click", handleQtySelect);
grid.addEventListener("click", handleAddToCart);
newArrivalsGrid.addEventListener("click", handleAddToCart);
bestSellersGrid.addEventListener("click", handleAddToCart);
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
  modalQty.textContent = getSelected(id);

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
  const cur = getSelected(modalProductId);
  if (btn.dataset.action === "inc") selectedQty[modalProductId] = cur + 1;
  if (btn.dataset.action === "dec") selectedQty[modalProductId] = Math.max(1, cur - 1);
  modalQty.textContent = getSelected(modalProductId);
});

modalAddBtn.addEventListener("click", () => {
  if (!modalProductId) return;
  const qtyToAdd = getSelected(modalProductId);
  cart[modalProductId] = (cart[modalProductId] || 0) + qtyToAdd;
  selectedQty[modalProductId] = 1;
  modalQty.textContent = getSelected(modalProductId);
  renderProducts();
  renderRails();
  renderCart();

  const originalText = modalAddBtn.textContent;
  modalAddBtn.textContent = "Added ✓";
  setTimeout(() => { modalAddBtn.textContent = originalText; }, 1200);
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
document.getElementById("payidDisplay").textContent = CONFIG.payid;
document.getElementById("payidInlineValue").textContent = CONFIG.payid;

/* ---------- init ---------- */
renderCategoryTiles();
renderFilters();
renderProducts();
renderRails();
renderCart();
