document.addEventListener("DOMContentLoaded", () => {

  const assets = {
    ethereum: 1230.45,
    solana: 430.10,
    polygon: 98.32,
    bnb: 670.00,
    avalanche: 120.55
  };

  function updatePrices() {
    Object.keys(assets).forEach(asset => {
      const change = (Math.random() * 100 - 50);
      assets[asset] += change;
      if (assets[asset] < 0) assets[asset] = 0;

      const el = document.getElementById(asset);
      if (el) {
        el.textContent = "$" + assets[asset].toFixed(2);
        el.className = change >= 0 ? "green" : "red";
      }
    });
  }

  setInterval(updatePrices, 2000);
});
