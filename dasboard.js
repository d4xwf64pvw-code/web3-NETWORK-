const assets = {
  ethereum: 1230.45,
  solana: 430.10,
  polygon: 98.32,
  bnb: 670.00
  btc: 570.45,
};

function updatePrices() {
  let total = 0;

  Object.keys(assets).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const change = (Math.random() * 20 - 10); // up & down
    assets[id] += change;

    if (assets[id] < 1) assets[id] = 1;

    el.textContent = "$" + assets[id].toFixed(2);
    el.className = "asset-price " + (change >= 0 ? "green" : "red");

    total += assets[id];
  });

  const totalEl = document.getElementById("totalBalance");
  if (totalEl) {
    totalEl.textContent = "$" + total.toFixed(2);
  }
}

// run immediately
updatePrices();

// keep updating
setInterval(updatePrices, 2000);
