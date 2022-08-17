var favorite = JSON.parse(localStorage.getItem("favourites")) || [];
window.addEventListener("load", function () {
  displayData(favorite);
});
function displayData(MatchData) {
  document.querySelector("tbody").innerText = "";
  MatchData.map(function (ele, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    td1.innerText = ele.MatchNum;
    td2.innerText = ele.TeamA;
    td3.innerText = ele.TeamB;
    td4.innerText = ele.Date;
    td5.innerText = ele.Venue;
    td6.innerText = "Delete";
    td6.style.cursor = "pointer";
    td6.setAttribute("class", "fav");
    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
    td6.addEventListener("click", function () {
      removeFav(index);
    });
  });
}
function removeFav(index) {
  favorite.splice(index, 1);
  localStorage.setItem("favourites", JSON.stringify(favorite));
  displayData(favorite);
}
