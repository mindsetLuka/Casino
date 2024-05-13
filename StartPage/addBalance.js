var modal = document.getElementById("balanceModal");
var btn = document.querySelector(".top_up_balance");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.getElementById("confirmBalance");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  var balanceAmount = document.getElementById("balanceAmount").value;
  // ну хз хз че делать у меня лапки
  modal.style.display = "none";
}