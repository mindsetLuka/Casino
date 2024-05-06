function putMoney() {
    let currBalance = Number(localStorage.getItem("cash"))
    localStorage.setItem("cash", currBalance+=1000)
    location.reload()
}


if (localStorage.getItem("cash")) {
    document.getElementById("balance").innerHTML = localStorage.getItem("cash")
}
else {
    document.getElementById("balance").innerHTML = "Баланса нет, ты нищук, съеби нахуй или жми на кнопку"
}