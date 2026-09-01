# Shuttlebond

A static site for selling badminton gear, with orders paid by PayID transfer or cash on pickup. No backend, no accounts — it's plain HTML/CSS/JS, built to run free on GitHub Pages.

## How ordering works

There's no payment gateway involved. A customer:
1. Adds items to their order in the shop
2. Chooses PayID or cash
3. Taps "Send via SMS/WhatsApp" or "Send via email" — this opens their messaging app with the order, total, and your PayID pre-filled in the message
4. You confirm the order and arrange pickup/delivery once payment is sorted (or on the day, for cash)

You still confirm and track orders manually via text/email — this site's job is just to make building and sending a clear order easy for the customer.

## Before you publish — edit your details

Open **`app.js`** and edit the `CONFIG` block at the very top:

```js
const CONFIG = {
  businessName: "Shuttlebond",
  area: "Perth, WA",
  phone: "0400 000 000",   // your real mobile, used for the SMS/WhatsApp link
  email: "orders@shuttlebond.com.au",
  payid: "0400 000 000",   // your real PayID (phone, email, or ABN)
  products: [ ... ]
};
```

- `phone` is used to build the WhatsApp link (`wa.me`). It assumes an Australian mobile starting with 0 — the code converts `04xx xxx xxx` to `+61 4xx xxx xxx` automatically. If a customer doesn't have WhatsApp, the same link still opens as a normal SMS on most phones, or you can remove that button and keep only email.
- `payid` is shown on the Contact section and inside the order drawer. Use whatever your bank has registered as your PayID (usually your phone number or email).
- Each product needs an `id` (unique, no spaces), `name`, `category`, `spec` (short description), `price` (a number, no `$`), and an `icon` (`shuttle`, `racket`, `grip`, or `string`).

You can add, remove, or reorder products freely — the shop grid and category filters build themselves from this list.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g. `shuttlebond`).
2. Upload these three files to the repo root: `index.html`, `style.css`, `app.js` (and this `README.md` if you like).
   - Easiest way: on the repo page, click **Add file → Upload files**, drag in the files, and commit.
3. Go to the repo's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL like `https://yourusername.github.io/shuttlebond/` within a minute or two. That's your live site.

To make changes later: edit the file directly on GitHub (pencil icon) or re-upload it, commit, and the live site updates automatically within a minute.

## Using a custom domain (optional)

In the same **Settings → Pages** screen, add your domain under "Custom domain" and follow GitHub's DNS instructions (a CNAME record pointing at `yourusername.github.io`). This is optional — the free `github.io` address works fine to start.

## Notes on payments

This site never handles money directly — PayID transfers happen in the customer's own banking app, and cash is handled in person. That keeps things simple and free, but also means you're relying on customers to actually pay and on checking your bank/cash before confirming an order. For anything higher-volume, a proper payment gateway (Stripe, Square, etc.) would reduce that manual step, but needs a paid plan and more setup than a static GitHub Pages site supports.
