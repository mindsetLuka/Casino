const LS_KEY_CASH = "cash";
const INITIAL_VALUE = 1000;
const playerBalanceStorage = {
    initializeBalance: function() {
        if (localStorage.getItem(LS_KEY_CASH) === null) {
            localStorage.setItem(LS_KEY_CASH, INITIAL_VALUE);
        }
        this.displayBalance();
    },

    getBalance: function() {
        const balance = localStorage.getItem(LS_KEY_CASH);
        return balance ? parseInt(balance, 10) : 1000;
    },

    setBalance: function(newBalance) {
        localStorage.setItem(LS_KEY_CASH, newBalance);
        this.displayBalance();
    },

    updateBalance: function(amount) {
        const currentBalance = this.getBalance();
        const updatedBalance = currentBalance + amount;
        localStorage.setItem(LS_KEY_CASH, updatedBalance);
        this.displayBalance();
    },

    displayBalance: function() {
        const balanceSpan = document.getElementById('balance');
        balanceSpan.textContent = this.getBalance();
    }
};

playerBalanceStorage.initializeBalance();

window.addEventListener('DOMContentLoaded', () => {
    playerBalanceStorage.displayBalance();
});

window.addEventListener('storage', () => {
    playerBalanceStorage.displayBalance();
});