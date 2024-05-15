var modal = document.getElementById("balanceModal");
var btn = document.querySelector(".top_up_balance");
var span = document.querySelector(".close");
var confirmBtn = document.getElementById("confirmBalance");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  var balanceAmount = document.getElementById("balanceAmount").value;
  playerBalanceStorage.updateBalance(+balanceAmount);
  modal.style.display = "none";
}