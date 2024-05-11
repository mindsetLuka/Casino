function displayBalanceStartPage() {
  const balanceSpan = document.getElementById("balance");
  balanceSpan.textContent = playerBalanceStorage.getBalance();
}

const LS_KEY_CASH = "cash";
const INITIAL_VALUE = 1000;
const playerBalanceStorage = {
  initializeBalance: function () {
    if (localStorage.getItem(LS_KEY_CASH) === null) {
      localStorage.setItem(LS_KEY_CASH, INITIAL_VALUE);
    }
    displayBalanceStartPage();
  },

  getBalance: function () {
    const balance = localStorage.getItem(LS_KEY_CASH);
    return balance ? parseInt(balance, 10) : INITIAL_VALUE;
  },

  setBalance: function (newBalance) {
    localStorage.setItem(LS_KEY_CASH, newBalance);
    displayBalanceStartPage();
  },

  updateBalance: function (amount) {
    const currentBalance = this.getBalance();
    const updatedBalance = currentBalance + amount;
    localStorage.setItem(LS_KEY_CASH, updatedBalance);
    displayBalanceStartPage();
  },
};

playerBalanceStorage.initializeBalance();

window.addEventListener("DOMContentLoaded", () => {
  displayBalanceStartPage();
});

window.addEventListener("storage", () => {
  displayBalanceStartPage();
});