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
      icon: "shuttle"
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
      id: "racket-allround",
      name: "All-round racket",
      category: "Rackets",
      spec: "Even balance, 3U, strung on request",
      price: 89,
      icon: "racket"
    },
    {
      id: "racket-attack",
      name: "Attack racket",
      category: "Rackets",
      spec: "Head-heavy, 3U, for power hitters",
      price: 119,
      icon: "racket"
    },
    {
      id: "grip-overgrip",
      name: "Overgrip — pack of 3",
      category: "Grips & string",
      spec: "Tacky dry-feel, assorted colours",
      price: 12,
      icon: "grip"
    },
    {
      id: "string-set",
      name: "Racket string, per set",
      category: "Grips & string",
      spec: "0.66mm, strung same day",
      price: 15,
      icon: "string"
    }
  ]
};
/* ============================================================ */

const icons = {
  shuttle: `<svg viewBox="0 0 100 90"><circle cx="50" cy="66" r="12" fill="#C6FF33"/><path d="M40 58 L20 14 M46 55 L36 10 M54 55 L64 10 M60 58 L80 14" stroke="#7A8570" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M20 14 Q50 -2 80 14" stroke="#7A8570" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  racket: `<svg viewBox="0 0 100 90"><ellipse cx="50" cy="30" rx="26" ry="28" fill="none" stroke="#7A8570" stroke-width="2.4"/><path d="M50 58 L50 84" stroke="#C6FF33" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 30 L72 30 M50 8 L50 52" stroke="#7A8570" stroke-width="1" opacity="0.6"/>
    <path d="M33 14 L67 46 M67 14 L33 46" stroke="#7A8570" stroke-width="1" opacity="0.6"/></svg>`,
  grip: `<svg viewBox="0 0 100 90"><rect x="20" y="34" width="60" height="22" rx="3" fill="none" stroke="#7A8570" stroke-width="2.4"/><path d="M28 34 L28 56 M40 34 L40 56 M52 34 L52 56 M64 34 L64 56" stroke="#C6FF33" stroke-width="2"/></svg>`,
  string: `<svg viewBox="0 0 100 90"><circle cx="50" cy="45" r="30" fill="none" stroke="#7A8570" stroke-width="2.4"/><circle cx="50" cy="45" r="6" fill="#C6FF33"/></svg>`
};

const money = n => `$${n}`;

/* ---------- state ---------- */
let cart = {}; // id -> qty
let activeFilter = "All";

/* ---------- render products ---------- */
const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("filters");

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
  grid.innerHTML = items.map(p => {
    const qty = cart[p.id] || 0;
    return `
    <div class="product-card">
      <div class="product-icon">${icons[p.icon] || ""}</div>
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
  }).join("");
}

filtersEl.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeFilter = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

grid.addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = btn.dataset.id;
  const cur = cart[id] || 0;
  if (btn.dataset.action === "inc") cart[id] = cur + 1;
  if (btn.dataset.action === "dec") cart[id] = Math.max(0, cur - 1);
  if (cart[id] === 0) delete cart[id];
  renderProducts();
  renderCart();
});

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
renderFilters();
renderProducts();
renderCart();
